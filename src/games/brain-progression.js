import startGame from '..';
import getRandNum from '../random-number';

const getRandomSequence = () => {
  const arr = [];
  const firstNum = getRandNum(0, 99);
  const nextStep = getRandNum(1, 9);
  const arraySize = 7;
  const iter = (newArr, acc, number) => {
    if (acc === 0) {
      return newArr.reverse();
    }
    const newNumber = number + nextStep;
    const alterArr = newArr;
    alterArr[acc - 1] = newNumber;
    return iter(newArr, acc - 1, newNumber);
  };
  return iter(arr, arraySize, firstNum);
};

const task = 'What number is missing in this progression?';

const getGameContent = () => {
  const question = getRandomSequence();
  const gapIndex = getRandNum(1, question.length - 1);
  question[gapIndex] = '...';
  const getCorrectAnswer = () => {
    for (let i = 0; i < question.length; i += 1) {
      if (question[i] === '...') {
        return (question[i + 1] + question[i - 1]) / 2;
      }
    }
    return false;
  };
  const correctAnswer = `${getCorrectAnswer()}`;
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
