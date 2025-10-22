import React from 'react'
import LightGallery from 'lightgallery/react';

import './Css/Gallery.css'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryComp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className='max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10'>
            <div className=''>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
                    Galleri Kami
                </h2>
                <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
            </div>

            <div className="App">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    <a href="/101.jpg">
                        <img alt="img1" src="/101.jpg" />
                    </a>
                    <a href="/118.jpg">
                        <img alt="img2" src="/118.jpg" />
                    </a>
                    <a href="/123.jpg">
                        <img alt="img2" src="/123.jpg" />
                    </a>
                    <a href="/128.jpg">
                        <img alt="img2" src="/128.jpg" />
                    </a>
                    <a href="/131.jpg">
                        <img alt="img2" src="/131.jpg" />
                    </a>
                    <a href="/106.jpg">
                        <img alt="img2" src="/106.jpg" />
                    </a>
                    <a href="/108.jpg">
                        <img alt="img2" src="/108.jpg" />
                    </a>
                    <a href="/129.jpg">
                        <img alt="img2" src="/129.jpg" />
                    </a>
                    <a href="/146.jpg">
                        <img alt="img2" src="/146.jpg" />
                    </a>
                </LightGallery>
            </div>
        </div>
    )
}

export default GalleryComp
