import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../../Utilities/UseAuth";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = UseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch(() => {
        setErrorMessage("Incorrect Email and Password");
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 p-6">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
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
                New here? go to{" "}
                <Link className="text-[#FFA45B]" to={"/register"}>
                  Register
                </Link>
              </p>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#FFA45B] border-none">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
