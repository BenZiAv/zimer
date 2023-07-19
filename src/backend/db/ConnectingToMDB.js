import mongoose from "mongoose";

//connecting using mongoose

class ConnectingToMDB {
  //connecting to DB:
  static async connent() {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
      socketTimeoutMS: 10000,
    };

    const url =
      "mongodb+srv://sray1985:Aa036572501@zimer1.wod9dje.mongodb.net/zimer";
    await mongoose
      .connect(url, options)
      .then(() => {
        console.log("DataBase staus:", "connecting to DataBase Succsess");
      })
      .catch((err) => {
        console.error("Error disconnecting from database:", err);
      });
  }

  //disconnect from DB:
  static async disconnect() {
      mongoose
        .disconnect()
        .then(() => {
          console.log("DataBase staus:", "disconnecting from MongoDB Succsess");
        })
        .catch((err) => {
          console.error("Error disconnecting from database:", err);
        });
  }
}

export default { ConnectingToMDB };