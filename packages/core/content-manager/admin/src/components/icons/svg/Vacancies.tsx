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
      <rect x="18" y="58" width="68" height="185" rx="13" fill="#ECE0CD" />
      <rect x="18" y="58" width="68" height="185" rx="13" stroke="#ECE0CD" stroke-width="2" />
      <rect x="92.22" y="57.72" width="58.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="92.22"
        y="57.72"
        width="58.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
      <rect x="155.22" y="57.72" width="60.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="155.22"
        y="57.72"
        width="60.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
      <rect x="220.22" y="57.72" width="58.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="220.22"
        y="57.72"
        width="58.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
      <rect x="92.22" y="122.72" width="59.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="92.22"
        y="122.72"
        width="59.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
      <rect x="156.22" y="122.72" width="60.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="156.22"
        y="122.72"
        width="60.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
      <rect x="221.22" y="122.72" width="58.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="221.22"
        y="122.72"
        width="58.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
      <rect x="92.22" y="187.72" width="58.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="92.22"
        y="187.72"
        width="58.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
      <rect x="155.22" y="187.72" width="60.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="155.22"
        y="187.72"
        width="60.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
      <rect x="220.22" y="187.72" width="58.56" height="54.56" rx="10.14" fill="#ECE0CD" />
      <rect
        x="220.22"
        y="187.72"
        width="58.56"
        height="54.56"
        rx="10.14"
        stroke="#ECE0CD"
        stroke-width="1.56"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg);
export default ForwardRef;
