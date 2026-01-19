import { motion } from "motion/react";
import type { SkillCase } from "../data";



const SkillCard = ({skillCase, className} : {skillCase: SkillCase, className:string}) => {
  return (
    <motion.div
    key={skillCase.title}
      initial={{ opacity: 0, x: skillCase.left ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`rounded-[12px] border-[4px] border-bg-black-soft px-[56px] py-[38px] ${className}`}
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(0,0,0,0.04), 0px 8px 24px 0px rgba(0,0,0,0.06)",
      }}
    >
      <h3 className="mb-6 text-text-white">{skillCase.title}</h3>
      <ul className="text-[20px] font-light text-text-white-soft pl-2 list-disc list-inside space-y-[1em]">
        {skillCase.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
