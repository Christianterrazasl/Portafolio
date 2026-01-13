import React from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  skills: string[];
  className: string | undefined | null;
  left: boolean | undefined | null;
};

const SkillCard = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: props.left ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
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
    </motion.div>
  );
};

export default SkillCard;
