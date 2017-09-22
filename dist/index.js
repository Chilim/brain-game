'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var succeed = 'Congratulations';
var correctAnswer = 3; // кажется, что снизу вверх логичнее - кол-во правильных ответов 1, 2, 3
var getResult = function getResult(userName, getGameContent) {
  var iter = function iter(acc) {
    if (acc === 0) {
      console.log(succeed + ', ' + userName + '!');
      return 'End Game';
    }
    var gameContent = getGameContent();
    var userAnswer = _readlineSync2.default.question('Question: ' + gameContent.question + ' ');
    console.log('Your answer: ' + userAnswer);
    if (userAnswer === gameContent.correctAnswer) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    console.log('\'' + userAnswer + '\' is wrong answer ;(. Correct answer was \'' + gameContent.correctAnswer + '\'');
    console.log('Let\'s try again, ' + userName + '!');
    return 'The end';
  };
  return iter(correctAnswer);
};

exports.default = function (condition, getGameContent) {
  console.log('Welcome to the Brain Games!');
  console.log('' + condition);
  var userName = _readlineSync2.default.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return getResult(userName, getGameContent);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdWNjZWVkIiwiY29ycmVjdEFuc3dlciIsImdldFJlc3VsdCIsInVzZXJOYW1lIiwiZ2V0R2FtZUNvbnRlbnQiLCJpdGVyIiwiYWNjIiwiY29uc29sZSIsImxvZyIsImdhbWVDb250ZW50IiwidXNlckFuc3dlciIsInF1ZXN0aW9uIiwiY29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxpQkFBaEI7QUFDQSxJQUFNQyxnQkFBZ0IsQ0FBdEIsQyxDQUF5QjtBQUN6QixJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsUUFBRCxFQUFXQyxjQUFYLEVBQThCO0FBQzlDLE1BQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxHQUFELEVBQVM7QUFDcEIsUUFBSUEsUUFBUSxDQUFaLEVBQWU7QUFDYkMsY0FBUUMsR0FBUixDQUFlUixPQUFmLFVBQTJCRyxRQUEzQjtBQUNBLGFBQU8sVUFBUDtBQUNEO0FBQ0QsUUFBTU0sY0FBY0wsZ0JBQXBCO0FBQ0EsUUFBTU0sYUFBYSx1QkFBYUMsUUFBYixnQkFBbUNGLFlBQVlFLFFBQS9DLE9BQW5CO0FBQ0FKLFlBQVFDLEdBQVIsbUJBQTRCRSxVQUE1QjtBQUNBLFFBQUlBLGVBQWVELFlBQVlSLGFBQS9CLEVBQThDO0FBQzVDTSxjQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLGFBQU9ILEtBQUtDLE1BQU0sQ0FBWCxDQUFQO0FBQ0Q7QUFDREMsWUFBUUMsR0FBUixRQUFnQkUsVUFBaEIsb0RBQXVFRCxZQUFZUixhQUFuRjtBQUNBTSxZQUFRQyxHQUFSLHdCQUFnQ0wsUUFBaEM7QUFDQSxXQUFPLFNBQVA7QUFDRCxHQWZEO0FBZ0JBLFNBQU9FLEtBQUtKLGFBQUwsQ0FBUDtBQUNELENBbEJEOztrQkFvQmUsVUFBQ1csU0FBRCxFQUFZUixjQUFaLEVBQStCO0FBQzVDRyxVQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDQUQsVUFBUUMsR0FBUixNQUFlSSxTQUFmO0FBQ0EsTUFBTVQsV0FBVyx1QkFBYVEsUUFBYixDQUFzQix3QkFBdEIsQ0FBakI7QUFDQUosVUFBUUMsR0FBUixhQUFzQkwsUUFBdEI7QUFDQSxTQUFPRCxVQUFVQyxRQUFWLEVBQW9CQyxjQUFwQixDQUFQO0FBQ0QsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmNvbnN0IHN1Y2NlZWQgPSAnQ29uZ3JhdHVsYXRpb25zJztcbmNvbnN0IGNvcnJlY3RBbnN3ZXIgPSAzOyAvLyDQutCw0LbQtdGC0YHRjywg0YfRgtC+INGB0L3QuNC30YMg0LLQstC10YDRhSDQu9C+0LPQuNGH0L3QtdC1IC0g0LrQvtC7LdCy0L4g0L/RgNCw0LLQuNC70YzQvdGL0YUg0L7RgtCy0LXRgtC+0LIgMSwgMiwgM1xuY29uc3QgZ2V0UmVzdWx0ID0gKHVzZXJOYW1lLCBnZXRHYW1lQ29udGVudCkgPT4ge1xuICBjb25zdCBpdGVyID0gKGFjYykgPT4ge1xuICAgIGlmIChhY2MgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke3N1Y2NlZWR9LCAke3VzZXJOYW1lfSFgKTtcbiAgICAgIHJldHVybiAnRW5kIEdhbWUnO1xuICAgIH1cbiAgICBjb25zdCBnYW1lQ29udGVudCA9IGdldEdhbWVDb250ZW50KCk7XG4gICAgY29uc3QgdXNlckFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgUXVlc3Rpb246ICR7Z2FtZUNvbnRlbnQucXVlc3Rpb259IGApO1xuICAgIGNvbnNvbGUubG9nKGBZb3VyIGFuc3dlcjogJHt1c2VyQW5zd2VyfWApO1xuICAgIGlmICh1c2VyQW5zd2VyID09PSBnYW1lQ29udGVudC5jb3JyZWN0QW5zd2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICAgIHJldHVybiBpdGVyKGFjYyAtIDEpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJyR7dXNlckFuc3dlcn0nIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcke2dhbWVDb250ZW50LmNvcnJlY3RBbnN3ZXJ9J2ApO1xuICAgIGNvbnNvbGUubG9nKGBMZXQncyB0cnkgYWdhaW4sICR7dXNlck5hbWV9IWApO1xuICAgIHJldHVybiAnVGhlIGVuZCc7XG4gIH07XG4gIHJldHVybiBpdGVyKGNvcnJlY3RBbnN3ZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbmRpdGlvbiwgZ2V0R2FtZUNvbnRlbnQpID0+IHtcbiAgY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIScpO1xuICBjb25zb2xlLmxvZyhgJHtjb25kaXRpb259YCk7XG4gIGNvbnN0IHVzZXJOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHt1c2VyTmFtZX0hYCk7XG4gIHJldHVybiBnZXRSZXN1bHQodXNlck5hbWUsIGdldEdhbWVDb250ZW50KTtcbn07XG4iXX0=