import mongoose from 'mongoose'

export interface Local {
  _id?: String
  description: string
}

const Schema = new mongoose.Schema({
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
})

export default mongoose.model<Local>('Locals', Schema)
