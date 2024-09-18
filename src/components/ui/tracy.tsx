"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useMotionValue,
  animate,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(1000);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute -left-4 top-3 md:-left-20">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-netural-200 flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className=" ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 30,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 20,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#fed7aa" stopOpacity="0"></stop>
              <stop stopColor="#d4d4d8"></stop>
              <stop offset="0.325" stopColor="#94a3b8"></stop>
              <stop offset="1" stopColor="#86efac" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export const ZoomInOut = () => {
  const [val, setVal] = useState(0);
  const progress = useMotionValue(val);

  useEffect(() => {
    const animation = animate(progress, val, {
      duration: 3,
      ease: "easeOut",
      onComplete: () => {
        if (val === 4) {
          setVal(0);
        } else {
          setVal((prev) => prev + 1);
        }
      },
    });
    console.log(val);
    return () => animation.stop();
  }, [val, progress]);

  // const x1 = useSpring(useTransform(progress, [0, 0.8], [50, 2000]), {
  //   stiffness: 200,
  //   damping: 90,
  // });
  // const x2 = useSpring(useTransform(progress, [0, 1], [50, 2000 - 200]), {
  //   stiffness: 250,
  //   damping: 90,
  // });
  return (
    <svg
      viewBox={`0 0 2000 20`}
      width={2000}
      height={20} // Set the SVG height
      className=" ml-4 block"
      aria-hidden="true"
    >
      <motion.path
        d={`M 1 0V -36 l 18 24H ${2000 * 0.8} l -18 24H 2000`}
        fill="none"
        stroke="#9091A0"
        strokeOpacity="1"
        transition={{
          duration: 30,
        }}
      ></motion.path>
      <defs>
        <motion.linearGradient
          id="gradient"
          gradientUnits="userSpaceOnUse"
          x1={2}
          x2={20}
          y1={"0"} // set y1 for gradient
          y2={"0"} // set y2 for gradient
        >
          <stop stopColor="#18CCFC" stopOpacity="0"></stop>
          <stop stopColor="#18CCFC"></stop>
          <stop offset="0.325" stopColor="#6344F5"></stop>
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const Curvey = () => {
  const width = 800;
  const height = 100;

  const pathVariants = {
    start: { pathLength: 0, pathOffset: 0 },
    end: {
      pathLength: 1,
      pathOffset: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const animationVariants = {
    forward: {
      x: [0, width - 40, 0], // Move from start to end and back
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
    backward: {
      x: [0, 0, width - 40], // Move from end and back start to
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      variants={animationVariants}
      initial="backward"
      animate="forward"
    >
      <motion.path
        d={`M20,${height / 2}
           Q40,${height / 2} 40,${height / 2}
           L${width - 40},${height / 2}
           Q${width - 20},${height / 2} ${width - 20},${height / 2}`}
        stroke="#3498db"
        strokeWidth="4"
        fill="none"
        initial="start"
        animate="end"
        variants={pathVariants}
        transition={{
          pathLength: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          },
          pathOffset: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          },
        }}
      />
    </motion.svg>
  );
};

export const Rect = () => (
  <div className="w-full">
    <svg width="100%" height="60" viewBox="0 0 3600 60">
      <defs>
        <linearGradient id="gradient" x1="5%" y1="70%" x2="150%" y2="10%">
          <stop offset="0%" stopColor="#a5f3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <motion.rect
        x="0"
        y="10"
        width="200"
        height="2"
        fill="url(#gradient)"
        animate={{
          x: [0, 3000, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  </div>
);
