import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { getMapData } from './map_data/mapData';
import { Modal } from 'react-bootstrap';

export default function MapInfo() {

    const [show, setShow] = useState(false);
    const [modalImg, setModalImg] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (src) => {
        setShow(true);
        setModalImg(src)
    }

    const map = useLocation().state.map;
    const mapData = getMapData(map.displayName);
    
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
                <img className='modal-img' src={modalImg} alt="modal_img"/>
            </Modal>
            <div className='map_info'>
                <div className="map_header">
                    <img className='map_header_img' src={map.splash} alt="map_header"/>
                    <h1 className='map_header_title'>{map.displayName}</h1>
                </div>
                <div className="map_detail">
                    <div className="map_container">
                        <span>{mapData.description}</span>
                        <div className="map_images">
                            <img onClick={() => handleShow(mapData.imgUrl)} className='map_img' src={mapData.imgUrl} alt="map_img"/>
                            <img onClick={() => handleShow(map.splash)} className='map_img' src={map.splash}  alt="map_splash"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
