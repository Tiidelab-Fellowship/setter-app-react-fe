import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return <ThreeDots
    height="80"
    width="50"
    radius="9"
    color="#dddddd"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />;
};
