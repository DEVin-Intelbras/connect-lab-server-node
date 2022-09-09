import mongoose from 'mongoose'

export interface User {
  _id?: String
  fullName: string
  photoUrl?: string
  email: string
  password: string
  phone?: string
  userAddress: {
    zipCode: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    complement?: string
  }
}

const AddressSchema = new mongoose.Schema({
  zipCode: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  street: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  number: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  neighborhood: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  state: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  complement: {
    type: mongoose.Schema.Types.String,
  },
})

const Schema = new mongoose.Schema({
  fullName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  photoUrl: {
    type: mongoose.Schema.Types.String,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  phone: {
    type: mongoose.Schema.Types.String,
  },
  userAddress: {
    type: AddressSchema,
    required: true,
  },
})

export default mongoose.model<User>('Users', Schema)
