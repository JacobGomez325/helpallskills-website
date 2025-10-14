'use client';

import { useLottie, LottieOptions } from 'lottie-react';
import { motion } from 'framer-motion';

interface LottieComponentProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const LottieComponent = ({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
}: LottieComponentProps) => {
  const options: LottieOptions = {
    animationData,
    loop,
    autoplay,
  };

  const { View } = useLottie(options);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
      style={style}
    >
      {View}
    </motion.div>
  );
};

export default LottieComponent; 