import React, {useState} from 'react'
import useFetch from './useFetch';
import Loading from './common/Loading';
import { Modal } from 'react-bootstrap';

export default function Bundles() {
  const { data, loading, error } = useFetch('https://valorant-api.com/v1/bundles')
  const [show, setShow] = useState(false);
  const [modalImg, setModalImg] = useState('');
  
  const bundles = data?.data;
  const handleClose = () => setShow(false);
  const handleShow = (e, src) => {
    e.preventDefault();
    setShow(true);
    setModalImg(src)
  }

  return (
    <>
    <Modal
      show={show} 
      onClick={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <span>close</span>
        <img className='bundle-img' src={modalImg} />
    </Modal>
    <div className='bundles'>
      {bundles?.filter(i => i.verticalPromoImage !== null).map(b =>
        <div key={b.uuid} className="bundle_card" onClick={(e) => handleShow(e, b.displayIcon)}>
          <h5 className='bundle_title'>{b.displayName}</h5>
          <img className='bundle_img' src={b.verticalPromoImage}/>
        </div>
      )}
    </div>
    </>
  )
}
