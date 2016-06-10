function csvToMarkdownTable(data) {
  let lines = data.split('\n');

  let rows = lines.map(function(row) {
    row = row.split(',');
    return row
  })

  let lengthsArr = [];
  rows.forEach(function(row, i) {
    row.forEach(function(item, j) {
      if (!lengthsArr[j]) {
        lengthsArr.push(item.length);
      }
      if (lengthsArr[j] < item.length) {
        lengthsArr[j] = item.length;
      }
    })
  })

  let dashArray = [];
  lengthsArr.forEach(function(length, i) {
    if (i < rows[i].length - 1) {
      dashArray.push('| ' + '-'.repeat(length) + ' ');
    } else {
      dashArray.push('| ' + '-'.repeat(length) + ' |\n');
    }
  })
  rows.splice(1, 0, dashArray);
  let newColumns = [];
  rows.forEach(function(row, j) {
    row.forEach(function(item, i) {
      if (item.length <= lengthsArr[i]) {
        if (i < row.length - 1) {
          item = '| ' + item + ' '.repeat(lengthsArr[i] - item.length + 1);
          newColumns.push(item)
        } else if (i < row.length) {
          item = '| ' + item + ' '.repeat(lengthsArr[i] - item.length) + " |\n";
          newColumns.push(item)
        }
      } else {
        newColumns.push(item)
      }
    })
  })
  newColumns = newColumns.join('');
  console.log(newColumns);
  return newColumns
}

module.exports = csvToMarkdownTable;
