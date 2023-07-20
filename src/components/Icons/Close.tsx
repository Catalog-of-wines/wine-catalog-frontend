import { FC } from "react";

interface Props {
  className?: string;
}

export const Close: FC<Props> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.4946 21.2559C22.5758 21.3372 22.6403 21.4337 22.6843 21.54C22.7283 21.6462 22.751 21.76 22.751 21.875C22.751 21.99 22.7283 22.1038 22.6843 22.21C22.6403 22.3163 22.5758 22.4128 22.4946 22.4941C22.4133 22.5754 22.3167 22.6398 22.2105 22.6838C22.1043 22.7278 21.9905 22.7505 21.8755 22.7505C21.7605 22.7505 21.6467 22.7278 21.5405 22.6838C21.4342 22.6398 21.3377 22.5754 21.2564 22.4941L14.0005 15.237L6.74455 22.4941C6.58036 22.6582 6.35768 22.7505 6.12549 22.7505C5.89329 22.7505 5.67061 22.6582 5.50642 22.4941C5.34224 22.3299 5.25 22.1072 5.25 21.875C5.25 21.6428 5.34224 21.4201 5.50642 21.2559L12.7635 14L5.50642 6.74406C5.34224 6.57988 5.25 6.35719 5.25 6.125C5.25 5.8928 5.34224 5.67012 5.50642 5.50594C5.67061 5.34175 5.89329 5.24951 6.12549 5.24951C6.35768 5.24951 6.58036 5.34175 6.74455 5.50594L14.0005 12.763L21.2564 5.50594C21.4206 5.34175 21.6433 5.24951 21.8755 5.24951C22.1077 5.24951 22.3304 5.34175 22.4946 5.50594C22.6587 5.67012 22.751 5.8928 22.751 6.125C22.751 6.35719 22.6587 6.57988 22.4946 6.74406L15.2375 14L22.4946 21.2559Z"
      fill="#B5B2B4"
    />
  </svg>
);