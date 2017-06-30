function getShortMessages(messages) {
	var result = messages.map(function(x) {
		return x.message;
 	});
 	var result2 = result.filter(function(message) {
 		return message.length < 50;
 	});
 	return result2;
}

module.exports = getShortMessages

/*

    module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }

 */