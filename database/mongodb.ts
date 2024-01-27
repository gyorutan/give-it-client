import mongoose from "mongoose";

export async function dbConnect() {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    const connect = mongoose.connection;

    connect.on("connected", () => {
      console.log("MongoDB에 연결되었습니다");
    });

    connect.on("error", (err) => {
      console.log("MongoDB 연결 실패. " + err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
