import mongoose from 'mongoose'

export interface Device {
  _id?: string
  name: string
  type: string
  madeBy: string
  photoUrl: string
  info: {
    virtual_id: string
    ip_address: string
    mac_address: string
    signal: string
  }
}

const Schema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  type: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  madeBy: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  photoUrl: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  info: {
    virtual_id: {
      type: mongoose.Schema.Types.String,
      required: true,
    },

    ip_address: {
      type: mongoose.Schema.Types.String,
      required: true,
    },

    mac_address: {
      type: mongoose.Schema.Types.String,
      required: true,
    },

    signal: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
})

export default mongoose.model<Device>('Devices', Schema)
