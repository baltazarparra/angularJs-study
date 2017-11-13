angular.module('listaTelefonica').filter('ellipsis', () => {
  return (input, size) => {

    if (input.length <= size)
      return input

    const output = input.substring(0, (size || 8)) + '...'
      return output

  }
})
