import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import loginimg from "../assets/imgs/connect-with-your-friends-via-secure-messenger.jpg";
import { useDispatch } from "react-redux";
import { SET } from "../redux/userData.mjs";
import Footer from "../footer/footer";
import Loader1 from "../loader/loader1";

const Login: React.FC = () => {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mailmsg, setMailMsg] = useState<string>("");
  const [passwordmsg, setPasswordMsg] = useState<string>("");
  const [servermessage, setServerMessage] = useState<string>("");
  const [isLoading, setIsLoader] = useState(false);

  const dispatch = useDispatch();

  const removeMsg = (id: string, classname: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.remove(classname);
    }
  };

  const displayMsg = (id: string, classname: string) => {
    const element = document.getElementById(id);
    if (element) {
      element?.classList.add(classname);
    }
  };

  const navigate = useNavigate();

  const validations = () => {
    if (mail && password) {
      PostLoginData();
    }

    if (mail === "") {
      setMailMsg("User Name Is Missing");
      displayMsg("Mailmsg", "mailerrmsg");
    } else {
      removeMsg("Mailmsg", "mailerrmsg");
    }
    if (password === "") {
      setPasswordMsg("Password Is Missing");
      displayMsg("Passmsg", "Passworderrmsg");
    } else {
      removeMsg("Passmsg", "Passworderrmsg");
    }
  };

  const PostLoginData = () => {
    setIsLoader(true);
    const userData = {
      mail,
      password,
    };

    const logInData = {
      method: "POST",
      headers: {
        "Access-Control": "Allow-Origin, ",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const Fetching = () => {
      fetch("http://localhost:5000/login", logInData)
        .then((response) => response.json())
        .then((data) => {
          setIsLoader(false);
          if (data) {
            if (data.loginstatus === true) {
              dispatch(SET(data.userdata));
            } else {
              setServerMessage(data.message);
            }

            if (data.userdata.role === "admin") {
              navigate("/startshopping");
            } else {
              navigate("/mainshopping");
            }
          }
        });
    };
    Fetching();
  };

  const DisConnect = () => {
    fetch("http://localhost:5000/disconnect", {
      method: "POST",
      headers: {
        "Access-Control": "Allow-Origin",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="main-login-div">
      <div>{isLoading ? <Loader1 /> : ""}</div>
      <nav className="login-nav-container">
        <div className="link-container">
          <Link to={"/"}>
            <button type="button" className="btn" onClick={DisConnect}>
              Home Page
            </button>
          </Link>
        </div>
      </nav>

      <div className="login-main-container">
        <div className="login-container">
          <div className="input-container">
            <label>
              <i className="bi bi-person-workspace"></i>
              User :
            </label>
            <input
              type="email"
              className="username"
              placeholder="enter your email "
              onChange={(userername) => setMail(userername.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              <i className="bi bi-shield-lock"></i>
              Password :
            </label>
            <input
              type="password"
              className="password"
              placeholder="enter your password "
              onChange={(password) => setPassword(password.target.value)}
              required
            />
          </div>
          <div className="button-contanier">
            <button
              type="submit"
              className="login-button"
              onClick={() => {
                validations();
              }}
            >
              <i className="bi bi-box-arrow-in-right"></i>
              Login
            </button>
          </div>
          <div className="to-signup-page-container">
            <div>
              <label>you didn't signup yet ? click here </label>
            </div>
            <div className="link-contanier">
              <Link to="/signup" style={{ textDecorationLine: "none" }}>
                SignUp
              </Link>
            </div>
          </div>
          <div>
            <h6 className="errormsg" id="Mailmsg">
              {mailmsg}
            </h6>
            <h6 className="errormsg" id="Passmsg">
              {passwordmsg}
            </h6>
            <h6 style={{ textAlign: "center" }}>{servermessage}</h6>
          </div>
        </div>

        <div className="login-img-container">
          <img className="logimg" alt="login-img" src={loginimg} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;