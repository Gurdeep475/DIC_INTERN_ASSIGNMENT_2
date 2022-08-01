new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("success");
  }, 4000);
})
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });
