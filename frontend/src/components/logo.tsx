interface ILogoProps {
  classname?: string
}

export function Logo({ classname }: ILogoProps) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2798 7.58594H10.2285C8.03939 7.58594 6.6665 9.13611 6.6665 11.3306V17.2513C6.6665 19.4458 8.03182 20.9959 10.2285 20.9959H19.2787C21.4764 20.9959 22.8428 19.4458 22.8428 17.2513V11.3306C22.8428 9.13611 21.4764 7.58594 19.2798 7.58594Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2144 12.0479H19.2895"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9275 7.58365L17.3417 4.94056C16.2055 3.06933 14.2402 2.43801 12.3539 3.57524L4.60512 8.23874C2.72631 9.36733 2.34796 11.4029 3.47654 13.2893L6.53797 18.3549C6.68067 18.6003 6.8385 18.8208 7.01903 19.0186V19.0262"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
