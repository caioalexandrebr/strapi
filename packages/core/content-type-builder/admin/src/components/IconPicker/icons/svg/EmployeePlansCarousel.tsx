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
      <rect width="300" height="300" fill="#403E3C" />
      <path
        d="M45.3696 17.4124C46.3843 16.5848 47.8809 16.6443 48.8267 17.5901L49.0044 17.7864C49.7766 18.7334 49.7767 20.1002 49.0044 21.0471L48.8267 21.2434L38.6538 31.4163H61.5835C63.0102 31.4163 64.1665 32.5735 64.1665 34.0002C64.1663 35.4268 63.0101 36.5833 61.5835 36.5833H38.6538L48.8267 46.7561L49.0044 46.9524C49.7769 47.8995 49.7769 49.267 49.0044 50.2141L48.8267 50.4104C47.8808 51.3559 46.3842 51.4147 45.3696 50.5872L45.1733 50.4104L30.5903 35.8264C29.5815 34.8176 29.5815 33.1819 30.5903 32.1731L45.1733 17.5901L45.3696 17.4124Z"
        fill="#ECE0CD"
        stroke="#ECE0CD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g clip-path="url(#clip0_231_20916)">
        <rect x="162.138" y="60.825" width="115.413" height="177.87" rx="8.74337" fill="#ECE0CD" />
        <g clip-path="url(#clip1_231_20916)">
          <rect x="172.63" y="71.317" width="54.8604" height="15.0866" rx="7.5433" fill="#403E3C" />
        </g>
        <g clip-path="url(#clip2_231_20916)">
          <rect
            x="172.63"
            y="90.5182"
            width="94.4284"
            height="13.9894"
            rx="6.9947"
            fill="#403E3C"
          />
        </g>
        <g clip-path="url(#clip3_231_20916)">
          <rect
            x="172.63"
            y="108.622"
            width="94.4284"
            height="80.9191"
            rx="19.2011"
            fill="#403E3C"
          />
        </g>
        <path d="M162.138 196.536V196.754H277.55V196.536V196.317H162.138V196.536Z" fill="#403E3C" />
        <rect x="175.978" y="203.53" width="24.6724" height="24.6724" rx="3.79575" fill="#403E3C" />
        <rect x="207.508" y="203.53" width="24.6724" height="24.6724" rx="3.79575" fill="#403E3C" />
        <rect x="239.038" y="203.53" width="24.6724" height="24.6724" rx="3.79575" fill="#403E3C" />
        <rect x="162.344" y="59.9335" width="115.207" height="6.85755" fill="#CAC0B1" />
      </g>
      <rect
        x="162.682"
        y="61.3691"
        width="114.324"
        height="176.782"
        rx="8.19923"
        stroke="black"
        stroke-opacity="0.1"
        stroke-width="1.08829"
      />
      <g clip-path="url(#clip4_231_20916)">
        <rect x="22.4497" y="61.3049" width="115.413" height="177.87" rx="8.74337" fill="#ECE0CD" />
        <g clip-path="url(#clip5_231_20916)">
          <rect
            x="32.9417"
            y="71.797"
            width="54.8604"
            height="15.0866"
            rx="7.5433"
            fill="#403E3C"
          />
        </g>
        <g clip-path="url(#clip6_231_20916)">
          <rect
            x="32.9417"
            y="90.9982"
            width="94.4284"
            height="13.9894"
            rx="6.9947"
            fill="#403E3C"
          />
        </g>
        <g clip-path="url(#clip7_231_20916)">
          <rect
            x="32.9417"
            y="109.102"
            width="94.4284"
            height="80.9191"
            rx="19.2011"
            fill="#403E3C"
          />
        </g>
        <path
          d="M22.4497 197.016V197.234H137.862V197.016V196.797H22.4497V197.016Z"
          fill="#403E3C"
        />
        <rect x="36.2898" y="204.01" width="24.6724" height="24.6724" rx="3.79575" fill="#403E3C" />
        <rect x="67.8198" y="204.01" width="24.6724" height="24.6724" rx="3.79575" fill="#403E3C" />
        <rect x="99.3496" y="204.01" width="24.6724" height="24.6724" rx="3.79575" fill="#403E3C" />
        <rect x="22.6555" y="60.4135" width="115.207" height="6.85755" fill="#CAC0B1" />
      </g>
      <rect
        x="22.9939"
        y="61.8491"
        width="114.324"
        height="176.782"
        rx="8.19923"
        stroke="black"
        stroke-opacity="0.1"
        stroke-width="1.08829"
      />
      <path
        d="M254.63 249.412C253.616 248.585 252.119 248.644 251.173 249.59L250.996 249.786C250.223 250.733 250.223 252.1 250.996 253.047L251.173 253.243L261.346 263.416H238.417C236.99 263.416 235.833 264.574 235.833 266C235.834 267.427 236.99 268.583 238.417 268.583H261.346L251.173 278.756L250.996 278.952C250.223 279.899 250.223 281.267 250.996 282.214L251.173 282.41C252.119 283.356 253.616 283.415 254.63 282.587L254.827 282.41L269.41 267.826C270.419 266.818 270.419 265.182 269.41 264.173L254.827 249.59L254.63 249.412Z"
        fill="#ECE0CD"
        stroke="#ECE0CD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <clipPath id="clip0_231_20916">
          <rect x="162.138" y="60.825" width="115.413" height="177.87" rx="8.74337" fill="white" />
        </clipPath>
        <clipPath id="clip1_231_20916">
          <rect x="172.63" y="71.317" width="54.8604" height="15.0866" rx="7.5433" fill="white" />
        </clipPath>
        <clipPath id="clip2_231_20916">
          <rect x="172.63" y="90.5182" width="94.4284" height="13.9894" rx="6.9947" fill="white" />
        </clipPath>
        <clipPath id="clip3_231_20916">
          <rect x="172.63" y="108.622" width="94.4284" height="80.9191" rx="19.2011" fill="white" />
        </clipPath>
        <clipPath id="clip4_231_20916">
          <rect x="22.4497" y="61.3049" width="115.413" height="177.87" rx="8.74337" fill="white" />
        </clipPath>
        <clipPath id="clip5_231_20916">
          <rect x="32.9417" y="71.797" width="54.8604" height="15.0866" rx="7.5433" fill="white" />
        </clipPath>
        <clipPath id="clip6_231_20916">
          <rect x="32.9417" y="90.9982" width="94.4284" height="13.9894" rx="6.9947" fill="white" />
        </clipPath>
        <clipPath id="clip7_231_20916">
          <rect
            x="32.9417"
            y="109.102"
            width="94.4284"
            height="80.9191"
            rx="19.2011"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(Svg);
export default ForwardRef;
