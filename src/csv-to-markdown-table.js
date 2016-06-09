function csvToMarkdownTable (data) {
  let lines = data.split('\n');

  let rows = lines.map(function (row) {
    row = row.split(',');
    return row
  })
  console.log('rows', rows);

  let lengthsArr = [];
  rows.forEach(function (row, i) {
    row.forEach(function (item, j) {
      if(!lengthsArr[j])
    })
  })

}
// .splice()
// .map()
// while in .map
// .forEach()
module.exports = csvToMarkdownTable;
