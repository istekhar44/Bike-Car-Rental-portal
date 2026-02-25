import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const MyBookings = () => {

  const { axios, user, currency } = useAppContext()

  const [bookings, setBookings] = useState([])

  const fetchMyBookings = async () => {
    try {
      const { data } = await axios.get('/api/bookings/user')
      if (data.success) {
        setBookings(data.bookings)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    user && fetchMyBookings()
  }, [user])

  return (
    <div className='min-h-screen'
      style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 30%, #f8fafc 60%, #e0f2fe 100%)' }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-16 max-w-7xl'>

        <Title title='My Bookings'
          subTitle='View and manage all your vehicle bookings'
          align="left" />

        <div className='mt-12 flex flex-col gap-6'>
          {bookings.map((booking, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={booking._id}
              className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300'
              style={{
                background: 'rgba(255, 255, 255, 0.45)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >

              {/* Car Image + Info */}
              <div className='md:col-span-1'>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <img src={booking.car.image} alt="" className='w-full h-auto aspect-video object-cover hover:scale-105 transition-transform duration-500' />
                </div>
                <h3 className='text-lg font-semibold mt-3 text-gray-800'>{booking.car.brand} {booking.car.model}</h3>
                <p className='text-gray-500 text-xs mt-1 flex items-center gap-1.5'>
                  <span className='inline-block w-1.5 h-1.5 rounded-full bg-blue-400'></span>
                  {booking.car.year} • {booking.car.category} • {booking.car.location}
                </p>
              </div>

              {/* Booking Info */}
              <div className='md:col-span-2 flex flex-col justify-center'>

                {/* Header badges */}
                <div className='flex items-center gap-3 mb-5'>
                  <span className='px-3.5 py-1.5 text-xs font-semibold rounded-lg text-blue-700'
                    style={{ background: 'rgba(59, 130, 246, 0.12)' }}>
                    Booking #{index + 1}
                  </span>
                  <span className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg capitalize
                    ${booking.status === 'confirmed'
                      ? 'text-emerald-700'
                      : booking.status === 'pending'
                        ? 'text-amber-700'
                        : 'text-red-700'
                    }`}
                    style={{
                      background: booking.status === 'confirmed'
                        ? 'rgba(16, 185, 129, 0.12)'
                        : booking.status === 'pending'
                          ? 'rgba(245, 158, 11, 0.12)'
                          : 'rgba(239, 68, 68, 0.12)'
                    }}>
                    {booking.status}
                  </span>
                </div>

                {/* Info rows */}
                <div className='space-y-4'>
                  <div className='flex items-start gap-3 p-3 rounded-xl'
                    style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                    <div className='w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                      <img src={assets.calendar_icon_colored} alt="" className='w-4.5 h-4.5' />
                    </div>
                    <div>
                      <p className='text-[11px] font-medium text-gray-400 uppercase tracking-wider'>Rental Period</p>
                      <p className='text-sm font-medium text-gray-800 mt-0.5'>
                        {booking.pickupDate.split('T')[0]}
                        <span className='text-gray-400 mx-2'>→</span>
                        {booking.returnDate.split('T')[0]}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3 p-3 rounded-xl'
                    style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                    <div className='w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                      <img src={assets.location_icon_colored} alt="" className='w-4.5 h-4.5' />
                    </div>
                    <div>
                      <p className='text-[11px] font-medium text-gray-400 uppercase tracking-wider'>Pick-up Location</p>
                      <p className='text-sm font-medium text-gray-800 mt-0.5'>{booking.car.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className='md:col-span-1 flex flex-col justify-center items-end'>
                <div className='text-right p-5 rounded-2xl w-full'
                  style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(99, 102, 241, 0.12))' }}>
                  <p className='text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1'>Total Price</p>
                  <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                    {currency}{booking.price}
                  </h2>
                  <div className='w-full h-px my-3' style={{ background: 'rgba(148, 163, 184, 0.2)' }}></div>
                  <p className='text-xs text-gray-400'>
                    Booked on <span className='text-gray-600 font-medium'>{booking.createdAt.split('T')[0]}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

          {/* Empty State */}
          {bookings.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='text-center py-20 rounded-2xl border border-white/40'
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <p className='text-gray-400 text-lg'>No bookings yet</p>
              <p className='text-gray-400 text-sm mt-2'>Your vehicle reservations will appear here</p>
            </motion.div>
          )}
        </div>

      </motion.div>
    </div>
  )
}

export default MyBookings
