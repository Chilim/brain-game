import startGame from '..';
import getRandNum from '../utils';

const buildSequence = (comDiff) => {
  const firstNumber = getRandNum(1, 5);
  const sequenceLength = 7;
  const iter = (arr, gap, currentNumber) => {
    if (gap === 0) {
      return arr;
    }
    const nextNumber = currentNumber * comDiff;
    arr.push(nextNumber);
    return iter(arr, gap - 1, nextNumber);
  };
  return iter([], sequenceLength, firstNumber);
};

const task = 'What number is missing in this progression?';

const getGameContent = () => {
  const comDiff = getRandNum(2, 4);
  const question = buildSequence(comDiff);
  const gapIndex = getRandNum(1, question.length - 1);
  question[gapIndex] = '...';
  const getCorrectAnswer = () => question.reduce((acc, el, i) => ((el === '...') ? acc.concat(question[i - 1] * comDiff) : acc), []);
  const correctAnswer = `${getCorrectAnswer()}`;
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
