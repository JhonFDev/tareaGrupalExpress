const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 4000;

app.get("/saludar/:idioma", (req, res) => {
  const idioma = req.params.idioma;
  let mensaje = "";

  switch (idioma) {
    case "español":
      mensaje = "Hola , como estas?";
      break;
    case "ingles":
      mensaje = "hello, how are you?";
      break;
    case "italiano":
      mensaje = "Ciao ragazzi, come stai";
      break;
    default:
      mensaje = "no tenemos ese idioma en nuestra base de datos";
  }
  res.send(mensaje)
});




app.get('/desarrolladores',(req,res) =>{
    res.send("este servidor fue desarrollado por : Jhon Florez y Marilin de la Ossa y Franklin")
})

app.get('/contar/:numeros',(req,res) => {
    const numeros = parseInt(req.params.numeros)
    let conteo = ','
    for (let i = 1; i <= numeros; i++) {
        conteo += i+';'        
    }
    res.send(conteo)
})

app.listen(port,() =>{
    console.log('el servidor a iniciado en el puerto http://localhost:${port}')
})