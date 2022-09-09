import { Request, Response } from 'express'

import { UserDeviceSchema } from '../model'

export class UserDeviceController {
  async all(_id: Request, response: Response) {
    try {
      return UserDeviceSchema.find().populate('device').populate('local')
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao obter os dispositivos do usuário!',
      })
    }
  }

  async one(request: Request, response: Response) {
    try {
      return UserDeviceSchema.findById(request.params.id).populate('device').populate('local')
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao obter o dispositivo do usuário!',
      })
    }
  }

  async byUser(request: Request, response: Response) {
    try {
      return UserDeviceSchema.find({ user: request.params.userId }).populate('device').populate('local')
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao obter os dispositivos do usuário!',
      })
    }
  }

  async create(request: Request, response: Response) {
    try {
      return UserDeviceSchema.create(request.body)
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao cadastrar o dispositivo do usuário!',
      })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const userDevice = await UserDeviceSchema.findById(request.params.id)

      if (!userDevice) {
        return response.status(404).json({ error: 'Dispositivo não encontrado.' })
      }

      return UserDeviceSchema.deleteOne({ _id: request.params.id })
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao deletar o dispositivo do usuário!',
      })
    }
  }

  async updateStatus(request: Request, response: Response) {
    try {
      const userDevice = await UserDeviceSchema.findById(request.params.id)

      if (!userDevice) {
        return response.status(404).json({ error: 'Dispositivo não encontrado.' })
      }

      userDevice.is_on = request.body.is_on
      return UserDeviceSchema.findOneAndUpdate({ _id: request.params.id }, userDevice, {
        new: true,
      })
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao atulizar o status do dispositivo do usuário!',
      })
    }
  }
}
