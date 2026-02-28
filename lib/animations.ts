import { Variants } from "framer-motion";

// Spring physics configuration
export const spring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
} as const;

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: spring,
    },
};

// Fade in with stagger for children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Scale and fade in
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: spring,
    },
};

// Slide in from left
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: spring,
    },
};

// Slide in from right
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: spring,
    },
};

// Page transition
export const pageTransition: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
        },
    },
};

// Magnetic button effect (use with mouse position)
export const magneticButton = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: spring,
    },
    tap: {
        scale: 0.95,
    },
};

// Glow effect on hover
export const glowHover = {
    rest: {
        boxShadow: "0 0 0 rgba(139, 92, 246, 0)",
    },
    hover: {
        boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
        transition: {
            duration: 0.3,
        },
    },
};

// Floating animation
export const floating = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Number counter animation
export const counterAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};
