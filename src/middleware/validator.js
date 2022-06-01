const errorHandeler = require("../ error-handlers/500");
function validator() {
  return (req, res, next) => {
    let name = req.query.name;

    regx = /^[a-zA-Z]+$/;

    if (regx.test(name)) {
      next();
    } else if (name === "") {
      next("name is empty");
    } else if (!regx.test(name)) {
      next("showld be valid name");
    }
  };
}

module.exports = validator;
