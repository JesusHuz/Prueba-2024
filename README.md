# [INTEG.RO](https://www.integ.ro/)



## Instructions

- Create a FORK of this project
- Create a BRANCH from your first name
- Solve the tests provided (see the instructions bellow)
- COMMIT your changes and initiate a PULL REQUEST for the MASTER branch


### TEST 1 - PHP
Using the "test1.php" file, write a function that returns true or false if an expression is a palindrome phrase.

### TEST 2 - JAVASCRIPT
Using "test2.js," create a function that organizes a collection of numbers in an array based on the following criteria:

- Assume that there is a basket with a variable number of apples (e.g., 17).
- The goal is to arrange these apples into boxes, with each box containing a fixed quantity (e.g., 4 apples).
- Once the apples are separated into boxes, the next step is to group them into packs, with each pack consisting of two boxes. The intention is to distribute these packs evenly among friends, giving each friend two packs.
- The script should be designed to handle any quantity of apples, dynamically adjusting the separation based on the available amount.

```javascript
input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

output: {
  [ //friend 1
    [ //package 1
      [1,2,3,4], //box1
      [5,6,7,8] //box2
    ],
    [ //package 2
      [9,10,11,12], //box3
      [13,14,15,16] //box 4
    ]
  ],
  [ //friend 2
    [ //package 2
      [17] //box 5 - this box is incomplete, because only 1 apple left
    ]
  ]
}
```

### TEST 3 - SQL
As the image1.png, write a query in the file "test3.sql" that brings a listing with the following data:
- user.name
- user.birthdate
- customer.name
Where: user is over 18 years old and his status is = 1, and the customer's status is = 1, discarding users who do not belong to a customer.
Sorted by: customer.name

### TEST 4 - REACTJS
Considering that the example from test 1 (palindrome) represents a REST API, create a Reactjs script in the "test4.js" file. This script should include one text input field and a button. The objective is to validate whether the entered text is a palindrome or not by making a POST call via AJAX, preferably utilizing AXIOS.
