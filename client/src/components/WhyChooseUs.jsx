import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Title from './Title'

const CountUp = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [started])

    useEffect(() => {
        if (!started) return
        let startTime = null
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [started, end, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

const WhyChooseUs = () => {
    const stats = [
        { value: 500, suffix: '+', label: 'Vehicles Available', icon: 'https://cdn-icons-png.flaticon.com/128/3774/3774278.png' },
        { value: 10, suffix: 'k+', label: 'Happy Customers', icon: 'https://cdn-icons-png.flaticon.com/128/1791/1791961.png' },
        { value: 50, suffix: '+', label: 'Cities Covered', icon: 'https://cdn-icons-png.flaticon.com/128/1598/1598431.png' },
        { value: 24, suffix: '/7', label: 'Customer Support', icon: 'https://cdn-icons-png.flaticon.com/128/3062/3062634.png' },
    ]

    const benefits = [
        { title: 'Wide Selection', desc: 'Cars, bikes, scooters, trucks & more — find the perfect ride for any occasion.', icon: 'https://cdn-icons-png.flaticon.com/128/2736/2736918.png' },
        { title: 'Best Prices', desc: 'Competitive pricing with no hidden fees. Pay only for what you use.', icon: 'https://cdn-icons-png.flaticon.com/128/2489/2489756.png' },
        { title: 'Verified Owners', desc: 'Every vehicle owner is verified for your safety and peace of mind.', icon: 'https://cdn-icons-png.flaticon.com/128/7595/7595571.png' },
        { title: 'Easy Booking', desc: 'Book in seconds with our simple, hassle-free reservation process.', icon: 'https://cdn-icons-png.flaticon.com/128/3917/3917019.png' },
        { title: 'Insurance Covered', desc: 'All rentals come with comprehensive insurance for a worry-free experience.', icon: 'https://cdn-icons-png.flaticon.com/128/2642/2642502.png' },
        { title: 'Flexible Cancellation', desc: 'Plans changed? Cancel or modify your booking with ease.', icon: 'https://cdn-icons-png.flaticon.com/128/4205/4205539.png' },
    ]

    return (
        <div className='py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
            <Title title="Why Choose Us" subTitle="We provide the best vehicle rental experience with unmatched quality, service, and value." />

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto'>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-all duration-300'
                    >
                        <img src={stat.icon} alt={stat.label} className='w-8 h-8 mb-2 object-contain' />
                        <h3 className='text-3xl font-bold text-primary'>
                            <CountUp end={stat.value} suffix={stat.suffix} />
                        </h3>
                        <p className='text-gray-500 text-sm mt-1'>{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Benefit Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='group p-6 rounded-xl border border-borderColor hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 cursor-default'
                    >
                        <img src={benefit.icon} alt={benefit.title} className='w-8 h-8 group-hover:scale-110 inline-block transition-transform duration-300' />
                        <h3 className='text-lg font-semibold mt-3 group-hover:text-primary transition-colors'>{benefit.title}</h3>
                        <p className='text-gray-500 text-sm mt-2 leading-relaxed'>{benefit.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUs
