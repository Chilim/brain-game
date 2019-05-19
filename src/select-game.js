import readlineSync from 'readline-sync';
import balanceGame from './games/balance';
import calcGame from './games/calc';
import evenGame from './games/even';
import gcdGame from './games/gcd';
import primeGame from './games/prime';
import prograssionGame from './games/progression';

const games = {
  1: { name: 'balance', game: balanceGame },
  2: { name: 'calculator', game: calcGame },
  3: { name: 'even number', game: evenGame },
  4: { name: 'greatest common divisor', game: gcdGame },
  5: { name: 'prime number', game: primeGame },
  6: { name: 'progression', game: prograssionGame },
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  Object.keys(games).forEach((g) => {
    const { name } = games[g];
    console.log(`${g} -- ${name}`);
  });
  let userChoise = readlineSync.question('Type the number of the game to play: ');
  while (!games[userChoise]) {
    console.log('hello');
    userChoise = readlineSync.question('Incorrect input! Try again: ');
  }
  const { game } = games[userChoise];
  game(userName);
};
