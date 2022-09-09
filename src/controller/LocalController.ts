import { Request, Response } from 'express'
import { LocalSchema } from '../model'

export class LocalController {
  async all(_: Request, response: Response) {
    try {
      return LocalSchema.find()
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao obter os locais!',
      })
    }
  }
}
