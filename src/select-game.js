import readlineSync from 'readline-sync';
import balanceGame from './games/balance';
import calcGame from './games/calc';
import evenGame from './games/even';
import gcdGame from './games/gcd';
import primeGame from './games/prime';
import prograssionGame from './games/progression';

const games = {
  1: { name: 'Find Balance', game: balanceGame },
  2: { name: 'Calculator', game: calcGame },
  3: { name: 'Even parity', game: evenGame },
  4: { name: 'Greatest Common Divisor', game: gcdGame },
  5: { name: 'Find Prime Number', game: primeGame },
  6: { name: 'Arithmetic Progression', game: prograssionGame },
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
