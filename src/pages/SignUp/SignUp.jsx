import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/signUp.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { registerNewUser, updateUserInfo } = useAuth();
  const [hidePassword, setHidePassword] = useState("password");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle hide show password
  const handleShowPassword = () => {
    setHidePassword("text");
  };
  const handleHidePassword = () => {
    setHidePassword("password");
  };

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("password Does not match");
      toast.error("password Does not match");
      return;
    }
    registerNewUser(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        // update User
        updateUserInfo(data.name, data.photoURL)
          .then(() => {
            const userInformation = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
              password: data.password,
              phoneNumber: data.phone,
              address: data.address,
              gender: data.gender,
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInformation),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.insertedId) {
                  reset();
                  toast.success("User signUp Successful 🎁🎁");
                  navigate("/", { replace: true });
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center bg-white shadow-lg rounded-lg py-4 lg:p-8 gap-8 border-2 border-blue-50">
        <div className="card rounded-none w-full bg-base-100">
          <h1 className="text-center text-4xl font-bold">SignUp Now</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="enter your name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">name is required</span>
              )}
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
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <span className="text-red-500">photoURL is required</span>
              )}
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
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">email is required</span>
              )}
            </div>
            {/* Password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={hidePassword}
                placeholder="enter your password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 16,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  minimum six length password allowed
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  maximum 16 length password allowed
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  At least one upper case, one lower case English letter,one
                  digit, one special character needed.
                </p>
              )}
              {/* Show or hide password */}
              {hidePassword === "text" ? (
                <>
                  <button
                    onClick={handleHidePassword}
                    className=" absolute right-2 bottom-3 cursor-pointer"
                  >
                    <FaEyeSlash className="h-6 w-6" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleShowPassword}
                    className=" absolute right-2 bottom-3 cursor-pointer"
                  >
                    <FaEye className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
            {/* Confirm Password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={hidePassword}
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-500">Confirmed your password</p>
              )}
              <p className="text-red-500">{error}</p>
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
                {...register("phone")}
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
                {...register("address")}
              />
            </div>
            {/* Gender */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                {...register("gender")}
                className="select select-bordered"
              >
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* Submit */}
            <div className="form-control mt-6">
              <input
                type="Submit"
                defaultValue="Sign Up"
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
          </form>
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
