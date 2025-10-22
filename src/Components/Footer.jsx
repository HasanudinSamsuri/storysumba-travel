import React from 'react'
import footer from '../assets/footer-logo.png'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-10'
            style={{
                backgroundImage: `url(${footer})`,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover'
            }}>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    <div>
                        <h1 className='font-bold text-4xl mb-4'><span className='text-red-500'>Story</span>Sumba</h1>
                        <p className='text-sm'>Kami berdedikasi untuk mewujudkan impian perjalanan Anda dengan tur yang disusun secara ahli dan pengalaman yang tak terlupakan.</p>
                    </div>
                    <div className='flex flex-col lg:items-center'>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-2 text-sm'>
                            <li><a href="#" className='hover:underline'>Home</a></li>
                            <li><a href="#" className='hover:underline'>Destinations</a></li>
                            <li><a href="#" className='hover:underline'>Tours</a></li>
                            <li><a href="#" className='hover:underline'>About Us</a></li>
                            <li><a href="#" className='hover:underline'>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Kontak Kami</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>123 Travel Street, City, Country</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Email: info@storysumba.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Ikuti Kami</h3>
                        <div className='flex space-x-4 '>
                            <FaFacebook className='hover:text-red-500' />
                            <FaInstagram className='hover:text-red-500' />
                            <FaTwitter className='hover:text-red-500' />
                            <FaTiktok className='hover:text-red-500' />
                        </div>
                    </div>
                </div>
                <div className='mt-8 pt-8 border-t border-gray-700 text-center justify-end text-sm'>
                    <p>&copy; {new Date().getFullYear()} Mahaka Attraction. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
