import React from "react";
import UploadNftForm from "./UploadNft/UploadNftForm";
import Test from "./Test";

const UploadNftPage = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <div className="flex-1">
        <Test />
      </div>
      <div className="p-5">
        <UploadNftForm />
      </div>
    </div>
  );
};

export default UploadNftPage;
