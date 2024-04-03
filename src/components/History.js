import React from 'react';
import WorkHistory from './WorkHistory';
import './History.css';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './AnimationVariations';

export default function Jobs() {

    
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
            <WorkHistory />
        </motion.div>
    )
};