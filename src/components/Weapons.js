import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import Loading from './common/Loading';

function Weapons() {
  const navigate = useNavigate();
  const { data: wep, loading, error } = useFetch('https://valorant-api.com/v1/weapons')
  if (loading) return <Loading/>
  if (error) console.log(error)

  const melee = wep.data.filter(w => w.displayName === 'Melee')

  return (
    <div className='weapon_lists'>
      {wep?.data.filter(w => w.displayName !== 'Melee').map(weapon => 
        <div className='weapon_lists_container' key={weapon.uuid} 
          onClick={() => navigate(`/weapon-info/${weapon.displayName.toLowerCase()}`, { state: { weapon: weapon }})}>
          <div className="weapon_img_container">
            <img className='weapon_img' src={weapon.displayIcon} alt="wep_img" />
          </div>
          <div className="weapon_name_container">
            <h3 className='weapon_name'>{weapon.displayName}</h3>  
          </div>
        </div>
      )}
        <div className='weapon_lists_container' onClick={() => navigate('/weapon-info/melee/', { state: { weapon: melee }})}>
          <div className="weapon_img_container">
            <img className='weapon_img' src={melee[0].displayIcon} alt="wep_icon"/>
          </div>
          <div className="weapon_name_container">
            <h3 className='weapon_name'>Melee</h3>  
          </div>
        </div>
    </div>
  )
}

export default Weapons

