//Convert the following code from a for-loop to Array#map:

/*
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

module.exports = doubleAll
*/

function doubleAll(number){
	var result = number.map(function(x) {
    return x * 2;
 	});
 	return result;
}

module.exports = doubleAll

// official solution

/*
    module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }

 */
