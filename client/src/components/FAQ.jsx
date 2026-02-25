import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Title from './Title'

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className='border border-borderColor rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30'>
        <button
            onClick={onClick}
            className='w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50/50 transition-colors'
        >
            <span className='font-medium text-gray-800 pr-4'>{question}</span>
            <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className='text-2xl text-primary flex-shrink-0 leading-none'
            >
                +
            </motion.span>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <p className='px-5 pb-5 text-gray-500 text-sm leading-relaxed'>{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
)

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const faqs = [
        {
            question: 'What types of vehicles can I rent?',
            answer: 'We offer a wide range of vehicles including cars (sedans, SUVs, hatchbacks), bikes, scooters, trucks, buses, and vans. Whatever your transportation need, we have you covered!'
        },
        {
            question: 'How do I book a vehicle?',
            answer: 'Simply search for available vehicles in your desired location, select your pickup and return dates, choose a vehicle, and click "Book Now." You\'ll receive a confirmation instantly.'
        },
        {
            question: 'What documents do I need to rent?',
            answer: 'You\'ll need a valid driving license appropriate for the vehicle type, a government-issued ID, and a valid payment method. International renters may need an International Driving Permit.'
        },
        {
            question: 'Is insurance included in the rental?',
            answer: 'Yes! All our rentals come with basic insurance coverage. We also offer premium insurance options for additional peace of mind at a small extra cost.'
        },
        {
            question: 'Can I cancel or modify my booking?',
            answer: 'Absolutely. You can cancel or modify your booking up to 24 hours before the pickup time for a full refund. Late cancellations may be subject to a small fee.'
        },
        {
            question: 'How do I list my vehicle for rental?',
            answer: 'Click the "List Your Vehicle" button in the navbar, complete the registration process, add your vehicle details and photos, set your pricing, and start earning! We handle insurance and payment security.'
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept all major credit/debit cards, UPI, net banking, and digital wallets. All payments are processed securely through our encrypted payment gateway.'
        },
        {
            question: 'What if the vehicle breaks down during my rental?',
            answer: 'Don\'t worry! Our 24/7 roadside assistance team is just a call away. We\'ll arrange for a replacement vehicle or help you get back on the road as quickly as possible.'
        },
    ]

    return (
        <div className='py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
            <Title title="Frequently Asked Questions" subTitle="Got questions? We've got answers. Find everything you need to know about renting with us." />

            <div className='max-w-3xl mx-auto mt-16 flex flex-col gap-3'>
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <FAQItem
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default FAQ
