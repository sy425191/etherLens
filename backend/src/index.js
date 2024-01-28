import dotenv from "dotenv";
import app from "./app.js";
import connectDatabase from "./db/index.js";
import setUpMoralis from "./etherium/index.js";

dotenv.config({ path: "./.env" });

connectDatabase()
  .then(() => {
    setUpMoralis()
      .then(() => {
        app.listen(process.env.PORT, () =>
          console.log(`Server running on port ${process.env.PORT}`)
        );
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  })
  .catch((error) => {
    console.error("Mongoose Connection Failed, Error: ", error);
    throw error;
  });
