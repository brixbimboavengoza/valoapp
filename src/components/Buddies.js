import React, { useState } from 'react'
import useFetch from './useFetch';
import Loading from './common/Loading';

export default function Buddies({selectedBuddy, buddy}) {
    const { data, loading, error } = useFetch('https://valorant-api.com/v1/buddies')
    const buddies = data?.data
    const [selectedBuddyImg, setSelectedBuddyImg] = useState();
    if (loading) return <Loading/>
    if (error) console.log(error)
    
    return (
        <div className='w_buddies'>
            <h2>{buddy? buddy : 'Buddies'}</h2>
            <ul className='w_buddies_slider scrollbar'>
                {buddies.map(b => 
                    <li key={b.uuid} onClick={() => selectedBuddy(b)}>
                        <div className={buddy === b.displayName ? 'img_container img_buddies active_skin' : 'img_container img_buddies'}>
                            <img src={b.displayIcon}/>    
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}