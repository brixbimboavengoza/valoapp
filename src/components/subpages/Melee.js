import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'

export default function Melee() {
    const w = useLocation();
    const weapon = w.state.weapon?.[0];

    const [selectedMelee, setSelectedMelee] = useState(weapon?.skins.filter(f => f.uuid === weapon.defaultSkinUuid)[0]);
    const img = selectedMelee.chromas?.[0]?.fullRender;
    return (
        <div className='w_info_container melee_container'>
            <div className="w_main">
                <h1>{weapon.displayName}</h1>  
            </div>

            <div className="w_info">
                {/* <img className='buddy' src={selectedBuddyImg}/> */}
                <img className='w_skin_img' src={img} />
            </div>

            <div className="w_skins">
                <h2>{selectedMelee.displayName}</h2>
                <ul className='w_skin_slider scrollbar'>
                {weapon.skins.map(s =>
                    <li key={s.uuid} onClick={() => setSelectedMelee(s)} > 
                        <div className={selectedMelee.displayName === s.displayName ? 'img_container active_skin' : 'img_container'} onClick={() => console.log(s.displayName)}>
                        <img className='w_img melee_skins' src={s.chromas[0].fullRender} />  
                        </div>
                    </li>  
                )}
                </ul>
            </div>
        </div>
    )
}
