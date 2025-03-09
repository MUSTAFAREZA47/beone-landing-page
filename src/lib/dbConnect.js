import mongoose from 'mongoose'
import { DB_NAME } from '../../src/constant'

const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`,
        )
        console.log(
            `\n MongoDB is connected!!! DB Host: ${connectionInstance.connection.host}`,
        )
    } catch (error) {
        console.log('MongoDB connection Failed !!!', error)
        process.exit(1)
    }
}

export default dbConnect
