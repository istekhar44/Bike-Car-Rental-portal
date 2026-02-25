import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react';

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mt-60 text-sm text-white'
            style={{ backgroundColor: '#4863A0' }}>

            <div className='px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='flex flex-wrap justify-between items-start gap-8 pb-10 border-b border-white/20'>

                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='flex items-center gap-2'>
                            <img src={assets.logo} alt="DriveEase" className='h-9' />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='max-w-80 mt-4 text-white/70 leading-relaxed'>
                            Premium vehicle rental service — cars, bikes, scooters, trucks & more — for all your transportation needs.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='flex items-center gap-4 mt-6'>
                            <a href="#" className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300'>
                                <img src={assets.facebook_logo} className='w-4 h-4 invert' alt="Facebook" />
                            </a>
                            <a href="#" className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300'>
                                <img src={assets.instagram_logo} className='w-4 h-4 invert' alt="Instagram" />
                            </a>
                            <a href="#" className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300'>
                                <img src={assets.twitter_logo} className='w-4 h-4 invert' alt="Twitter" />
                            </a>
                            <a href="#" className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300'>
                                <img src={assets.gmail_logo} className='w-4 h-4 invert' alt="Email" />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='flex flex-wrap justify-between w-1/2 gap-8'>

                        <div>
                            <h2 className='text-base font-semibold text-white uppercase tracking-wide'>Quick Links</h2>
                            <ul className='mt-4 flex flex-col gap-2.5'>
                                <li><a href="/" className='text-white/70 hover:text-white transition-colors'>Home</a></li>
                                <li><a href="/cars" className='text-white/70 hover:text-white transition-colors'>Browse Vehicles</a></li>
                                <li><a href="/about" className='text-white/70 hover:text-white transition-colors'>About Us</a></li>
                                <li><a href="/contact" className='text-white/70 hover:text-white transition-colors'>Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-base font-semibold text-white uppercase tracking-wide'>Resources</h2>
                            <ul className='mt-4 flex flex-col gap-2.5'>
                                <li><a href="#" className='text-white/70 hover:text-white transition-colors'>Help Center</a></li>
                                <li><a href="#" className='text-white/70 hover:text-white transition-colors'>Terms of Service</a></li>
                                <li><a href="#" className='text-white/70 hover:text-white transition-colors'>Privacy Policy</a></li>
                                <li><a href="#" className='text-white/70 hover:text-white transition-colors'>Insurance</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-base font-semibold text-white uppercase tracking-wide'>Contact</h2>
                            <ul className='mt-4 flex flex-col gap-2.5 text-white/70'>
                                <li>1234 Luxury Drive</li>
                                <li>San Francisco, CA 94107</li>
                                <li>+1 234 567890</li>
                                <li>info@driveease.com</li>
                            </ul>
                        </div>

                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-white/60'>
                    <p>© {new Date().getFullYear()} DriveEase. All rights reserved.</p>
                    <ul className='flex items-center gap-4'>
                        <li><a href="#" className='hover:text-white transition-colors'>Privacy</a></li>
                        <li className='text-white/30'>|</li>
                        <li><a href="#" className='hover:text-white transition-colors'>Terms</a></li>
                        <li className='text-white/30'>|</li>
                        <li><a href="#" className='hover:text-white transition-colors'>Cookies</a></li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Footer
