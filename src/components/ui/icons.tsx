import { SVGProps } from "react";

export const Icons = {
  Sanity: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 512 104"
      {...props}
    >
      <path fill="#F37368" d="M381.462 36.986v64.834h-20.886V26.833z" />
      <path
        fill="#F7A199"
        d="m85.865 89.781 15.665 13.634 65.994-34.375-6.817-16.39-74.842 37.131Zm274.71-41.772 53.086-27.558-8.992-15.52-44.093 21.902v21.176Z"
      />
      <path
        fill="#F37368"
        d="M211.182 31.91v69.91h-20.016V2.176l20.016 29.733ZM85.865 89.78l15.665 13.634 30.169-75.422-9.718-25.817L85.865 89.78Z"
      />
      <path
        fill="#F04939"
        d="M121.98 2.176h20.597l38.146 99.644h-21.176L121.98 2.176Zm92.248 0L258.176 70.2v31.619l-67.01-99.644h23.062Zm81.659 0h20.74v99.644h-20.74V2.176Zm64.689 18.275h-31.91V2.176h74.407l10.588 18.275H360.576Z"
      />
      <path fill="#F7A199" d="M475.014 63.964v37.856h-20.596V63.964" />
      <path
        fill="#F04939"
        d="m489.228 2.176-34.81 61.788h20.596L511.13 2.176z"
      />
      <path
        fill="#F37368"
        d="m454.418 63.964-35.97-61.788h22.626l24.222 42.352z"
      />
      <path
        fill="#F04939"
        d="M8.558 13.779c0 13.78 8.557 22.046 25.672 26.398l18.13 4.206c16.245 3.771 26.108 13.054 26.108 28.138.145 6.527-2.03 12.909-5.947 18.13 0-15.084-7.832-23.206-26.543-28.138l-17.84-4.06C13.78 55.26 2.756 47.572 2.756 31.183c0-6.237 2.03-12.474 5.802-17.405"
      />
      <path
        fill="#F37368"
        d="M258.176 65.124V2.176h20.016v99.644h-20.016zM61.353 68.75c7.687 4.932 11.168 11.894 11.168 21.902-6.527 8.267-17.695 12.763-30.894 12.763-22.191 0-38-11.023-41.337-30.023h21.321c2.756 8.702 10.008 12.763 19.871 12.763 11.749.145 19.726-6.237 19.871-17.405M8.558 13.634C14.794 5.512 25.528.58 38.58.58c22.772 0 35.826 12.039 39.162 28.864H57.147c-2.32-6.672-7.978-11.894-18.276-11.894-11.168.145-18.71 6.527-19.145 16.68-7.474-4.122-11.459-12.184-11.168-20.596Z"
      />
    </svg>
  ),
  Nextjs: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_408_139"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={180}
        height={180}
      >
        <circle cx={90} cy={90} r={90} fill="black" />
      </mask>
      <g mask="url(#mask0_408_139)">
        <circle
          cx={90}
          cy={90}
          r={87}
          fill="black"
          stroke="white"
          strokeWidth={6}
        />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_408_139)"
        />
        <rect
          x={115}
          y={54}
          width={12}
          height={72}
          fill="url(#paint1_linear_408_139)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_408_139"
          x1={109}
          y1={116.5}
          x2={144.5}
          y2={160.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_139"
          x1={121}
          y1={54}
          x2={120.799}
          y2={106.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  ),
  React: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#61dafb"
        d="M16 0c-1.657 0-3.157.672-4.243 1.757C10.672 2.843 10 4.343 10 6c0 1.657.672 3.157 1.757 4.243C12.843 11.328 14.343 12 16 12s3.157-.672 4.243-1.757C21.328 9.157 22 7.657 22 6c0-1.657-.672-3.157-1.757-4.243C19.157.672 17.657 0 16 0zm0 2c1.105 0 2.105.43 2.828 1.172C19.57 3.895 20 4.895 20 6s-.43 2.105-1.172 2.828C17.105 9.57 16.105 10 15 10s-2.105-.43-2.828-1.172C11.43 8.105 11 7.105 11 6s.43-2.105 1.172-2.828C13.895 2.43 14.895 2 16 2z"
      />
    </svg>
  ),
  Typescript: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#007acc"
        d="M0 0v32h32V0H0zm18.5 25.5h-5v-2h5v2zm-5-4v-2h5v2h-5zm0-4v-2h5v2h-5zm0-4v-2h5v2h-5zm0-4v-2h5v2h-5z"
      />
    </svg>
  ),
  TailwindCSS: (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 256 154"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          x1="-2.778%"
          y1="32%"
          x2="100%"
          y2="67.556%"
          id="gradient"
        >
          <stop stopColor="#2298BD" offset="0%" />
          <stop stopColor="#0ED7B5" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
        fill="url(#gradient)"
      />
    </svg>
  ),
  RadixUI: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffff"
      style={{
        marginRight: 3,
      }}
      viewBox="4 0 17 25"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        fill="#ffff"
      />
    </svg>
  ),
};
