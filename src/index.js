// object literal with two methods: add and multiply
export default {
  //takes two numbers and returns the result (as a callback) of adding the two numbers together
  add(num1 = 0, num2 = 0, callback) {
    return callback(null, num1 + num2);
  },
  //takes tw numbers and returns the result (as a callback) of multiplying the two numbers together
  multiply(num1 = 0, num2 = 0, callback) {
    return callback(null, num1 * num2);
  }
}