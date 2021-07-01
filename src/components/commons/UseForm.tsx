const { useState } = require("react")

const UseForm = (initialValue:any)=>{
    const [inputs,setInputs] = useState(initialValue)

    const handleInputChange = (event:any) => {
        event.persist();
        setInputs((inputs:any) => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event:any) => {
        console.log(inputs)
      }

      return {
        handleSubmit,
        handleInputChange,
        inputs
        };
}

export default UseForm