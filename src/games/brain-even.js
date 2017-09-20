import startGame from '..';
import getRandNum from '../random-number';

const task = 'Answer "yes" if number even otherwise answer "no".';

const getGameContent = () => {
  const question = getRandNum(1, 100);
  const correctAnswer = question % 2 ? 'no' : 'yes';
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
