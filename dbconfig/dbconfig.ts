import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URL!)
        const connection = mongoose.connection
        connection.once('connected', () => {

            console.log("mongodb connected ❤️❤️❤️")
        })

        connection.on('error', (err) => {
            console.log("mongodb connection failed , please check DB is running or not"+ err)
            process.exit()
        })
    } catch (error) {
        console.log("mongodb connection failed")
        console.log(error)
    }
}