import React from "react";
import { useRouter } from "next/router";

const PreviousPageButton = () => {
  const router = useRouter();

  const handlePrevious = () => {
    router.back();
  };

  return (
    <div className=" p-4 flex items-center justify-center">
      <button
        className="text-white text-lg font-semibold px-6 py-3 rounded-lg"
        onClick={handlePrevious}
      >
        Previous Page
      </button>
    </div>
  );
};

export default PreviousPageButton;
