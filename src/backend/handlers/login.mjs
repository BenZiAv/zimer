import signUpUsersSchema from "../model/signup.mjs";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config("../.env");

function LogIn(req, res) {
  const userData = signUpUsersSchema;
  console.log("Connecting To Login Server");
  const userLoginData = req.body;
   let mail = userLoginData.mail;
  let password = userLoginData.password;
  password = crypto
    .createHash("sha256")
    .update(process.env.KEY + password)
    .digest("hex");

  if (mail === "" || password === "") {
    console.log("username/password is missing");
    res.json({ message: "username/password is missing", status: false });
  } else {
    userData
      .findOne({ mail })
      .then((result) => {
        if (result) {
          userData
            .findOne({ password })
            .then((result) => {
              if (result) {
                console.log(
                  "user name and password is correct , login status succsess"
                );
                res.json({
                  message: "user name and password is correct",
                  loginstatus:true,
                  userdata: result,
                });
              } else {
                console.log("password is uncorrect ");
                res.json({
                  message: "password is uncorrect",
                  loginstatus: false,
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("user is not exists");
          res.json({
            message: "user is not exists",
            loginstatus: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

  

export default { LogIn };