import React from "react";

type Props = {
  title: string;
  skills: string[];
  className:string | undefined | null;
};

const SkillCard = (props: Props) => {
  return (
    <div
      className={`rounded-[12px] bg-bg-white-acc px-[56px] py-[38px] ${props.className}`}
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(0,0,0,0.04), 0px 8px 24px 0px rgba(0,0,0,0.06)",
      }}
    >
      <h3 className="mb-6">{props.title}</h3>
      <ul className="text-[20px] font-light text-text-black-soft pl-2 list-disc list-inside space-y-[1em]">
        {props.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
