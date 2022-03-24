import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Buddies from './Buddies';
import WeaponStats from './subpages/WeaponStats';

export default function WeaponInfo() {
  const w = useLocation();
  //for default description
  const weapon = w.state.weapon;
  // for selected skins
  const [selectedWeapon, setSelectedWeapon] = useState(weapon?.skins.filter(f => f.uuid === weapon.defaultSkinUuid)[0])
  const [selectedBuddyImg, setSelectedBuddyImg] = useState('');
  const img = selectedWeapon.chromas?.[0]?.fullRender;
  // For conditional css
  const [activeSkin, setActiveSkin] = useState();
  const [activeBuddy, setActiveBuddy] = useState();

  const getSelectedBuddy = buddy => {
    setSelectedBuddyImg(buddy.displayIcon);
    setActiveBuddy(buddy.displayName);
  }

  const handleSelected = (s, displayName) => {
    setSelectedWeapon(s)
    setActiveSkin(displayName)
  }

  return (
    <div className='w_info_container'>
      <div className="w_main">
        <h1>{w.state.weapon.displayName}</h1>  
      </div>

      <div className="w_info">
        <img className='buddy' src={selectedBuddyImg} />
        <img className='w_skin_img' src={img} alt="skin_icon" />
      </div>

      <div className="w_skins">
        <h2>{selectedWeapon.displayName}</h2>
        <ul className='w_skin_slider scrollbar'>
          {w.state.weapon.skins.map(s =>
            <li key={s.uuid} onClick={() => handleSelected(s, s.displayName)} > 
                <div className={activeSkin === s.displayName ? 'img_container active_skin' : 'img_container'}>
                  <img className='w_img' src={s.chromas[0].fullRender} alt="skin_fullrender"/>  
                </div>
            </li>  
          )}
        </ul>
      </div>
      <Buddies selectedBuddy={getSelectedBuddy} buddy={activeBuddy} />
      <WeaponStats weapon={weapon} />
    </div>
  )
}
