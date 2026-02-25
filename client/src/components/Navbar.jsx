import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const Navbar = () => {

    const { setShowLogin, user, logout, isOwner, axios, setIsOwner } = useAppContext()

    const location = useLocation()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const changeRole = async () => {
        try {
            const { data } = await axios.post('/api/owner/change-role')
            if (data.success) {
                setIsOwner(true)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-white relative transition-all z-50'
            style={{ backgroundColor: '#4863A0' }}>

            <Link to='/' className='flex items-center gap-2'>
                <motion.img whileHover={{ scale: 1.05 }} src={assets.logo} alt="DriveEase" className="h-9" />
            </Link>

            {/* Desktop: no bg (inherits parent). Mobile: solid bg for full-screen menu */}
            <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t max-sm:border-white/20 right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
                style={{ '--mobile-bg': '#4863A0' }}
            >
                {/* Mobile-only background overlay */}
                <style>{`
                    @media (max-width: 639px) {
                        .nav-menu-inner { background-color: #4863A0; }
                    }
                `}</style>

                {menuLinks.map((link, index) => (
                    <Link key={index} to={link.path} className='hover:text-white/80 transition-colors'>
                        {link.name}
                    </Link>
                ))}

                <div className='hidden lg:flex items-center text-sm gap-2 border border-white/30 px-3 rounded-full max-w-56 bg-white/10'>
                    <input type="text" className="py-1.5 w-full bg-transparent outline-none placeholder-white/60 text-white" placeholder="Search vehicles" />
                    <img src={assets.search_icon} alt="search" className='invert' />
                </div>

                <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>

                    <button onClick={() => isOwner ? navigate('/owner') : changeRole()} className="cursor-pointer hover:text-white/80 transition-colors">{isOwner ? 'Dashboard' : 'List vehicles'}</button>

                    <button onClick={() => { user ? logout() : setShowLogin(true) }} className="cursor-pointer px-8 py-2 bg-white hover:bg-white/90 transition-all text-[#4863A0] font-medium rounded-lg">{user ? 'Logout' : 'Login'}</button>
                </div>
            </div>

            <button className='sm:hidden cursor-pointer' aria-label="Menu" onClick={() => setOpen(!open)}>
                <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" className='invert' />
            </button>

        </motion.div>
    )
}

export default Navbar
