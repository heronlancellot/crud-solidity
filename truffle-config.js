module.exports = {
  networks: {  // com isso faz localmente, mas deve-se configurar essa parte para fazer deploy em uma rede real
  },
  compilers: {
    solc: {
      version: "^0.8.0",   // importante ser a mesma versão do contrato
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
