import React from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import Loading from './common/Loading';

function Maps() {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch('https://valorant-api.com/v1/maps');
  if (loading) return <Loading/>
  if (error) console.log(error)

  const maps = data?.data;
  return (
    <div className='maps'>
      {maps.filter(f => f.displayName !== 'The Range').map(m => 
        <div key={m.uuid} className="map_item" onClick={() => navigate(`/map-info/${m.displayName}`, { state: { map: m }})}>
          <img className='map_img' src={m.splash} alt="map_displayIcon" />
          <div className="title_container">
            <h1 className='map_title'>{m.displayName}</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default Maps