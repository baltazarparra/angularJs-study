angular.module('listaTelefonica').factory('contatosAPI', function ($http, config) {
  const _getContatos = () => $http.get(`${config.baseUrl}/contatos`)
  const _saveContato = (contato) => $http.post(`${config.baseUrl}/contatos`, contato)

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  }
})
