import { SVGProps } from "react";

const LetterSpacing = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      {...props}
    >
      <path
        d="M2.16666 19.5H23.8333M2.16666 19.5L5.41666 16.25M2.16666 19.5L5.41666 22.75M23.8333 19.5L20.5833 16.25M23.8333 19.5L20.5833 22.75M7.58333 3.25H18.4167M13 3.25V15.1667"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="0.5" y="0.5" width="25" height="25" rx="3.5" stroke="white" />
    </svg>
  );
};

export default LetterSpacing;
