import React from 'react'
import './Homepage.css'
import group from '../Assets/group.png'
import logo from '../Assets/logo.png'

const Homepage = () => {
  return (
    <div className='container'>
      <div className='header'>
        <img className="sydc_logo" src={logo} alt="Logo" />
        <p className='header_name'>SYDC</p>
      </div>

      <div>
        <p className='full_form'>Shamati Youth Development Club</p>
        <img className='group_photo' src={group} alt="Group" />
        <div className='description'>
          <p><strong>Established:</strong> 2082/02/24 B.S.</p>
          <p><strong>Location:</strong> Gaindakot-5, Nawalparasi, Nepal</p>
          <p>
            The Shamati Youth Development Club (SYDC) was founded by a group of 11 passionate and energetic youth with a shared vision to serve society and uplift their community. These young individuals came together to form a club rooted in purpose, positivity, and progress.
          </p>
          <p>
            SYDC is built on the pillars of youth empowerment, creativity, and community service. The club actively works to develop the skills of young people, guide them toward the right path, and create a strong sense of responsibility, discipline, and leadership among its members.
          </p>
          <p>
            Driven by the belief that youth are the backbone of a better future, SYDC organizes various programs including awareness campaigns, skill-building workshops, volunteer work, and social initiatives to bring about real change.
          </p>
          <p>
            With energy, power, and a commitment to new creation, the Shamati Youth Development Club continues to be a beacon of hope and transformation for Gaindakot and beyond.
          </p>
        </div>
        <div>
          <h3 className='Activities'>Activities: </h3>
        </div>
      </div>
    </div>
  )
}

export default Homepage
