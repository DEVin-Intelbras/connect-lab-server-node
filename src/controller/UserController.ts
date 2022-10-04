import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { UserSchema } from '../model'

export class UserController {
  async one(request: Request, response: Response) {
    try {
      const user = await UserSchema.findById(request.params.id)
      if (!user) {
        return response.status(404).json({
          error: 'Usuário não encontrado!',
        })
      }
      user.password = ''
      return user
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao obter o usuário!',
      })
    }
  }

  async create(request: Request, response: Response) {
    try {
      const emailAlreadyExists = await UserSchema.findOne({
        email: request.body.email,
      })

      if (emailAlreadyExists) {
        return response.status(400).json({
          error: 'E-mail já existe!',
        })
      }

      request.body.password = await bcrypt.hash(request.body.password, 10)

      const newUSer = await UserSchema.create(request.body)
      newUSer.password = ''
      return response.status(201).json(newUSer)
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao cadastrar o usuário!',
      })
    }
  }

  async update(request: Request, response: Response) {
    try {
      const user = await UserSchema.findById(request.params.id)

      if (!user) {
        return response.status(404).json({ error: 'Usuário não encontrado.' })
      }

      const emailAlreadyExists = await UserSchema.findOne({
        email: request.body.email,
        _id: { $ne: request.params.id },
      })

      if (emailAlreadyExists) {
        return response.status(400).json({
          error: 'E-mail já existe!',
        })
      }

      let password = user.password
      if (!!request.body.password.length) {
        const newPass = await bcrypt.hash(request.body.password, 10)
        password = newPass
      }

      request.body.password = password

      const newUSer = await UserSchema.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
      })
      if (newUSer) {
        newUSer.password = ''
      }
      return response.status(200).json(newUSer)
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao atualizar o usuário!',
      })
    }
  }

  async login(request: Request, response: Response) {
    try {
      const user = await UserSchema.findOne({ email: request.body.email })

      if (!user) {
        return response.status(401).json({
          error: 'Login ou senha inválida!',
        })
      }

      const result = await bcrypt.compare(request.body.password, user.password)
      if (result) {
        const { SECRET = 'secret' } = process.env
        const token = jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, SECRET)
        user.password = ''
        return response.json({ token, user })
      }

      return response.status(401).json({
        error: 'Login ou senha inválida!',
      })
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao fazer login!',
      })
    }
  }
}
