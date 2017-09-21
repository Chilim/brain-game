'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var greetings = 'Welcome to the Brain Games!';
var succeed = 'Congratulations';
var iterNum = 0;

var getResult = function getResult(userName, getGameContent) {
  var iter = function iter(acc) {
    if (acc === 3) {
      console.log(succeed + ', ' + userName + '!');
      return 'End Game';
    }
    var gameContent = getGameContent();
    var userAnswer = _readlineSync2.default.question('Enter result: ' + gameContent.question + ' ');
    console.log('Your answer: ' + userAnswer);
    if (userAnswer === gameContent.correctAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    console.log(userAnswer + ' is wrong answer. Correct answer was ' + gameContent.correctAnswer);
    return iter(acc);
  };
  return iter(iterNum);
};

exports.default = function (condition, getGameContent) {
  console.log(greetings + '\n ' + condition);
  var userName = _readlineSync2.default.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return getResult(userName, getGameContent);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZ3MiLCJzdWNjZWVkIiwiaXRlck51bSIsImdldFJlc3VsdCIsInVzZXJOYW1lIiwiZ2V0R2FtZUNvbnRlbnQiLCJpdGVyIiwiYWNjIiwiY29uc29sZSIsImxvZyIsImdhbWVDb250ZW50IiwidXNlckFuc3dlciIsInF1ZXN0aW9uIiwiY29ycmVjdEFuc3dlciIsImNvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVksNkJBQWxCO0FBQ0EsSUFBTUMsVUFBVSxpQkFBaEI7QUFDQSxJQUFNQyxVQUFVLENBQWhCOztBQUVBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxRQUFELEVBQVdDLGNBQVgsRUFBOEI7QUFDOUMsTUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNDLEdBQUQsRUFBUztBQUNwQixRQUFJQSxRQUFRLENBQVosRUFBZTtBQUNiQyxjQUFRQyxHQUFSLENBQWVSLE9BQWYsVUFBMkJHLFFBQTNCO0FBQ0EsYUFBTyxVQUFQO0FBQ0Q7QUFDRCxRQUFNTSxjQUFjTCxnQkFBcEI7QUFDQSxRQUFNTSxhQUFhLHVCQUFhQyxRQUFiLG9CQUF1Q0YsWUFBWUUsUUFBbkQsT0FBbkI7QUFDQUosWUFBUUMsR0FBUixtQkFBNEJFLFVBQTVCO0FBQ0EsUUFBSUEsZUFBZUQsWUFBWUcsYUFBL0IsRUFBOEM7QUFDNUNMLGNBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsYUFBT0gsS0FBS0MsTUFBTSxDQUFYLENBQVA7QUFDRDtBQUNEQyxZQUFRQyxHQUFSLENBQWVFLFVBQWYsNkNBQWlFRCxZQUFZRyxhQUE3RTtBQUNBLFdBQU9QLEtBQUtDLEdBQUwsQ0FBUDtBQUNELEdBZEQ7QUFlQSxTQUFPRCxLQUFLSixPQUFMLENBQVA7QUFDRCxDQWpCRDs7a0JBbUJlLFVBQUNZLFNBQUQsRUFBWVQsY0FBWixFQUErQjtBQUM1Q0csVUFBUUMsR0FBUixDQUFlVCxTQUFmLFdBQThCYyxTQUE5QjtBQUNBLE1BQU1WLFdBQVcsdUJBQWFRLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWpCO0FBQ0FKLFVBQVFDLEdBQVIsYUFBc0JMLFFBQXRCO0FBQ0EsU0FBT0QsVUFBVUMsUUFBVixFQUFvQkMsY0FBcEIsQ0FBUDtBQUNELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zdCBncmVldGluZ3MgPSAnV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhJztcbmNvbnN0IHN1Y2NlZWQgPSAnQ29uZ3JhdHVsYXRpb25zJztcbmNvbnN0IGl0ZXJOdW0gPSAwO1xuXG5jb25zdCBnZXRSZXN1bHQgPSAodXNlck5hbWUsIGdldEdhbWVDb250ZW50KSA9PiB7XG4gIGNvbnN0IGl0ZXIgPSAoYWNjKSA9PiB7XG4gICAgaWYgKGFjYyA9PT0gMykge1xuICAgICAgY29uc29sZS5sb2coYCR7c3VjY2VlZH0sICR7dXNlck5hbWV9IWApO1xuICAgICAgcmV0dXJuICdFbmQgR2FtZSc7XG4gICAgfVxuICAgIGNvbnN0IGdhbWVDb250ZW50ID0gZ2V0R2FtZUNvbnRlbnQoKTtcbiAgICBjb25zdCB1c2VyQW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBFbnRlciByZXN1bHQ6ICR7Z2FtZUNvbnRlbnQucXVlc3Rpb259IGApO1xuICAgIGNvbnNvbGUubG9nKGBZb3VyIGFuc3dlcjogJHt1c2VyQW5zd2VyfWApO1xuICAgIGlmICh1c2VyQW5zd2VyID09PSBnYW1lQ29udGVudC5jb3JyZWN0QW5zd2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICAgIHJldHVybiBpdGVyKGFjYyArIDEpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHt1c2VyQW5zd2VyfSBpcyB3cm9uZyBhbnN3ZXIuIENvcnJlY3QgYW5zd2VyIHdhcyAke2dhbWVDb250ZW50LmNvcnJlY3RBbnN3ZXJ9YCk7XG4gICAgcmV0dXJuIGl0ZXIoYWNjKTtcbiAgfTtcbiAgcmV0dXJuIGl0ZXIoaXRlck51bSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoY29uZGl0aW9uLCBnZXRHYW1lQ29udGVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhgJHtncmVldGluZ3N9XFxuICR7Y29uZGl0aW9ufWApO1xuICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7dXNlck5hbWV9IWApO1xuICByZXR1cm4gZ2V0UmVzdWx0KHVzZXJOYW1lLCBnZXRHYW1lQ29udGVudCk7XG59O1xuIl19