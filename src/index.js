module.exports = function toReadable (number) {
    var units = ['zero', 'one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    var denary = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen' ,'eighteen',  'nineteen']
    var prefixes = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
  
    var result = number.toString().split('').reverse();
  
    var string = [];

    for (let i = 0; result.length > i; i++) {

      if (i === 0)
      string[i] = units[result[0]];
  
      if (i === 1) {
        if (parseInt(result[1]) === 1)
        string[i - 1] = denary[result[0]];
        else if (parseInt(result[1]) === 0)
        string[i] = '';
        else
        string[i] = prefixes[result[1] - 2] + 'ty';
      }
  
      if (i === 2) {
        string[i] = units[result[2]] + ' hundred';
      }

      if(i === 3) {
        string[i] = units[result[3]] + ' thousand';
      }
    }
  
    if (string.length > 1) {
        string = string.filter(word => word !== 'zero' && word !== 'zero hundred');
        return string.reverse().join(' ').replace(/ +/g, ' ').trim();
      } else {
        return string.reverse().join(' ');
      }
}
