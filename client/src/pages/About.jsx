import React from 'react'
import { motion } from 'motion/react'
import Title from '../components/Title'

const About = () => {
    const values = [
        { icon: 'https://cdn-icons-png.flaticon.com/128/3207/3207594.png', title: 'Our Mission', desc: 'To make vehicle rentals accessible, affordable, and effortless for everyone — whether you need a scooter for a quick errand or a truck for a big move.' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/709/709612.png', title: 'Our Vision', desc: 'To become the world\'s most trusted multi-vehicle rental marketplace, connecting vehicle owners with renters seamlessly across every city.' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/3222/3222680.png', title: 'Innovation', desc: 'We leverage technology to simplify every step — from instant bookings to verified owners, secure payments, and 24/7 roadside support.' },
    ]

    const milestones = [
        { year: '2020', event: 'Founded with a vision to democratize vehicle rentals' },
        { year: '2021', event: 'Expanded to 10+ cities with 200+ vehicles' },
        { year: '2023', event: 'Launched multi-vehicle support: bikes, scooters, trucks' },
        { year: '2024', event: 'Reached 10,000+ happy customers and 500+ vehicles' },
        { year: '2025', event: 'Expanding to 50+ cities with AI-powered recommendations' },
    ]

    return (
        <div className='py-20 px-6 md:px-16 lg:px-24 xl:px-32'>

            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center max-w-3xl mx-auto mb-20'
            >
                <Title title="About VehicleRental" subTitle="We're on a mission to transform how people rent vehicles — making mobility simple, safe, and accessible for all." />
            </motion.div>

            {/* Story Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='max-w-4xl mx-auto mb-20'
            >
                <div className='bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Our Story</h2>
                    <p className='text-gray-600 leading-relaxed mb-4'>
                        It started with a simple idea: what if renting any vehicle was as easy as booking a ride? In 2020, our founders — frustrated by the hassle of traditional car rental agencies — set out to build something better.
                    </p>
                    <p className='text-gray-600 leading-relaxed mb-4'>
                        We began with cars, but quickly realized that people needed more than just cars. Commuters needed scooters, travelers needed bikes, businesses needed trucks. So we expanded — becoming a true multi-vehicle rental platform.
                    </p>
                    <p className='text-gray-600 leading-relaxed'>
                        Today, VehicleRental connects thousands of vehicle owners with renters across India. Every vehicle on our platform is verified, insured, and ready to roll. And we're just getting started.
                    </p>
                </div>
            </motion.div>

            {/* Values */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto'>
                {values.map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className='text-center p-8 rounded-2xl border border-borderColor hover:border-primary/30 hover:shadow-lg transition-all duration-300'
                    >
                        <img src={value.icon} alt={value.title} className='w-10 h-10 mb-4 inline-block object-contain' />
                        <h3 className='text-xl font-semibold mb-3'>{value.title}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed'>{value.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Timeline */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='max-w-2xl mx-auto'
            >
                <h2 className='text-2xl font-semibold text-center mb-10'>Our Journey</h2>
                <div className='relative'>
                    <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20'></div>
                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='flex items-start gap-6 mb-8 relative'
                        >
                            <div className='w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 z-10'>
                                <span className='text-xs font-bold text-primary'>{item.year}</span>
                            </div>
                            <div className='pt-2.5'>
                                <p className='text-gray-700'>{item.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
    )
}

export default About
