import mongose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongose.connect(process.env.MONGO_URI || "mongodb+srv://MaheshJ:1234@cluster0.ecrkt.mongodb.net/nodepoc?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;
