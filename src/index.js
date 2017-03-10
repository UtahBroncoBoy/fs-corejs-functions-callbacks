export default {
  add(num1 = 0, num2 = 0, callback) {
    return callback(null, num1 + num2);
  },
  multiply(num1 = 0, num2 = 0, callback) {
    return callback(null, num1 * num2);
  }
}