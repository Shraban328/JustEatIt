import { useState } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../../Utilities/UseAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../../Firebase/firebase.config";
const Register = () => {
  const { userCreate } = UseAuth();
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userName, userImage, email, password);
    userCreate(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: userImage,
        });
      })
      .catch((error) => console.error(error));
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
        </div>
      </div>
    </div>
  );
};

export default Register;
