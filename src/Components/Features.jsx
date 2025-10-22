import React from 'react'
import { Plane, Hotel, Map, Camera, Headphones, Shield, Bus, Backpack, HeartHandshake } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Plane className="h-8 w-8 mb-2 text-primary" />,
      title: "Layanan antar jemput bandara",
      description: "Kami siap 24 jam melayani penjemputan dan pengantara dari dan ke bandara Tambulaka dan waingapu"
    },
    {
      icon: <Bus className="h-8 w-8 mb-2 text-primary" />,
      title: "Armada Terbaru",
      description: "Dengan armada Hiace terbaru 2025 dan fasilitas didalamya kami memberikan kenyamanan selama perjalanan anda"
    },
    {
      icon: <Hotel className="h-8 w-8 mb-2 text-primary" />,
      title: "Akomodasi Terbaik",
      description: "Kami bekerjasama dengan Hotel dan Restaurant terbaik yang ada dipulau sumba."
    },
    {
      icon: <Backpack className="h-8 w-8 mb-2 text-primary" />,
      title: "Paket Tours",
      description: "Kami memiliki beberapa paket tour yang bisa menjadi pilihan jadwal liburan anda."
    },
    {
      icon: <Map className="h-8 w-8 mb-2 text-primary" />,
      title: "Destinasi",
      description: "Lebih dari 10 destinasi wisata di setiap pilihan paket tour yang kami berikan kepada anda"
    },
    {
      icon: <HeartHandshake className="h-8 w-8 mb-2 text-primary" />,
      title: "Hospitality",
      description: "Dengan keramahan dan pengalaman staff dan driver yang kami miliki, perjalanan anda akan semakin sempurna"
    }
  ]
  return (
    <section className='pyy-12 md:py-20'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            Mengapa Memilih Layanan Perjalanan Kami
          </h2>
          <p className='mt-4 text-muted-foreground md:text-xl'>Fasilitas terbaik yang membuat perjalanan Anda bersama kami luar biasa</p>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <div key={index} className='transition-all bg-red-50 border rounded-lg hover:shadow-lg'>
              <div className='p-6 text-center'>
                {feature.icon}
                <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                <p className='text-muted-foreground'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
