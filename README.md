# Brain Games

<a href="https://codeclimate.com/github/Chilim/project-lvl1-s128"><img src="https://codeclimate.com/github/Chilim/project-lvl1-s128/badges/gpa.svg" /></a> <a href="https://travis-ci.org/Chilim/project-lvl1-s128"><img src="https://travis-ci.org/Chilim/project-lvl1-s128.svg?branch=master" /></a>

### Setup
```
git clone https://github.com/Chilim/brain-game.git brain_games
⋅⋅⋅cd brain_games
⋅⋅⋅make install
⋅⋅⋅make start

```
#### or

```
npm i -g chilim-braingames
⋅⋅⋅brain-games

```

### Games 
* #### Find Balance 
Given a positive integer find whether it is a balanced number. For a balanced number, the smallest digit differs from the largest by no more than one. Balanced numbers are `111`, `233`, `55`, `001`, `9999`, `0001`. The number `123` is not a balanced number since the smallest number is `1` and the lagest number is `3`. The largerst number is greater that the smallest number by two. When balancing the number, the *big numbers* give the surplus to *the smaller* so that the number becomes balanced in the end. In the case of number 123, the digit 3 should give *a point* to digit `1`, and in the end get the number `222`. Example:

```
Welcome to the Brain Game!
Balance the given number.

Question: 215
Your answer: 233
Correct!
```

* ####  Calculator
Given a random mathematical expression, such as 35 + 16, which is necessary to calculate and write the correct answer. Example:

```
Welcome to the Brain Games!
What is the result of the expression?

Question: 4 + 10
Your answer: 14
Correct!
```


* #### Even parity
Given a random number, check if it is an [even number](https://en.wikipedia.org/wiki/Parity_(mathematics)) asnwering `yes` or `no`. Example: 

```
Welcome to Brain Games!
Answer "yes" if number even otherwise answer "no".
May I have your name? Bill
Question: 15
Your answer: yes
```
* #### Greatest Common Divisor
Given two random numbers, find [https://en.wikipedia.org/wiki/Greatest_common_divisor](greatest common divisor(gcd)). Example:

```
Welcome to the Brain Games!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
```

* #### Find Prime Number
Given a random number, check if the number is [https://en.wikipedia.org/wiki/Prime_number](prime). Exapmle:

```
Welcome to Brain Games!
Answer "yes" if number even otherwise answer "no".

Question: 15
Your answer: yes
```

* #### Arithmetic Progression
A sequence of number is shown forming arithmetic progression. Guess a number in the sequence that repleced with dots. Example:

```
What number is missing in this progression?
5 7 9 11 13 .. 17 19 21 23
```


