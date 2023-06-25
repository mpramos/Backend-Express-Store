const loginRouter = require('./loginRoutes')
function ApiRouters(app) {
  app.use('/login', loginRouter)
}
module.exports = ApiRouters;



// const LoginService = require('../Domain/loginService');

// class LoginController {
//   constructor() {
//     this.loginService = new LoginService();
//   }

//   async login(req, res) {
//     try {
//       // Obtener los datos de usuario del cuerpo de la solicitud
//       const { username, password } = req.body;

//       // Llamar al servicio de inicio de sesión para autenticar al usuario
//       const result = await this.loginService.loginUser(username, password);

//       // Enviar la respuesta al cliente
//       res.json(result);
//     } catch (error) {
//       // Manejar cualquier error que ocurra durante el proceso
//       res.status(500).json({ error: error.message });
//     }
//   }
// }

// module.exports = LoginController;