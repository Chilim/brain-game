'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _randomNumber = require('../random-number');

var _randomNumber2 = _interopRequireDefault(_randomNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = 'Answer "yes" if number even otherwise answer "no".';

var getGameContent = function getGameContent() {
  var question = (0, _randomNumber2.default)(1, 100);
  var correctAnswer = question % 2 ? 'no' : 'yes';
  return { question: question, correctAnswer: correctAnswer };
};

exports.default = function () {
  return (0, _2.default)(task, getGameContent);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1ldmVuLmpzIl0sIm5hbWVzIjpbInRhc2siLCJnZXRHYW1lQ29udGVudCIsInF1ZXN0aW9uIiwiY29ycmVjdEFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxvREFBYjs7QUFFQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsV0FBVyw0QkFBVyxDQUFYLEVBQWMsR0FBZCxDQUFqQjtBQUNBLE1BQU1DLGdCQUFnQkQsV0FBVyxDQUFYLEdBQWUsSUFBZixHQUFzQixLQUE1QztBQUNBLFNBQU8sRUFBRUEsa0JBQUYsRUFBWUMsNEJBQVosRUFBUDtBQUNELENBSkQ7O2tCQU1lO0FBQUEsU0FBTSxnQkFBVUgsSUFBVixFQUFnQkMsY0FBaEIsQ0FBTjtBQUFBLEMiLCJmaWxlIjoiYnJhaW4tZXZlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFydEdhbWUgZnJvbSAnLi4nO1xuaW1wb3J0IGdldFJhbmROdW0gZnJvbSAnLi4vcmFuZG9tLW51bWJlcic7XG5cbmNvbnN0IHRhc2sgPSAnQW5zd2VyIFwieWVzXCIgaWYgbnVtYmVyIGV2ZW4gb3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuJztcblxuY29uc3QgZ2V0R2FtZUNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXN0aW9uID0gZ2V0UmFuZE51bSgxLCAxMDApO1xuICBjb25zdCBjb3JyZWN0QW5zd2VyID0gcXVlc3Rpb24gJSAyID8gJ25vJyA6ICd5ZXMnO1xuICByZXR1cm4geyBxdWVzdGlvbiwgY29ycmVjdEFuc3dlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gc3RhcnRHYW1lKHRhc2ssIGdldEdhbWVDb250ZW50KTtcbiJdfQ==