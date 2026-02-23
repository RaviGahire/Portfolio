import React, { useState } from 'react'
import { motion } from 'motion/react';
export const TypWritterText = ({ titleOne, titleSecond }) => {
    const [Text, setText] = useState(titleOne)

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };
    const letter = {
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "inline" },
    };
    return (
        <div className="space-y-4"
            onMouseOver={() => setText(titleOne)}
            onMouseOut={() => setText(titleSecond)}>
            <motion.div
                key={Text}
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-green-500 font-mono text-xs uppercase tracking-[0.4em] min-h-4"
            >
                {Text.split("").map((char, index) => (
                    <motion.span key={index} variants={letter}>
                        {char}
                    </motion.span>
                ))}
                {/* Blinking Cursor */}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-green-500 ml-1 translate-y-1"
                />
            </motion.div>
        </div>
    )
}
