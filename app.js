require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas

app.use("/api", require("./routes/routes"));

// carga de archivos
// app.use(express.static("thumbs"));
// app.use(express.static("pets"));
//comentario 
//heroku
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname + '/site/'))
  app.use('*',(req,res)=>{
    res.sendFile(__dirname + '/site/index.html')
  })
}

// DB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI_DB)
  .then(() => console.log("Conexion OK con DB"))
  .catch((err) => console.error(err));

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`La aplicacion esta escuchando en http://localhost:${port}`)
);
