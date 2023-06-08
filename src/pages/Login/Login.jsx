import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/login.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [hidePassword, setHidePassword] = useState("password");
  const { loginExitingUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const userLoginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginExitingUser(email, password)
      .then(() => {
        toast.success("User login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle hide show password
  const handleShowPassword = () => {
    setHidePassword("text");
  };
  const handleHidePassword = () => {
    setHidePassword("password");
  };

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center bg-white shadow-lg rounded-lg py-4 lg:p-8 gap-8 border-2 border-blue-50">
        <div className="card rounded-none w-full bg-base-100">
          <h1 className="text-center text-4xl font-bold">Login Now</h1>
          <form onSubmit={userLoginHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={hidePassword}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {/* Show or hide password */}
              {hidePassword === "text" ? (
                <>
                  <button
                    onClick={handleHidePassword}
                    className=" absolute right-2 bottom-11 cursor-pointer"
                  >
                    <FaEyeSlash className="h-6 w-6" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleShowPassword}
                    className=" absolute right-2 bottom-11 cursor-pointer"
                  >
                    <FaEye className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* send password reset mail */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="Submit"
                defaultValue="Login"
                className="btn bg-[#FF4D4D] text-white text-lg hover:bg-red-500"
              />
            </div>

            {/* Redirect register page */}
            <div>
              <small>
                Do not have an{" "}
                <Link to="/signup" className="underline font-bold">
                  signup now
                </Link>
              </small>
            </div>
          </form>
          <SocialLogin title={"Login With"} />
        </div>
        <div>
          <img src={login} alt="login image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
