const LoginModel = require('../Domain/loginModel');
const LoginRepository = require('../Infrastructure/loginRepository');

class LoginService {
  constructor() {
    this.loginRepository = new LoginRepository();
  }

  async loginUser(username, password) {
    try {
      // Validar los datos del usuario si es necesario
      // Por ejemplo, puedes verificar si el usuario existe en la base de datos y si la contraseña es correcta

      // Crear una instancia del modelo de login
      const loginModel = new LoginModel(username, password);

      // Enviar los datos al repositorio para su procesamiento
      const result = await this.loginRepository.loginUser(loginModel);

      // Retornar el resultado al controlador
      return result;
    } catch (error) {
      // Manejar cualquier error que ocurra durante el proceso
      throw new Error('Ocurrió un error al intentar iniciar sesión');
    }
  }
}

module.exports = LoginService;