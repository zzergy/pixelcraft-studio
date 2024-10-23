import React, { useEffect, useState, ReactNode } from "react";
import styles from "./FloatingPixelsBackground.module.scss";

interface PixelProps {
  size: number;
  duration: number;
  top: number;
  left: number;
}

interface FloatingPixelsBackgroundProps {
  children: ReactNode;
}

const Pixel = ({ size, duration, top, left }: PixelProps) => {
  const style: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    backgroundColor: "#4148ff",
    animation: `${styles.float} ${duration}s linear infinite`,
  };

  return <div style={style}></div>;
};

const FloatingPixelsBackground = ({
  children,
}: FloatingPixelsBackgroundProps) => {
  const [pixels, setPixels] = useState<PixelProps[]>([]);

  useEffect(() => {
    const generatePixels = () => {
      const newPixels: PixelProps[] = [];

      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 40 + 10;
        const duration = Math.random() * 100 + 50;
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        newPixels.push({
          size,
          duration,
          top,
          left,
        });
      }

      setPixels(newPixels);
    };

    generatePixels();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        {pixels.map((pixel, key) => (
          <Pixel key={key} {...pixel} />
        ))}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FloatingPixelsBackground;
