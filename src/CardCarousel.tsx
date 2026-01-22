import React from "react";
import { motion, useMotionValue } from "motion/react";
import { useState } from "react";

const SPRING_OPTIONS = {
    type: "spring" as const,
    mass: 1.5,
    stiffness: 400,
    damping: 40,
};

export default function CardCarouselDots({
    cards,
}:{cards:React.ReactNode[]}) {
    const DRAG_BUFFER = 25;
    const [cardIndex, setCardIndex] = useState(0);
    const dragX = useMotionValue(0);
    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && cardIndex < cards.length - 1) {
            setCardIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && cardIndex > 0) {
            setCardIndex((pv) => pv - 1);
        }
    };
    return (
        <div className="">
            <div
                className="relative pb-[46px]"
                style={{
                    paddingLeft: "15vw",
                    paddingRight: `15vw`,
                    overflow: "hidden",
                    height: "fit-content",
                }}
            >
                <motion.div
                    className="flex"
                    drag="x"
                    dragElastic={0.8}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={onDragEnd}
                    style={{
                        x: dragX,
                        gap: `5vw`,
                        height: `auto`
                    }}
                    animate={{
                        translateX: `-${cardIndex * (75)}vw`,
                    }}
                    transition={SPRING_OPTIONS}
                >
                    {cards.map((card, index) => (
                        <div key={index}>{card}</div>
                    ))}
                </motion.div>
            </div>


            <div className="flex justify-center items-stretch gap-[10px]">
                {cards.map((_, index) => (
                    <div
                        className={`w-[10px] h-[10px] rounded-full cursor-pointer ${cardIndex === index ? "bg-white" : "bg-white/50"}`}
                        key={index}
                        onClick={() => setCardIndex(index)}
                    />
                ))}
            </div>

        </div>
    );
}