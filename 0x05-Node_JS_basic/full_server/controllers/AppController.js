module.exports = class AppController {
  // test cases
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
};
