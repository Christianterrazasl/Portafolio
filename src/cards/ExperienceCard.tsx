import { motion } from "motion/react";
import type { ExperienceCase } from "../data";

export default function ExperienceCard({
  experienceCase,
  setExperienceCardOpen,
}: {
  experienceCase: ExperienceCase;
  setExperienceCardOpen: (exp: ExperienceCase) => void;
}) {
  return (
    <div
      className="flex items-center"
      style={{
        display: "flex",
        flexDirection: experienceCase.left ? "row-reverse" : "row",
      }}
    >
      <motion.div
        className="px-[36px] md:px-0 md:pl-[88px] py-[50px] rounded-[12px] mb-[48px] flex-5 cursor-pointer flex items-center border-transparent border-[2px] hover:border-accent"
        style={{
          background:
            "linear-gradient(90deg,hsl(0, 0.00%, 15.00%) 0%,hsl(0, 0.00%, 10.00%) 100%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        onClick={() => setExperienceCardOpen(experienceCase)}
      >
        <div className="">
          <h3 className="text-text-white mb-[32px] text-[28px] md:text-[36px]">{experienceCase.title}</h3>
          <p className="text-[20px] text-text-white-soft font-light mb-8">
            {experienceCase.description}
          </p>
          <p className="text-[20px] text-text-white-soft font-light">
            <span className="font-medium">Stack used:</span>{" "}
            {experienceCase.stack}
          </p>

          {experienceCase.link && (
            <p className="text-[20px] text-text-white-soft font-light mb-2">
              <span className="font-medium">Link:</span> {experienceCase.link}
            </p>
          )}
        </div>
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-[40px] flex-shrink-0 mx-6 md:block hidden"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"
              fill="#0F4EAE"
            ></path>{" "}
          </g>
        </svg>
      </motion.div>
      <div className="flex-4 px-20 md:block hidden">
        <h4 className="text-text-white font-light text-[36px] text-center">
          {experienceCase.note}
        </h4>
      </div>
    </div>
  );
}
