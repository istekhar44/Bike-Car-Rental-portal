import React, { useState } from 'react'
import { motion } from 'motion/react'
import Title from '../components/Title'
import toast from 'react-hot-toast'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // Simulate form submission
        setTimeout(() => {
            toast.success('Message sent successfully! We\'ll get back to you soon.')
            setForm({ name: '', email: '', subject: '', message: '' })
            setLoading(false)
        }, 1000)
    }

    const contactInfo = [
        { icon: '📍', title: 'Address', detail: '1234 Luxury Drive, San Francisco, CA 94107' },
        { icon: '📞', title: 'Phone', detail: '+1 234 567 890' },
        { icon: '✉️', title: 'Email', detail: 'support@vehiclerental.com' },
        { icon: '🕐', title: 'Business Hours', detail: 'Mon - Sat: 9:00 AM - 8:00 PM' },
    ]

    return (
        <div className='py-20 px-6 md:px-16 lg:px-24 xl:px-32'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center mb-16'
            >
                <Title title="Contact Us" subTitle="Have a question or need help? Reach out to our team and we'll get back to you as soon as possible." />
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto'>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='lg:col-span-2 space-y-6'
                >
                    <h2 className='text-2xl font-semibold'>Get in Touch</h2>
                    <p className='text-gray-500'>We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer.</p>

                    <div className='space-y-4 mt-8'>
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                                className='flex items-start gap-4 p-4 rounded-xl bg-light hover:bg-primary/5 transition-colors'
                            >
                                <span className='text-2xl'>{info.icon}</span>
                                <div>
                                    <h3 className='font-medium text-gray-800'>{info.title}</h3>
                                    <p className='text-sm text-gray-500'>{info.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className='lg:col-span-3 space-y-5 p-8 rounded-2xl border border-borderColor shadow-sm'
                >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='flex flex-col'>
                            <label className='text-sm text-gray-600 mb-1.5'>Your Name</label>
                            <input
                                type='text'
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                placeholder='John Doe'
                                className='px-4 py-3 border border-borderColor rounded-lg outline-none focus:border-primary transition-colors text-sm'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm text-gray-600 mb-1.5'>Your Email</label>
                            <input
                                type='email'
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                placeholder='john@example.com'
                                className='px-4 py-3 border border-borderColor rounded-lg outline-none focus:border-primary transition-colors text-sm'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-sm text-gray-600 mb-1.5'>Subject</label>
                        <input
                            type='text'
                            required
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            placeholder='How can we help?'
                            className='px-4 py-3 border border-borderColor rounded-lg outline-none focus:border-primary transition-colors text-sm'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-sm text-gray-600 mb-1.5'>Message</label>
                        <textarea
                            rows={5}
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder='Tell us more about your inquiry...'
                            className='px-4 py-3 border border-borderColor rounded-lg outline-none focus:border-primary transition-colors text-sm resize-none'
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type='submit'
                        disabled={loading}
                        className='w-full bg-primary hover:bg-primary-dull text-white py-3 rounded-lg font-medium transition-colors cursor-pointer disabled:opacity-60'
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </motion.form>
            </div>
        </div>
    )
}

export default Contact
