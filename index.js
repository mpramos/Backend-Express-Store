const express = require('express');
const loginRoutes = require('./login/Application/loginController');
const app = express();
const port = 3000;
app.use(express.json());

 
loginRoutes(app)
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});