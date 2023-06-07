import login from "../../assets/login.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-2 place-items-center bg-white shadow-lg rounded-lg p-8 gap-8 border-2 border-blue-50">
        <div className="card rounded-none w-full bg-base-100">
          <h1 className="text-center text-4xl font-bold">Login Now</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="Submit"
                value="Login"
                className="btn bg-[#FF4D4D] text-white text-lg hover:bg-red-500"
              />
            </div>
          </div>
          <SocialLogin />
        </div>
        <div>
          <img src={login} alt="login image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
