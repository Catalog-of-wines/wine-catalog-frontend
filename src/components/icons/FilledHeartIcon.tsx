interface Props {
  className?: string;
}

export const FilledHeartIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icon_heart_filled">
      <path
        id="Vector"
        d="M26.25 10.2812C26.25 17.9375 14.898 24.1347 14.4145 24.3906C14.2871 24.4592 14.1447 24.495 14 24.495C13.8553 24.495 13.7129 24.4592 13.5855 24.3906C13.102 24.1347 1.75 17.9375 1.75 10.2812C1.75203 8.48337 2.46713 6.75971 3.73842 5.48842C5.00971 4.21713 6.73337 3.50203 8.53125 3.5C10.7898 3.5 12.7673 4.47125 14 6.11297C15.2327 4.47125 17.2102 3.5 19.4688 3.5C21.2666 3.50203 22.9903 4.21713 24.2616 5.48842C25.5329 6.75971 26.248 8.48337 26.25 10.2812Z"
        fill="white"
      />
    </g>
  </svg>
)