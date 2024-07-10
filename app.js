const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Backend Website Arsip Surat</h1>");
});

app.listen(port, () => {
  console.log(`Started server at on port ${port}`);
});
