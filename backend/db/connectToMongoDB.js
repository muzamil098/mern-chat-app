import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO_DB_URI);
         console.log("Connected to MongoDb")
    } catch (error) {
        console.log("Error connection", error.message);
    }
}
export default connectToMongoDB;