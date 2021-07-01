import React from 'react'
import SalerCompany from './widgets/SalerCompany'
import BuyerCompany from './widgets/BuyerCompany'
const Header =()=>{
    return <div style={{display:'flex',flexDirection:'column'}}>
        <SalerCompany/>
        <BuyerCompany/>
    </div>
}

export default Header