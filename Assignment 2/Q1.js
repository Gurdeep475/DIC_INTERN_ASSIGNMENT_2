// Create a promise that resolves in 4 seconds and returns "success" string.

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("success");
  }, 4000);
})
  .then(function (value) {
    return value;
  })
  .catch(function (error) {
    console.log(error);
  });
