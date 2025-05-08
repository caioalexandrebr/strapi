import { Ref, forwardRef } from 'react';

const RichContent = ({ ...props }, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      width={16}
      height={16}
      viewBox="0 0 240 240"
      {...props}
      fill="none"
    >
      <g clip-path="url(#clip0_223_1121)">
        <rect width="240" height="240" fill="white" />
        <rect
          x="19.5639"
          y="26.5639"
          width="201.872"
          height="186.872"
          rx="10.7139"
          fill="#F6F6F6"
        />
        <rect
          x="19.5639"
          y="26.5639"
          width="201.872"
          height="186.872"
          rx="10.7139"
          stroke="#F0F0F0"
          stroke-width="1.12778"
        />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 92H480V148H0V92Z" fill="#AAAAAA" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M184 92H240V148H184V92Z" fill="#DBDBDB" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M220.503 121.066H201.836V122.4H220.503V121.066ZM220.503 128H201.836V129.333H220.503V128ZM220.503 114.133H201.836V115.467H220.503V114.133ZM201.836 118.934H224.503V117.6H201.836V118.934ZM201.836 125.867H224.503V124.533H201.836V125.867ZM201.836 110.667V112H224.83V110.667H201.836Z"
          fill="#606060"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.3337 120.422C38.5368 119.591 39.3802 118.226 39.3802 116.961C39.3802 114.158 37.2096 112 34.4189 112H26.667V129.364H35.3988C37.991 129.364 40.0003 127.256 40.0003 124.664C40.0003 122.778 38.9337 121.166 37.3337 120.422V120.422ZM30.3879 115.101H34.1089C35.1383 115.101 35.9693 115.932 35.9693 116.961C35.9693 117.991 35.1383 118.822 34.1089 118.822H30.3879V115.101ZM34.729 126.263H30.3879V122.542H34.729C35.7585 122.542 36.5895 123.373 36.5895 124.403C36.5895 125.432 35.7585 126.263 34.729 126.263Z"
          fill="#606060"
        />
        <path
          d="M152 127.467V129.2H136V127.467H152ZM141.222 118.669C141.222 120.568 142.468 121.733 144 121.733C145.532 121.733 146.777 120.568 146.777 118.669V110.8H150.667V119.063C150.667 122.481 147.678 125.259 144 125.259C140.322 125.259 137.333 122.481 137.333 119.063V110.8H141.222V118.669Z"
          fill="#606060"
        />
        <path
          d="M97 114.333H93.1367L87.1104 125.667H90.333V127.667H79V125.667H83.3359L89.3613 114.333H85.667V112.333H97V114.333Z"
          fill="#606060"
        />
        <path
          d="M178.667 104V136"
          stroke="#D9D9D9"
          stroke-width="1.33333"
          stroke-linecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_223_1121">
          <rect width="240" height="240" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ForwardRef = forwardRef(RichContent);
export default ForwardRef;
