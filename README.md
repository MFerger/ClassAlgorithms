Round-Robin is a way to rotate an array of items such that each item can be paired with every other item exactly once.  In sports, this is a way to ensure that each team plays every other team exactly once.

## Description

Imagine you have an array of 10 teams, and each team has a number:

```
[1,2,3,4,5,6,7,8,9,10]
```

Your goal is to write a function that takes an input array and returns an array of arrays of arrays.

For example, for an array input of `[1,2,3,4]` the result would be:

```
[
  [           // ---- round 1 -----
    [1, 4],   // 1 plays 4
    [3, 2],   // 3 plays 2
  ],
  [           // ---- round 2 -----
    [1, 3],   // 1 plays 3
    [2, 4],   // 2 plays 4
  ],
  [           // ---- round 3 -----
    [1, 2],   // 1 plays 2
    [4, 3],   // 4 plays 3
  ]
]
```

## Algorithm

### 1. Partition and rotate

1. Split the array in half
1. Reverse the second array

The result should look like this:

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/187/original.png)

### 2. Find the matches

Take the first element of the first array, and match it with the first element of the second array, and so on.  Visually, that looks like:

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/182/original-pairs.png)

In code, that looks like:

```
[
  [1, 10],
  [2, 9 ],
  [3, 8 ],
  [4, 7 ],
  [5, 6 ],
]
```

### 3. Rotate

* Keep the first element of the first array in its position (it will never change)
* Rotate the other numbers counter-clockwise

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/184/rotation.png)

Which ends up looking like:

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/183/post-rotation.png)

### 4. Find the matches

Take the first element of the first array, and match it with the first element of the second array, and so on.  Visually, that looks like:

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/185/post-rotation-pairs.png)

```
[
  [1,  9],
  [10, 8],
  [2,  7],
  [3,  6],
  [4,  5],
]
```

### 5. Repeat until all matches have been made

Your round robin function should never return duplicate matches.

## Setup

You will be working in [Jasmine](http://jasmine.github.io/2.3/introduction.html) to solve this problem.

`$ npm install` and then `$ npm test` to see the tests run.  As you make changes to your round robin js file, re-run `$ npm test` to run the tests again.

## Challenge #1

Make the tests pass

## Challenge #2 - Solve w/ recursion

Remove all `for` loops.

'nuff said.

## Resources

* http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm
* https://en.wikipedia.org/wiki/Round-robin_tournament
