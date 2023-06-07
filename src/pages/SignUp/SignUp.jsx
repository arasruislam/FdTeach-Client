import { Link } from "react-router-dom";
import signUp from "../../assets/signUp.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-2 place-items-center bg-white shadow-lg rounded-lg p-8 gap-8 border-2 border-blue-50">
        <div className="card rounded-none w-full bg-base-100">
          <h1 className="text-center text-4xl font-bold">SignUp Now</h1>
          <div className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="enter your name"
                className="input input-bordered"
              />
            </div>
            {/* PhotoUrl */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                placeholder="enter your photoUrl"
                className="input input-bordered"
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="enter your email"
                className="input input-bordered"
              />
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="enter your password"
                className="input input-bordered"
              />
            </div>
            {/* Confirm Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
              />
            </div>
            {/* Phone Number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="enter phone number"
                className="input input-bordered"
              />
            </div>
            {/* Address */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="your address"
                className="input input-bordered"
              />
            </div>
            {/* Gender */}
            {/* Submit Button */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
            {/* Submit */}
            <div className="form-control mt-6">
              <input
                type="Submit"
                value="Sign Up"
                className="btn bg-[#FF4D4D] text-white text-lg hover:bg-red-500"
              />
            </div>

            {/* Redirect login page */}
            <div>
              <small>
                All ready have an{" "}
                <Link to="/login" className="underline font-bold">
                  login now
                </Link>
              </small>
            </div>
          </div>
          <SocialLogin title={"SignUp With"} />
        </div>
        <div>
          <img src={signUp} alt="login image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
