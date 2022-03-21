import React from 'react'
import Socials from '../components/Socials'

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navigation__logo">
        <span>logo</span>
      </div>

      <div className="navigation__menu">
        <div className="navigation__menu-items">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="menu-socials">
          <Socials />
        </div>
      </div>

      {/* <div className="navigation__socials">
        <Socials />
      </div> */}

    </div>
  )
}

export default Navigation