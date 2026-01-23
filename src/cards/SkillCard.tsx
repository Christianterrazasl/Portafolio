import { motion } from "motion/react";
import type { SkillCase } from "../data";



const SkillCard = ({ skillCase, className, animations }: { skillCase: SkillCase, className: string, animations: boolean }) => {


  if (animations) return (
    <motion.div
      key={skillCase.title}
      initial={{ opacity: 0, x: skillCase.left ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`rounded-[12px] border-[4px] border-bg-black-soft px-6 md:px-[56px] py-[38px] md:w-auto w-[70vw] md:h-auto h-full ${className}`}

    >
      <h3 className="mb-6 text-text-white text-[28px] md:text-[36px]">{skillCase.title}</h3>
      <ul className="text-[20px] font-light text-text-white-soft pl-2 list-disc list-inside space-y-[1em]">
        {skillCase.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  )

  return (

    <div
      key={skillCase.title}
      className={`rounded-[12px] border-[4px] border-bg-black-soft px-6 md:px-[56px] py-[38px] md:w-auto w-[80vw] md:h-auto h-full ${className}`}
    >
      <h3 className="mb-6 text-text-white text-[28px] md:text-[36px]">{skillCase.title}</h3>
      <ul className="text-[20px] font-light text-text-white-soft pl-2 list-disc list-inside space-y-[1em]">
        {skillCase.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>

  );
};

export default SkillCard;
