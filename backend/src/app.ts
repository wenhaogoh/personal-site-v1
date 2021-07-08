import express from "express";
import cors from "cors";
import messages from "./routes/messages";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/messages", messages);

app.listen(PORT, () => {
  return console.log(`Server listening on ${PORT}`);
});
