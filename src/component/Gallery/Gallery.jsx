import galleryImg_1 from '../../assets/images/gallery-1.jpg'
import galleryImg_2 from '../../assets/images/gallery-2.jpg'
import galleryImg_3 from '../../assets/images/gallery-3.jpg'
import galleryImg_4 from '../../assets/images/gallery-4.jpg'
import galleryImg_5 from '../../assets/images/gallery-5.jpg'
import galleryImg_6 from '../../assets/images/card-1.jpg'

import GalleryImgs from './GalleryImgs'

function Gallery(props) {

  return (
    <section id="gallery" class="py-4">
    <div class="container">
      <div class="row">
        <h1 class="text-center text-light mb-5 ">Gallery</h1>
      </div>

      <div class="row gallery-imgs gap-3 mb-4 d-flex justify-content-center align-items-center flex-wrap">
        
        <GalleryImgs src={galleryImg_1} />
        <GalleryImgs src={galleryImg_2} />
        <GalleryImgs src={galleryImg_3} />
        <GalleryImgs src={galleryImg_4} />
        <GalleryImgs src={galleryImg_5} />
        <GalleryImgs src={galleryImg_6} />
      </div>

    </div>
  </section>
  );
}

export default Gallery;
