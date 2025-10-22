import React from 'react'
import TopBanner from '../Components/TopBanner'
import trip from '../assets/trip.gif'
import time from '../assets/fire-time.gif'
import price from '../assets/best-price.gif'

const About = () => {
  return (
    <div>
      <TopBanner text='About' />
      <div className='max-w-7xl mx-auto my-10'>
        <div className='flex flex-col md:flex-row px-4 md:px-0 gap-4'>
          <div className='flex-1'>
            <div className='relative'>
              <img src="/hiace2.png" alt="travel" className='rounded-lg' />
              <div className='absolute bottom-[78%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg'>
                HOW WE ARE BEST <br /> FOR TRAVEL!
              </div>

            </div>
            <h1 className='md:text-4xl font-bold mt-6 mb-4 text-3xl'>Bagaimana Kami Menjadi yang Terbaik untuk Tour & Travel!</h1>
            <p className='text-gray-500'>Kami berkomitmen penuh terhadap pelayanan, kenyamanan dan kepuasan wisatawan yang ingin menikmati keindahan pulau sumba, Kami menyediakan semua kebutuhan yang diperlukan selama trip dan Dengan fasilitas armada Hiace terbaru 2025 dan fasilitas pendukung lainnya kami menjamin perjalanan anda aman, nyaman dan berkesan.</p>
          </div>
          <div className='flex-1'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex flex-col md:flex-row items-start mb-4'>
                <img src={trip} alt="" className='w-20' />
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1'>10+ Destinasi</h2>
                  <p className='text-gray-700 ml-2 lg:mr-28'> kami sudah bekerja sama dengan beberapa tempat wisata, hotel, restauran dan tempat menarik lainnya yang bisa dikunjungi.</p>
                </div>
              </div>

            </div>
            <div className='bg-white p-6 my-4 rounded-lg shadow-md'>
              <div className='flex flex-col md:flex-row items-start mb-4'>
                <img src={price} alt="" className='w-20' />
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1'>Best Price</h2>
                  <p className='text-gray-700 ml-2 lg:mr-28'>Kami menawarkan pengalaman perjalanan terbaik dengan layanan prioritas dengan harga yang terjangkau.</p>
                </div>
              </div>

            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex flex-col md:flex-row items-start mb-4'>
                <img src={time} alt="" className='w-20' />
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1'>Super Fast Booking</h2>
                  <p className='text-gray-700 ml-2 lg:mr-28'>Dengan fasilitas dan fitu yang kami miliki kami bisa memberikan layanan yang cepat dan mudah</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
