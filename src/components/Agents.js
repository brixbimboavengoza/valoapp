import React from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from './useFetch'
import Loading from './common/Loading';

export default () => {
    let navigate = useNavigate();
    const { data: agents, loading, error } = useFetch('https://valorant-api.com/v1/agents')
    if (loading) return <Loading/>
    if (error) console.log(error)
    
    return (
        <div className='agent_lists'>
            {agents?.data.filter(agents => agents.isPlayableCharacter).map(agent =>
                <div className='agent_card' key={agent.uuid} onClick={() => navigate('/agent', { state: { name: agent.displayName , id: agent.uuid } } )}>
                    <div className='agent_info'>
                    <i className='agent_role'> <img className='agent_role_icon' src={agent.role.displayIcon}/> 
                        {agent.role.displayName.toUpperCase()}
                    </i>
                        <div className="agent_content">
                            <h2 className="agent_name">{agent.displayName}</h2>
                            <ul className='agent_ability'>
                                {agent.abilities.slice(0,4).map(ability => 
                                    <li className='abilities' key={ability.displayName}> 
                                        <img className='ability_icon' src={ability.displayIcon}/> 
                                        {ability.displayName}
                                    </li>
                                )}
                            </ul>  
                        </div> 
                    </div>
                    <img className='agent_photo' src={agent.fullPortrait} alt="" />
                </div>
            )}
        </div>
    )
}

// 