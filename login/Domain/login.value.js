const { LoginModel } = require('./LoginModel');

class LoginValue extends LoginModel {
  ide = Number;
  usuario = String;
  pass = String;
  mail = String;

  constructor({ ide, usuario, pass }) {
    this.ide = ide;
    this.usuario = usuario;
    this.pass = pass;
    this.mail = "default";
  }
}

module.exports = LoginValue;