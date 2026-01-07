import React from "react";

type Props = {
  left: boolean | undefined;
  note: string;
  title: string;
  description: string;
  stack: string;
  link: string | undefined;
};

export default function ExperienceCard(props: Props) {
  return (
    <div
      className="flex items-center"
      style={{
        display: "flex",
        flexDirection: props.left ? "row-reverse" : "row",
      }}
    >
      <div
        className="px-[88px] py-[50px] rounded-[12px] mb-[48px] flex-5"
        style={{
          background:
            "linear-gradient(90deg,hsl(0, 0.00%, 15.00%) 0%,hsl(0, 0.00%, 10.00%) 100%)",
        }}
      >
        <h3 className="text-text-white mb-[32px]">{props.title}</h3>
        <p className="text-[20px] text-text-white-soft font-light mb-8">
          {props.description}
        </p>
        <p className="text-[20px] text-text-white-soft font-light">
          <span className="font-medium">Stack used:</span> {props.stack}
        </p>

        {props.link && (
          <p className="text-[20px] text-text-white-soft font-light mb-2">
            <span className="font-medium">Link:</span> {props.link}
          </p>
        )}
      </div>
      <div className="flex-4 px-20">
        <h4 className="text-text-white font-light text-[36px] text-center">{props.note}</h4>
      </div>
    </div>
  );
}
