import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SocialLogin = ({ title }) => {
  const { signInWithGoogle, signInWithGithub, signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  // Google sing in handler
  const googleSignInHandler = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/", { replace: true });
        toast.success("Login Successful");
      })
      .catch((error) => console.log(error));
  };
  // github sing in handler
  const githubSignInHandler = () => {
    signInWithGithub()
      .then(() => {
        navigate("/", { replace: true });
        toast.success("Login Successful");
      })
      .catch((error) => console.log(error));
  };
  // Facebook sing in handler
  const facebookSignInHandler = () => {
    signInWithFacebook()
      .then(() => {
        navigate("/", { replace: true });
        toast.success("Login Successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">Or {title}</div>
      <div className="text-center space-x-4 gap-4">
        {/* Google */}
        <button
          onClick={googleSignInHandler}
          className="btn bg-red-500 text-white hover:bg-red-600"
        >
          <FaGoogle className="h-[18px] w-[18px]" />
          Google
        </button>
        {/* Github */}
        <button
          onClick={githubSignInHandler}
          className="btn bg-black text-white hover:bg-slate-800"
        >
          <FaGithub className="h-[18px] w-[18px]" />
          GitHub
        </button>
        {/* Facebook */}
        <button
          onClick={facebookSignInHandler}
          className="btn bg-blue-600 text-white hover:bg-blue-700"
        >
          <FaFacebook className="h-[18px] w-[18px]" />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
