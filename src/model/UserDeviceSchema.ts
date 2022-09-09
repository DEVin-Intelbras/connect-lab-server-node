import mongoose from 'mongoose'
import { Device } from './DeviceSchema'
import { Local } from './LocalSchema'
import { User } from './UserSchema'

interface UserDevice {
  _id: string
  user: User
  device: Device
  is_on: boolean
  local: Local
  room: string
}

const Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
  device: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Devices',
  },
  local: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Locals',
  },
  is_on: {
    type: mongoose.Schema.Types.Boolean,
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
})

export default mongoose.model<UserDevice>('UserDevices', Schema)
