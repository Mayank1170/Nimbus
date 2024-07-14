"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface TabsProps {
  onTabChange: (selectedTab: "BTC" | "SOL" | "JUP" | "BONK" | "PYTH" | "INF") => void;
}

const tabLinks: TabLinks[] = [
  { label: "BTC", click: "BTC" },
  { label: "SOL", click: "SOL" },
  { label: "JUP", click: "JUP" },
  { label: "BONK", click: "BONK" },
  { label: "PYTH", click: "PYTH" },
  { label: "INF", click: "INF" },
];

interface TabLinks {
  label: string;
  click: string;
}

export const Navbar: React.FC<TabsProps> = ({ onTabChange }) => {
  const [activeComponent, setActiveComponent] = useState<"BTC" | "SOL" | "JUP" | "BONK" | "PYTH" | "INF">("BTC");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const mainRef = useRef<HTMLDivElement>(null); // Ref to main div

  useEffect(() => {
    const handleResize = () => {
      if (mainRef.current) {
        const newWidth = mainRef.current.offsetWidth;
        setActiveIndex(Math.floor(xValue / (newWidth / 6)));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run on mount and clean up on unmount

  const handleButtonClick = (componentName: "BTC" | "SOL" | "JUP" | "BONK" | "PYTH" | "INF", index: number) => {
    setActiveComponent(componentName);
    onTabChange(componentName);
    setActiveIndex(index);
    setActiveTabIndex(index);
  };

  const xValue = activeIndex * (mainRef.current?.offsetWidth ?? 0) / 6;

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div id="main" ref={mainRef} className="w-[60%] mx-4 flex rounded-lg border bg-[#1F2025] border-white/20 relative">
          {tabLinks.map((link, index) => (
            <button
              onClick={() => handleButtonClick(link.click as "BTC" | "SOL" | "JUP" | "BONK" | "PYTH" | "INF", index)}
              key={link.label}
              className={classNames(
                "w-full h-14 rounded-lg flex items-center justify-center relative z-[1] transition-colors duration-200 ease-in-out font-semibold",
                {
                  "text-black": activeIndex === index,
                  "text-white": activeComponent !== link.click,
                  "bg-none": activeIndex === index,
                }
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(activeTabIndex)}
            >
              {link.label}
            </button>
          ))}
          <motion.div
            id="active-icon"
            className={classNames("h-full w-[16.6666666667%] absolute rounded-lg", {
              "bg-gradient-to-r from-[#FE6043] to-[#C27259]": activeIndex !== -1,
            })}
            animate={{
              x: xValue,
              opacity: activeIndex !== -1 ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};
