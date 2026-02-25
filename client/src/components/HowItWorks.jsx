import React from 'react'
import { motion } from 'motion/react'
import Title from './Title'

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Search & Discover',
            desc: 'Browse our wide selection of vehicles. Filter by location, type, and dates to find the perfect ride.',
            icon: 'https://cdn-icons-png.flaticon.com/128/3917/3917754.png',
            color: 'from-blue-500/10 to-blue-600/5',
        },
        {
            number: '02',
            title: 'Book Instantly',
            desc: 'Reserve your vehicle in seconds. Pick your dates, confirm, and you\'re all set — no paperwork needed.',
            icon: 'https://cdn-icons-png.flaticon.com/128/4305/4305512.png',
            color: 'from-green-500/10 to-green-600/5',
        },
        {
            number: '03',
            title: 'Hit the Road',
            desc: 'Pick up your vehicle at the designated location and enjoy your ride. Return it when you\'re done!',
            icon: 'https://cdn-icons-png.flaticon.com/128/3930/3930846.png',
            color: 'from-purple-500/10 to-purple-600/5',
        },
    ]

    return (
        <div className='py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-light'>
            <Title title="How It Works" subTitle="Renting a vehicle has never been easier. Just three simple steps to get moving." />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto relative'>
                {/* Connecting line (visible on md+) */}
                <div className='hidden md:block absolute top-20 left-[17%] right-[17%] h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200'></div>

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='flex flex-col items-center text-center relative'
                    >
                        {/* Step Circle */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-md relative z-10 bg-white border-2 border-white`}
                        >
                            <img src={step.icon} alt={step.title} className='w-10 h-10 object-contain' />
                        </motion.div>

                        {/* Step Number */}
                        <span className='text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3'>
                            STEP {step.number}
                        </span>

                        <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed max-w-64'>{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default HowItWorks
