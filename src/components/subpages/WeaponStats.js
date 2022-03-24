import React, { useState } from 'react'
import { Slider } from '@mui/material'

export default function WeaponStats({ weapon }) {
    
    const damageRanges = weapon.weaponStats.damageRanges;
    const [range, setRange] = useState(0);
    const [damage, setDamage] = useState(damageRanges[0])

    const updateRange = (e, meter) => {
        setRange(meter)
        const filterRange = damageRanges.filter(d => range <= d.rangeEndMeters)[0];
        setDamage(filterRange)
    }

    return (
        <div className="w_description">
            <div className="wep_stats">
                <h2 style={{ color: 'red', textAlign: 'center'}}>Weapon Stats</h2>
                <div className="w_stats card">
                    <div className='w_stats_item'>
                        <span className='title'>Fire Rate : </span>
                        <span className='value'>{weapon.weaponStats.fireRate} </span>
                    </div>
                    <div className='w_stats_item'>
                        <span className='title'>Magazine Size : </span>
                        <span className='value'>{weapon.weaponStats.magazineSize} </span>
                    </div>
                    <div className="w_stats_item">
                        <span className='title'>Run Speed Multiplier : </span>
                        <span className='value'>{weapon.weaponStats.runSpeedMultiplier} </span>
                    </div>
                    <div className="w_stats_item">
                        <span className='title'>Equip Time Seconds : </span>
                        <span className='value'>{weapon.weaponStats.equipTimeSeconds} </span>
                    </div>
                    <div className="w_stats_item">
                        <span className='title'>Reload Time Seconds : </span>
                        <span className='value'>{weapon.weaponStats.reloadTimeSeconds}</span>
                    </div>
                    <div className="w_stats_item">
                        <span className='title'>Pellet Count : </span>
                        <span className='value'>{weapon.weaponStats.shotgunPelletCount} </span>
                    </div>
                </div>
            </div>

            <div className="wep_dmg">
                <h2 style={{ color: 'red', textAlign: 'center'}}>Damage Ranges</h2>
                <div className="damage_ranges card">
                    <div className="range_slider">
                        <Slider
                            defaultValue={0}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            marks={true}
                            step={10}
                            min={0}
                            max={50}
                            onChange={updateRange}
                        />
                    </div>
                    <span className='damage_meter'>{range} <small style={{ marginLeft: '2px' }}> meters</small></span>
                    <div className="w_stats_item">
                        <span className="title">Head Damage : </span>
                        <span className="value">
                            {(Math.round(damage.headDamage * 100) / 100).toFixed(2)}
                        </span>
                    </div>
                    <div className="w_stats_item">
                        <span className="title">Body Damage : </span>
                        <span className="value">
                            {(Math.round(damage.bodyDamage * 100) / 100).toFixed(2)}
                        </span>
                    </div>
                    <div className="w_stats_item">
                        <span className="title">Leg Damage : </span>
                        <span className="value">
                            {(Math.round(damage.legDamage * 100) / 100).toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
