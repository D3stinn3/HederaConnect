import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IUser extends Document {
  clerkId: string
  email: string
  firstName?: string
  lastName?: string
}

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
})

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
export default User
