import React from 'react'
import UseForm from '../../commons/UseForm';
import BuyerCompany from './BuyerCompany'

const SalerCompany =()=>{
   
    const {inputs, handleInputChange} = UseForm({seller_name:'Habtamu Asfaw Tegegni',
    address:'A/A S/C N/S LAFTO W.06 ILNO NEW',specific_addres:"AROUND GOFA NEAR TO ABAY BANK",
    tin_no:'TIN.0058676867',phone:'TEL. 0923644545/0912454545'}); 
    return <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <form style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>
            <input style={{fontSize:25,fontWeight:'bold',border:'none'}} 
                name="seller_name" 
                onChange={handleInputChange}
                placeholder="Seller company name" 
                value={inputs.seller_name}
             />

            <input style={{border:'none',width:'100%'}}
                placeholder="Address" 
                onChange={handleInputChange}
                name="address"
                value={inputs.address}
            />

            <input style={{border:'none',width:'100%'}}
                placeholder="Specific address" 
                onChange={handleInputChange}
                name="specific_addres"
                value={inputs.specific_addres}
            />

            <input style={{border:'none',width:'100%'}}
                placeholder="Tin no" 
                onChange={handleInputChange}
                name="tin_no"
                value={inputs.tin_no}
            />
            <input style={{border:'none',width:'100%'}}
                placeholder="Telephone" 
                onChange={handleInputChange}
                name="phone"
                value={inputs.phone}
            />
        </form>
       <BuyerCompany sellerData={inputs}/>
    </div>
}

export default SalerCompany