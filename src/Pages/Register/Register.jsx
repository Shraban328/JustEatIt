import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../../Utilities/UseAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../../Firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const navigate = useNavigate();
  const { userCreate, googleLogin } = UseAuth();
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // handle google log in
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleLogin()
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userName, userImage, email, password);
    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
    } else if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/.test(password)) {
      setErrorMessage(
        "Password must include a capital letter and special character"
      );
      return console.log("change password");
    }

    userCreate(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: userImage,
        });

        // create user in database
        const user = { userName, userImage, email, password };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMessage("Email Already In Use");
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 p-6">
          <form onSubmit={handleRegister} className="card-body">
            <div
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
            >
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                className="input input-bordered"
                required
              />
            </div>
            <div
              onChange={(e) => setUserImage(e.target.value)}
              className="form-control"
            >
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                className="input input-bordered"
                required
              />
            </div>
            <div
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            >
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            >
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              {errorMessage && (
                <>
                  <p className="text-rose-700">{errorMessage}</p>
                </>
              )}
            </div>
            <div>
              <p>
                Already Have an account? go to{" "}
                <Link className="text-[#FFA45B]" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FFA45B] border-none">Register</button>
            </div>
          </form>
          <div className="card-body">
            <h1 className="text-xl  "> or register with</h1>
            <p onClick={handleGoogleLogin}>
              <FcGoogle className="text-6xl hover:cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
