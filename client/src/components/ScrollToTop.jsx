import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300)
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className='fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary hover:bg-primary-dull text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors'
                    aria-label='Scroll to top'
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTop
