angular.module('listaTelefonica').provider('serialGenerator', function() {
  let _length = ''
  this.getLength = () => _length
  this.setLength = (length) => _length = length
  this.$get = () => {
    return {
      generate: () => {
        let serial = ''
        while(serial.length < _length) {
          serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32)
        }
        return serial
      }
    }
  }
})
