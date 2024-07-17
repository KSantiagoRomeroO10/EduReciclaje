import Styles from './Menu.module.css'

import IconBars from '../../../../Assets/Icons/IconBars'

import { useState } from 'react'

const Menu = () => {

  const [Deployment, SetDeployment] = useState(false)

  const handleClick = () => {
    SetDeployment(!Deployment)
  }

  return(
    <>
      <div className={Styles.IconBars} onClick={() => handleClick()}>
        <IconBars Color='White'/>
      </div>
      <div className={`${Deployment ? Styles.DeploymentOn : Styles.DeploymentOff}`}>
        <ul className={Styles.List}>
          <div className={`${Styles.IconBars} ${Styles.IconBarsOn}`} onClick={() => handleClick()}>
            <IconBars Color='White'/>
          </div>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
        </ul>
      </div>
    </>
  )
}

export default Menu
