import { motion } from "motion/react";
import React, { useState } from "react";
import { useLenis } from "lenis/react";

type Props = {
  title: string;
  link: string;
};

const NavBarItem = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const lenis = useLenis();

  const handleScrollTo = (selector: string) => {
    lenis?.scrollTo(selector, {
      duration: 1.2,
    });
  };

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleScrollTo(props.link)}
    >
      <p className="text-sm font-bold uppercase tracking-[0.2em] cursor-pointer text-text-white">
        {props.title}
      </p>
      <motion.div
        className="bg-accent h-[2px] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ transformOrigin: "center center" }}
      />
    </div>
  );
};

export default NavBarItem;
