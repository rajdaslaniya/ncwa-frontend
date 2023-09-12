import React from "react";
import mainHomePageLogo from "./png/national-logo.png";
import downSvgImage from "./svg/down-arrow.svg";
import illustrationSvg from "./svg/illustration.svg";
import depCouncilSvg from "./svg/depression-counseling.svg";
import ottGroupSvg from "./svg/ott-group.svg";
import headerLogo from "./png/header-logo.png";
import logOutImage from "./svg/Logout.svg";
import personImage from "./svg/Person.svg";

const DownArrow = ({ height = 20, width = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M9.998 12.9015L14.8827 8.01676L13.7343 6.8667L9.998 10.6054L6.26253 6.8667L5.11328 8.01595L9.998 12.9015Z"
      fill="#1A202C"
    />
  </svg>
);

export {
  mainHomePageLogo,
  downSvgImage,
  illustrationSvg,
  depCouncilSvg,
  ottGroupSvg,
  headerLogo,
  DownArrow,
  personImage,
  logOutImage,
};
