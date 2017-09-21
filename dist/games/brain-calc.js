'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _randomNumber = require('../random-number');

var _randomNumber2 = _interopRequireDefault(_randomNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = 'What is the result of the expression?`';

var getGameContent = function getGameContent() {
  var number1 = (0, _randomNumber2.default)(1, 100);
  var number2 = (0, _randomNumber2.default)(1, 100);
  var operators = [{ sign: '+', method: function method(a, b) {
      return a + b;
    }
  }, { sign: '-', method: function method(a, b) {
      return a - b;
    }
  }, { sign: '*', method: function method(a, b) {
      return a * b;
    }
  }];
  var selectedOperator = Math.floor(Math.random() * operators.length);
  var operator = operators[selectedOperator].sign;
  var question = number1 + ' ' + operator + ' ' + number2;
  var correct = operators[selectedOperator].method(number1, number2);
  var correctAnswer = '' + correct;
  return { question: question, correctAnswer: correctAnswer };
};

exports.default = function () {
  return (0, _2.default)(task, getGameContent);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1jYWxjLmpzIl0sIm5hbWVzIjpbInRhc2siLCJnZXRHYW1lQ29udGVudCIsIm51bWJlcjEiLCJudW1iZXIyIiwib3BlcmF0b3JzIiwic2lnbiIsIm1ldGhvZCIsImEiLCJiIiwic2VsZWN0ZWRPcGVyYXRvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm9wZXJhdG9yIiwicXVlc3Rpb24iLCJjb3JyZWN0IiwiY29ycmVjdEFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyx3Q0FBYjs7QUFFQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsVUFBVSw0QkFBVyxDQUFYLEVBQWMsR0FBZCxDQUFoQjtBQUNBLE1BQU1DLFVBQVUsNEJBQVcsQ0FBWCxFQUFjLEdBQWQsQ0FBaEI7QUFDQSxNQUFNQyxZQUFZLENBQ2hCLEVBQUVDLE1BQU0sR0FBUixFQUFhQyxNQUFiLGtCQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQUUsYUFBT0QsSUFBSUMsQ0FBWDtBQUFlO0FBQTNDLEdBRGdCLEVBRWhCLEVBQUVILE1BQU0sR0FBUixFQUFhQyxNQUFiLGtCQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQUUsYUFBT0QsSUFBSUMsQ0FBWDtBQUFlO0FBQTNDLEdBRmdCLEVBR2hCLEVBQUVILE1BQU0sR0FBUixFQUFhQyxNQUFiLGtCQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQUUsYUFBT0QsSUFBSUMsQ0FBWDtBQUFlO0FBQTNDLEdBSGdCLENBQWxCO0FBS0EsTUFBTUMsbUJBQW1CQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JSLFVBQVVTLE1BQXJDLENBQXpCO0FBQ0EsTUFBTUMsV0FBV1YsVUFBVUssZ0JBQVYsRUFBNEJKLElBQTdDO0FBQ0EsTUFBTVUsV0FBY2IsT0FBZCxTQUF5QlksUUFBekIsU0FBcUNYLE9BQTNDO0FBQ0EsTUFBTWEsVUFBVVosVUFBVUssZ0JBQVYsRUFBNEJILE1BQTVCLENBQW1DSixPQUFuQyxFQUE0Q0MsT0FBNUMsQ0FBaEI7QUFDQSxNQUFNYyxxQkFBbUJELE9BQXpCO0FBQ0EsU0FBTyxFQUFFRCxrQkFBRixFQUFZRSw0QkFBWixFQUFQO0FBQ0QsQ0FkRDs7a0JBZ0JlO0FBQUEsU0FBTSxnQkFBVWpCLElBQVYsRUFBZ0JDLGNBQWhCLENBQU47QUFBQSxDIiwiZmlsZSI6ImJyYWluLWNhbGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4uJztcbmltcG9ydCBnZXRSYW5kTnVtIGZyb20gJy4uL3JhbmRvbS1udW1iZXInO1xuXG5jb25zdCB0YXNrID0gJ1doYXQgaXMgdGhlIHJlc3VsdCBvZiB0aGUgZXhwcmVzc2lvbj9gJztcblxuY29uc3QgZ2V0R2FtZUNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IG51bWJlcjEgPSBnZXRSYW5kTnVtKDEsIDEwMCk7XG4gIGNvbnN0IG51bWJlcjIgPSBnZXRSYW5kTnVtKDEsIDEwMCk7XG4gIGNvbnN0IG9wZXJhdG9ycyA9IFtcbiAgICB7IHNpZ246ICcrJywgbWV0aG9kKGEsIGIpIHsgcmV0dXJuIGEgKyBiOyB9IH0sXG4gICAgeyBzaWduOiAnLScsIG1ldGhvZChhLCBiKSB7IHJldHVybiBhIC0gYjsgfSB9LFxuICAgIHsgc2lnbjogJyonLCBtZXRob2QoYSwgYikgeyByZXR1cm4gYSAqIGI7IH0gfSxcbiAgXTtcbiAgY29uc3Qgc2VsZWN0ZWRPcGVyYXRvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wZXJhdG9ycy5sZW5ndGgpO1xuICBjb25zdCBvcGVyYXRvciA9IG9wZXJhdG9yc1tzZWxlY3RlZE9wZXJhdG9yXS5zaWduO1xuICBjb25zdCBxdWVzdGlvbiA9IGAke251bWJlcjF9ICR7b3BlcmF0b3J9ICR7bnVtYmVyMn1gO1xuICBjb25zdCBjb3JyZWN0ID0gb3BlcmF0b3JzW3NlbGVjdGVkT3BlcmF0b3JdLm1ldGhvZChudW1iZXIxLCBudW1iZXIyKTtcbiAgY29uc3QgY29ycmVjdEFuc3dlciA9IGAke2NvcnJlY3R9YDtcbiAgcmV0dXJuIHsgcXVlc3Rpb24sIGNvcnJlY3RBbnN3ZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHN0YXJ0R2FtZSh0YXNrLCBnZXRHYW1lQ29udGVudCk7XG4iXX0=