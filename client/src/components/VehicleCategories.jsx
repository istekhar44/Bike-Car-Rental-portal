import React from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import Title from './Title'

const VehicleCategories = () => {
    const navigate = useNavigate()

    const categories = [
        { name: 'Cars', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Car_icon_transparent.png?20161202141638', desc: 'Sedans, SUVs, Hatchbacks & more', bg: 'from-blue-50 to-blue-100', border: 'hover:border-blue-400' },
        { name: 'Bikes', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Enduro_sign.png/640px-Enduro_sign.png', desc: 'Sport bikes, Cruisers & Touring', bg: 'from-red-50 to-red-100', border: 'hover:border-red-400' },
        { name: 'Scooters', icon: 'https://cdn-icons-png.flaticon.com/128/9830/9830523.png', desc: 'Perfect for city commuting', bg: 'from-green-50 to-green-100', border: 'hover:border-green-400' },
        { name: 'Trucks', icon: 'https://cdn-icons-png.flaticon.com/128/3774/3774981.png', desc: 'Pickups & Heavy-duty trucks', bg: 'from-amber-50 to-amber-100', border: 'hover:border-amber-400' },
        { name: 'Buses', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Indian_Election_Symbol_Bus.png/640px-Indian_Election_Symbol_Bus.png', desc: 'Mini buses & Coach rentals', bg: 'from-purple-50 to-purple-100', border: 'hover:border-purple-400' },
        { name: 'Vans', icon: 'https://cdn-icons-png.flaticon.com/128/2590/2590498.png', desc: 'Cargo vans & Passenger vans', bg: 'from-teal-50 to-teal-100', border: 'hover:border-teal-400' },
    ]

    return (
        <div className='py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
            <Title title="Vehicle Categories" subTitle="From two-wheelers to heavy-duty trucks — we have the right vehicle for every need." />

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mt-16'>
                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        onClick={() => { navigate('/cars'); scrollTo(0, 0) }}
                        className={`flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br ${cat.bg} border-2 border-transparent ${cat.border} cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md`}
                    >
                        <img src={cat.icon} alt={cat.name} className='w-12 h-12 mb-3 object-contain' />
                        <h3 className='font-semibold text-gray-800'>{cat.name}</h3>
                        <p className='text-xs text-gray-500 mt-1 leading-tight'>{cat.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default VehicleCategories
