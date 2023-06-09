import Lottie from "lottie-react";
import loadingData from "../../../public/loading.json";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-220px)] ">
      <div>
        <Lottie animationData={loadingData} loop={true} className="h-80" />
        <p className="text-center">Data Loading... ... ...</p>
      </div>
    </div>
  );
};

export default Loading;
