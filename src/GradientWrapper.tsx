import React from "react";

type Props = {
  color1: string;
  color2: string;
  children: React.ReactNode;
  className?: string | undefined;
};

const GradientWrapper = (props: Props) => {
  return (
    <div
      className={`p-[1px] rounded-[12px] ${props.className}`}
      style={{
        background: `linear-gradient(90deg, ${props.color1} 0%, ${props.color2} 100%)`
      }}
    >
      {props.children}
    </div>
  );
};

export default GradientWrapper;
