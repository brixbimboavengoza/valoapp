import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from './useFetch';
import Loading from './common/Loading';
import { HiChevronDoubleRight } from "react-icons/hi";
import YoutubeEmbed from './common/YoutubeEmbed';
import { getVideo } from './common/AgentVideo';
import { v4 as uuidv4 } from 'uuid';


function Agent() {
  const data = useLocation();
  const { data: agent, loading, error } = useFetch(`https://valorant-api.com/v1/agents/${data.state.id}`)
  if (loading) return <Loading/>
  if (error) console.log(error)

  const video = getVideo(agent.data.displayName);

  return (
    <div className='single_agent_info'>
        <div className='single_agent_header'>
            <img className='single_agent_background' src={agent.data.background} alt="" />
            <img className='single_agent_img' src={agent.data.fullPortrait} />
        </div>

        <div className="single_agent_body">
          <div className="agent_header">
            <div className="single_agent_role">
              <div className="role_type">
                <img className='img_red' src={agent.data.role.displayIcon} />
              <h3 className='role_name'>{agent.data.role.displayName.toUpperCase()}</h3>
              </div>
              <div className="description">
                <p>{agent.data.role.description}</p>
              </div>
            </div>

            <div className="agent_description">
              <h3>BIOGRAPHY</h3>
              <span>{agent.data.description}</span>
            </div>
          </div>

          <div className="abilities">
            {agent.data.abilities.sort((a, b) => a.slot.localeCompare(b.slot)).map(ability =>
                <div className="ability item" key={ability.displayName}>
                    <h3><HiChevronDoubleRight/>{ability.slot.toUpperCase()}</h3>
                    <div className="ability_type">
                      <img className='img_red' src={ability.displayIcon}/>
                          <span>{ability.displayName.toUpperCase()}</span>
                    </div>
                    { video.ability.filter(va => va.abilityName === ability.slot).map(vaEmbed => 
                      <div className="description" key={uuidv4()}>
                        <p>{ability.description}</p>
                        <YoutubeEmbed embedId={vaEmbed.embedId}/>
                      </div>
                    )}
                </div>  
              )}
          </div>

        </div>
        

    </div>
  )
}

export default Agent





// <div className="ability item" key={ability.displayName}>
//     <h3><HiChevronDoubleRight/> {ability.slot.toUpperCase()}</h3>
//     <div className="ability_type">
//       <img className='img_red' src={ability.displayIcon}/>
//           <span>{ability.displayName.toUpperCase()}</span>
//     </div>
//     <div className="description">
//       <p>{ability.description}</p>
//       <YoutubeEmbed embedId="" />
//     </div>
// </div>    