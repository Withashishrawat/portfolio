import { ReactLenis } from "lenis/react";

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
