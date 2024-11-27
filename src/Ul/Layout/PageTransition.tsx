import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PageTransitionProps {
    children: ReactNode;
    
}

const PageTransition: React.FC<PageTransitionProps> = ({ children,  }) => {
    return (
        <AnimatePresence >
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
        >
            {children}
        </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
