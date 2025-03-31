import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI as string
if (!MONGO_URI) {
  throw new Error('❌ MONGO_URI is missing in environment variables')
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('✅ Already connected to MongoDB')
    return
  }

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: 'HederaConnect_DB',
      serverSelectionTimeoutMS: 30000, // Increased timeout
      socketTimeoutMS: 45000, // Prevents early socket disconnection
    })
    console.log('✅ MongoDB Connected')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('❌ MongoDB Connection Error:', error.message)
    } else {
      console.error('❌ MongoDB Connection Error:', error)
    }
    throw new Error('Failed to connect to MongoDB')
  }
}
