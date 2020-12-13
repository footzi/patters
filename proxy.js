class PermissionServer {
  availableUsers = ["Peter", "John", "Stuart"];

  constructor(auth) {
    this.auth = auth;
  }

  // заменяем метод прокисуемого класса
  login(name) {
    if (this.availableUsers.includes(name)) {
      return this.auth.login(name);
    } else {
      return `Доступ запрещен`;
    }
  }
}

class Authorization {
  login(name) {
    return `Hello: ${name}`;
  }
}

module.exports = {
  PermissionServer,
  Authorization,
};