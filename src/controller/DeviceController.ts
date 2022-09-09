import { Request, Response } from 'express'

import { DeviceSchema } from '../model'

export class DeviceController {
  async all(_: Request, response: Response) {
    try {
      return DeviceSchema.find()
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao obter os dispositivos!',
      })
    }
  }

  async one(request: Request, response: Response) {
    try {
      return DeviceSchema.findById(request.params.id)
    } catch (error) {
      return response.status(500).json({
        error: 'Falha ao obter o dispositivo!',
      })
    }
  }
}
