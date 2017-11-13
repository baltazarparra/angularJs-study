angular.module('listaTelefonica').filter('name', () => {
  return (input) => {
    const listaDeNomes = input.split(' ')
    const listaDeNomesFormatada = listaDeNomes.map((nome) => {

      if(/(da|de)/.test(nome))
        return nome

      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase()

    })
    return listaDeNomesFormatada.join(' ')
  }
})
