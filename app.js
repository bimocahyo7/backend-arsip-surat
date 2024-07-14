const express = require("express");
const routers = require("./routes/index");
const cors = require("cors");
const serverless = require("serverless-http");
const path = require("path");

const app = express();
const port = 4000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".pdf")) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline");
      }
    },
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Backend Website Arsip Surat</h1>");
});

app.use(routers);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Started server at on port ${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
