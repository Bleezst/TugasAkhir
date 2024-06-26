const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { admin } = require("../models/index");
const secret = "serimpet";

const authenticate = async (req, res) => {
  let dataLogin = {
    email: req.body.email,
    password: md5(req.body.password), 
  };

  let dataadmin = await admin.findOne({ where: dataLogin });

  if (dataadmin) {
    let payLoad = JSON.stringify(dataadmin);

    let token = jwt.sign(payLoad, secret);

    return res.json({
      success: true,
      logged: true,
      message: "Authenticate Success",
      token: token,
      data: dataadmin,
    });
  }
  return res.json({
    success: false,
    logged: false,
    message: "Authenticate failed. Invalid email or Password",
  });
};

const authorize = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    let verifiedUser = jwt.verify(token, secret);
    if (!verifiedUser) {
      return res.json({
        success: false,
        auth: false,
        message: "User Unauthorized",
      });
    }

    req.user = verifiedUser;
    next();
  } else {
    return res.json({
      success: false,
      auth: false,
      message: "User Unauthorized",
    });
  }
};

module.exports = {
  authenticate,
  authorize
};