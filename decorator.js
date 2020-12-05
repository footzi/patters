class Server {
  constructor() {
    this.port = 8000;
    this.price = 10000;
  }

  getPrice() {
    return this.price;
  }

  getPort() {
    return this.port;
  }
}

class AwsServer {
  constructor(server) {
    this.server = server;
    this.awsServer = true;
  }

  getPrice() {
    return `${this.server.getPrice() + 25000} $`;
  }

  getPort() {
    return this.server.getPort() + 1000;
  }
}

module.exports = {
  Server,
  AwsServer,
};
