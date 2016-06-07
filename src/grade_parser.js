exports.getMovements = function(grades) {
  var pushed = [];

  for (var i = 0; i < grades.length; i++) {
    if (i > 0) {
      if (grades[i] > grades[i - 1]) {
        pushed.push('up')
      } else if (grades[i] === grades[i - 1]) {
        pushed.push('even')
      } else {
        pushed.push('down')
      }
    }
  }
  return pushed;
}

exports.inDecline = function(grades) {
  var pushed = [];
  var count = 0;
  for (var i = 0; i < grades.length; i++) {
    if (i > 0) {
      if (grades[i] > grades[i - 1]) {
        pushed.push('up')
      } else if (grades[i] === grades[i - 1]) {
        pushed.push('even')
      } else {
        pushed.push('down')
      }
    }
  }

  if (pushed.length <= 1) {
    return false;
  }
  for (var i = 0; i < pushed.length; i++) {
     if (pushed[i] === 'down') {
          count++;
      } else if(pushed[i] === 'up'){
        count = 0;
      }
    }

    if (count >= 3) {
      return true;
    } else {
      return false;
    }

}
