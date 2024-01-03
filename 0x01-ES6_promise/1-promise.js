/* Only promise if you can keep it */
export default (success) => new Promise((resolve, reject) => {
  if (success) {
    resolve({
      status: 200,
      body: 'Success',
    });
  }
  reject(new Error('The fake API is not working currently'));
});
