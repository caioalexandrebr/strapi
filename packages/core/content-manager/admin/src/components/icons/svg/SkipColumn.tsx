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
      <g clip-path="url(#clip0_231_20761)">
        <rect width="300" height="300" fill="#403E3C" />
        <rect
          x="56.5"
          y="117.5"
          width="187"
          height="65"
          fill="#ECE0CD"
          fill-opacity="0.3"
          stroke="#ECE0CD"
          stroke-width="5"
        />
        <rect
          x="-52.7513"
          y="88.2487"
          width="131.484"
          height="122.503"
          rx="22.7672"
          fill="#ECE0CD"
        />
        <rect
          x="-52.7513"
          y="88.2487"
          width="131.484"
          height="122.503"
          rx="22.7672"
          stroke="#ECE0CD"
          stroke-width="3.50264"
        />
        <rect
          x="216.702"
          y="88.2487"
          width="135.974"
          height="122.503"
          rx="22.7672"
          fill="#ECE0CD"
        />
        <rect
          x="216.702"
          y="88.2487"
          width="135.974"
          height="122.503"
          rx="22.7672"
          stroke="#ECE0CD"
          stroke-width="3.50264"
        />
        <rect x="56.5" y="117.5" width="187" height="65" stroke="#403E3C" stroke-width="5" />
      </g>
      <defs>
        <clipPath id="clip0_231_20761">
          <rect width="300" height="300" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(Svg);
export default ForwardRef;
