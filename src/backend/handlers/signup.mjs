import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config("../.env");
import signUpUsersSchema from "../model/signup.mjs";

function userSignUp(req, res) {
  const userData = signUpUsersSchema;
  console.log("Posting User Signup Data");
  let data = req.body;
  let firstname = data.firstname;
  let lastname = data.lastname;
  let id = data.id;
  let mail = data.mail;
  let password = data.password;
  let city = data.city;
  let address = data.address;
  let phonenumber = data.phonenumber;

  password = crypto
    .createHash("sha256")
    .update(process.env.KEY + password)
    .digest("hex");
  id = crypto
    .createHash("sha256")
    .update(process.env.KEY + id)
    .digest("hex");

  let signUpUserData = {
    firstname,
    lastname,
    id,
    mail,
    password,
    city,
    address,
    phonenumber,
  };

  if (
    firstname == "" ||
    lastname == "" ||
    id == "" ||
    mail == "" ||
    password == "" ||
    city == "" ||
    address == "" ||
    phonenumber == ""
  ) {
    console.log("data is missing/empty");
    res.json({ message: "Some Data Is Missing Or Empty", success: false });
  } else {
    userData
      .findOne({ mail })
      .then((result) => {
        if (result) {
          console.log("User is exists");
          res.json({ message: "User Is Exists", success: false });
        } else {
          userData.findOne({ id }).then((result) => {
            if (result) {
              console.log("User ID is exists");
              res.json({ message: "User ID Is Exists", success: false });
            } else {
              userData
                .insertMany(signUpUserData)
                .then(() => {
                  console.log("User Data Added to DataBase : succsess");
                  res.json({
                    message: "User Data Added to DataBase",
                    success: true,
                  });
                })
                .catch((err) => {
                  console.log("Error Inserting User Data", err);
                  res.jso({
                    message: "error Inserting User Data",
                    succsess: false,
                    userdata: result,
                  });
                });
            }
          });
        }
      })
      .catch((err) => {
        console.log("Error Insert User Data To Database:", err);
      });
  }
}

export default { userSignUp };