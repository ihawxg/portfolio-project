import React, { ComponentType, ReactElement } from 'react';
import { motion } from 'framer-motion';

interface MotionWrapProps {
  classNames: string;
}

type WrappedComponentType = ComponentType<any>;
type HOCReturnType = React.FC<MotionWrapProps>;

export const MotionWrap: (Component: WrappedComponentType, classNames?: string) => HOCReturnType = (Component, classNames) => {
    const MotionWrapComponent: HOCReturnType = () => (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component/>
      </motion.div>
    );


  return MotionWrapComponent;
};

