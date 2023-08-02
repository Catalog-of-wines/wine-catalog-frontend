interface Props {
  className?: string;
}

export const BackIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icon_back">
      <path
        id="Vector"
        d="M18.1198 22.1309C18.201 22.2122 18.2655 22.3087 18.3095 22.415C18.3535 22.5212 18.3762 22.635 18.3762 22.75C18.3762 22.865 18.3535 22.9788 18.3095 23.085C18.2655 23.1913 18.201 23.2878 18.1198 23.3691C18.0385 23.4504 17.9419 23.5148 17.8357 23.5588C17.7295 23.6028 17.6157 23.6255 17.5007 23.6255C17.3857 23.6255 17.2719 23.6028 17.1657 23.5588C17.0594 23.5148 16.9629 23.4504 16.8816 23.3691L8.13163 14.6191C8.05027 14.5378 7.98573 14.4413 7.9417 14.3351C7.89767 14.2288 7.875 14.115 7.875 14C7.875 13.885 7.89767 13.7711 7.9417 13.6649C7.98573 13.5587 8.05027 13.4622 8.13163 13.3809L16.8816 4.63094C17.0458 4.46675 17.2685 4.37451 17.5007 4.37451C17.7329 4.37451 17.9556 4.46675 18.1198 4.63094C18.2839 4.79512 18.3762 5.0178 18.3762 5.25C18.3762 5.48219 18.2839 5.70488 18.1198 5.86906L9.98772 14L18.1198 22.1309Z"
        fill="#B5B2B4"
      />
    </g>
  </svg>
)
