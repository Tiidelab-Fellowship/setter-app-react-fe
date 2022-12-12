import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return <ThreeDots
    width="50"
    radius="9"
    color="#dddddd"
    ariaLabel="three-dots-loading"
    visible={true}
  />;
};
