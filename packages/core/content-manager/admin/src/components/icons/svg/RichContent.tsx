import { Ref, forwardRef } from 'react';

const Svg = ({ ...props }, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      width={16}
      height={16}
      viewBox="0 0 300 300"
      {...props}
      fill="none"
    >
      <g clip-path="url(#clip0_231_20648)">
        <rect width="300" height="300" fill="#403E3C" />
        <g clip-path="url(#clip1_231_20648)">
          <rect x="24" y="27" width="253" height="247" rx="8" fill="#ECE0CD" />
          <line
            x1="186.916"
            y1="122.963"
            x2="287.963"
            y2="21.9158"
            stroke="#CAC0B1"
            stroke-width="3"
          />
          <line
            y1="-1.5"
            x2="142.902"
            y2="-1.5"
            transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 113.024 124.023)"
            stroke="#CAC0B1"
            stroke-width="3"
          />
          <line
            y1="-1.5"
            x2="142.902"
            y2="-1.5"
            transform="matrix(0.707107 0.707107 0.707107 -0.707107 187.977 176.976)"
            stroke="#CAC0B1"
            stroke-width="3"
          />
          <line
            x1="114.084"
            y1="178.037"
            x2="13.0373"
            y2="279.084"
            stroke="#CAC0B1"
            stroke-width="3"
          />
        </g>
        <rect
          x="21.5"
          y="24.5"
          width="258"
          height="252"
          rx="10.5"
          stroke="#F0F0F0"
          stroke-width="5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-8 106H300.571V178H-8V106Z"
          fill="#403E3C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M228.572 106H300.572V178H228.572V106Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M275.504 143.371H251.504V145.086H275.504V143.371ZM275.504 152.286H251.504V154H275.504V152.286ZM275.504 134.457H251.504V136.171H275.504V134.457ZM251.504 140.629H280.647V138.914H251.504V140.629ZM251.504 149.543H280.647V147.829H251.504V149.543ZM251.504 130V131.714H281.068V130H251.504Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.9999 142.542C41.5468 141.474 42.6312 139.72 42.6312 138.093C42.6312 134.489 39.8405 131.714 36.2524 131.714H26.2856V154.04H37.5122C40.8451 154.04 43.4285 151.329 43.4285 147.996C43.4285 145.572 42.0571 143.499 39.9999 142.542V142.542ZM31.0697 135.701H35.8537C37.1773 135.701 38.2458 136.769 38.2458 138.093C38.2458 139.417 37.1773 140.485 35.8537 140.485H31.0697V135.701ZM36.6511 150.053H31.0697V145.269H36.6511C37.9747 145.269 39.0431 146.338 39.0431 147.661C39.0431 148.985 37.9747 150.053 36.6511 150.053Z"
          fill="white"
        />
        <path
          d="M187.428 151.6V153.829H166.857V151.6H187.428ZM173.571 140.289C173.571 142.729 175.174 144.228 177.143 144.228C179.113 144.228 180.715 142.729 180.715 140.289V130.171H185.715V140.794C185.715 145.19 181.872 148.762 177.143 148.762C172.415 148.762 168.571 145.19 168.571 140.794V130.171H173.571V140.289Z"
          fill="white"
        />
        <path
          d="M116.714 134.714H111.747L104 149.285H108.143V151.857H93.5715V149.285H99.1467L106.894 134.714H102.143V132.143H116.714V134.714Z"
          fill="white"
        />
        <path
          d="M221.714 121.429V162.571"
          stroke="white"
          stroke-width="1.71429"
          stroke-linecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_231_20648">
          <rect width="300" height="300" fill="white" />
        </clipPath>
        <clipPath id="clip1_231_20648">
          <rect x="24" y="27" width="253" height="247" rx="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(Svg);
export default ForwardRef;
