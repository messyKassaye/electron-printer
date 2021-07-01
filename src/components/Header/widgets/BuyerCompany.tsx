import React, { useEffect } from 'react'
import UseForm from '../../commons/UseForm';
import Tables from '../../Tables/Tables'
const BuyerCompany =(props:any)=>{
    const seller_data = props.sellerData
    const {inputs, handleInputChange} = UseForm({bill_to:'',
    buyer_tin_no:'',buyer_address:"",
    date:'',reference:'',fsno:'',station:'',stage:''}); 

    useEffect(()=>{
        
    },[])
    return <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontWeight:'bold',fontSize:25,textAlign:'center',marginBottom:25}}>Case Sales Attachment</span>
        <form style={{display:"flex",flexDirection:'row',justifyContent:'space-between',marginBottom:25}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
               <span style={{padding:5,border:'1px solid grey',width:250}}>Bill to</span>
               <input name={'bill_to'} onChange={handleInputChange} value={inputs.bill_to} placeholder={'Bill to'} style={{width:400,marginLeft:5}}/>
            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
               <span style={{padding:5,border:'1px solid grey',width:250}}>Tin no</span>
               <input name="buyer_tin_no" onChange={handleInputChange} value={inputs.buyer_tin_no} placeholder={'Buyer tin no'} style={{width:400,marginLeft:5}}/>
            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
               <span style={{padding:5,border:'1px solid grey',width:250}}>Address</span>
               <input name="buyer_address" onChange={handleInputChange} value={inputs.buyer_address} placeholder={'Buyer address'} style={{width:400,marginLeft:5}}/>
            </div>
            </div>

            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                    <span style={{padding:5,border:'1px solid grey',width:250}}>Date</span>
                    <input name="date" onChange={handleInputChange} value={inputs.date} placeholder={'Date'} style={{width:200,marginLeft:5}}/>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                    <span style={{padding:5,border:'1px solid grey',width:250}}>Reference</span>
                    <input name="reference" onChange={handleInputChange} value={inputs.reference} placeholder={'Reference'} style={{width:200,marginLeft:5}}/>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                    <span style={{padding:5,border:'1px solid grey',width:250}}>FSNO</span>
                    <input name="fsno" onChange={handleInputChange} value={inputs.fsno} placeholder={'FSNO'} style={{width:200,marginLeft:5}}/>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                    <span style={{padding:5,border:'1px solid grey',width:250}}>Station</span>
                    <input name="station" onChange={handleInputChange} value={inputs.station} placeholder={'Station'} style={{width:200,marginLeft:5}}/>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                    <span style={{padding:5,border:'1px solid grey',width:250}}>Store</span>
                    <input name="stage" onChange={handleInputChange} value={inputs.stage} placeholder={'Stage'} style={{width:200,marginLeft:5}}/>
                </div>
            </div>
        </form>
       <Tables sellerData={seller_data} buyerData={inputs}/>
    </div>
}

export default BuyerCompany