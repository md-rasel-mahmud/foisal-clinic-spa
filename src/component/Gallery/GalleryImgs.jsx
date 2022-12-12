import { useState } from 'react'


function GalleryImgs(props) {
    let [imgView, setImgView] = useState('d-none');

    let [imgBorder, setImgBorder] = useState('img-border')

    let imgFullView = () =>{
      setImgView('full-screen')

      setImgBorder('img-border');
    }
    let imageClose = () =>{
      setImgBorder('img-border fade-out');

      setTimeout(() => {      
        setImgView('d-none');
      }, 300);
    }

  return (
    <>  
      <div className="gallery-images">
        <img src={props.src} alt="image"/>
        
        <div className="img-overlay d-flex justify-content-center align-items-center h-100">

          <button onClick={imgFullView} className="btn btn-primary text-light">
            <i className='fas fa-expand-arrows-alt'></i>
          </button>

        </div>
      </div>

      <div className={imgView}>
        <div className={imgBorder}>
          <button onClick={imageClose} className="rounded-circle btn-danger text-light">
              <i className='fas fa-times '></i>
          </button>
          <img src={props.src} alt="habijabi" />
        </div>
      </div>
    </>
  );
}

export default GalleryImgs;
