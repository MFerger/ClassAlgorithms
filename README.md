# CSV to Markdown Table

Write code that:

* Reads text in a simplified CSV format
* Prints out a table suitable for Markdown

## Examples

Given the following CSV text:

```
First,Last,Address
Annamarie,Romaguera,9446 Schroeder Squares
Sebastian,Hessel,114 Frederic Centers
Marlon,Hahn,307 Bradtke Grove
Duane,Schowalter,10771 Keaton Knoll
Laurence,Schuster,610 Odell Point
```

Your code should produce a table that looks like:

```
| First     | Last       | Address                |
| --------- | ---------- | ---------------------- |
| Annamarie | Romaguera  | 9446 Schroeder Squares |
| Sebastian | Hessel     | 114 Frederic Centers   |
| Marlon    | Hahn       | 307 Bradtke Grove      |
| Duane     | Schowalter | 10771 Keaton Knoll     |
| Laurence  | Schuster   | 610 Odell Point        |
```

## Setup

* Fork and clone, cd into this directory
* Run `npm test` to run the tests

## Stretch Stories

**Users can parse CSV data that contains quoted values**

Your code should be able to correctly handle CSV data that has values that contain commas as long as the string is in quotes.  For example:

```
Name,Suffix,Slogan,DUNS Number
"Sipes, Yundt and Johnston",Group,Right-sized 24 hour knowledge user,55-244-3053
```

Notice how the name is `"Sipes, Yundt and Johnston"`, so if you just split the line on commas, you'd get an incorrect result.  Your code needs to handle this.

**Users can parse CSV data that contain newlines in the cell value**

Your code should be able to correctly handle CSV data that has values that contain newlines.  For example:

```
Name,Suffix,Slogan,DUNS Number
"Sipes, Yundt and Johnston",Group,"Right-sized
24 hour knowledge user",55-244-3053
```

Notice how the example above represents just a single line of CSV.  If you determine what a 'row' is by splitting on newlines, you'll get an incorrect result, since it's valid for 'cells' to have newlines, as long as they are surrounded by quotes.

See http://www.boyet.com/articles/csvparser.html

NOTE: in this case, convert all newlines to spaces in the markdown table.

**Users can parse CSV data that contain quoted values**

Your code should be able to correctly handle CSV data that contain quoted values.  For example:

```
Name,Suffix,Slogan,DUNS Number
"Sipes, ""Yundt"" and Johnston",Group,"Right-sized 24 hour knowledge user",55-244-3053
```

As you parse, you'll have to figure out how to differentiate between quotes followed by quotes.

**Users can produce HTML documents**

Write a function that uses the same core CSV parsing code, and instead of producing a markdown table, produces an HTML files like so:

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First</td>
      <td>Row</td>
    </tr>
    <tr>
      <td>Second</td>
      <td>Row</td>
    </tr>
  </tbody>
</table>
```

Except in this case, it should newlines should be converted to `<br>` tags.

See https://nodejs.org/api/fs.html#fs_fs_writefilesync_filename_data_options
