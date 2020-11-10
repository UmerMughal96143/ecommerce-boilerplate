import React from 'react'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss'

import ImageGallery from 'react-image-gallery';


const GallerImages = () => {

    const images = [
        {
          original: 'https://shinyviewmotors.com/staging-api/public/images/cars/sliders/5d678fb08ed2a.jpg',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://shinyviewmotors.com/staging-api/public/images/cars/sliders/5d678fb08ed2a.jpg',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
    return (
        <div>
           <ImageGallery items={images} autoPlay={true} />
        </div>
    )
}

export default GallerImages
