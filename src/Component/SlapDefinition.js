import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import axios from 'axios';


const SlapDefinition = () => {

  const [slap, setslap] = useState({
    shortName: "",
    payGroupCode: "",
    descriptionS: "",
    statusS: ""
    
  });
 
  const {register,handleSubmit,formState: { errors },} = useForm({mode: "all",});

  //   const onSubmit = (data) => console.log(data);

  console.log(errors);

  const { regShortName, regPayGroupCode,regDescriptionS,regStatusS} = slap;
   
  const onInputChange = e => {
    setslap({ ...slap, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e  => {
    
     await axios.post("https://localhost:7083/api/slap/InsertSlapDefinition",slap);
    alert('Slap Inserted');
    
  };
  return (
    <div className="form-group">
      <div className="row">  
       <div className="column">
        
       <form onSubmit={e => handleSubmit(onSubmit)(e)}  autoComplete="off">
        <h2>Slab Defintion</h2>
          <div className="header">
          <label>Short Name</label>
            <input
            {...register("regShortName", {
                required: "Please enter Slab Name",
                minLength: {
                  value: 3,
                  message: "Name must be atleast 3 characters long...",
                },
                
              })}
              type="text"
              name="regShortName"
              value={regShortName}
              onChange={e => onInputChange(e)}
            />
            <p>{errors.regShortName?.message}</p>
          </div>
          <div className="header">
          <label>Pay Group Code</label>
            <input
            {...register("regPayGroupCode", {
                required: "Please enter Pay Group Code",
                minLength: {
                  value: 3,
                  message: "Group must be atleast 3 characters long...",
                },
              })}
              type="text"
              name="regPayGroupCode"
              value={regPayGroupCode}
              onChange={e => onInputChange(e)}
            />
            <p>{errors.regPayGroupCode?.message}</p>
          </div>
          
          <div className="header">
            <label>Description</label>
            <input
            {...register("regDescriptionS", {
                required: "Please enter the Description",
              })}
              type="text"
              name="regDescriptionS"
              value={regDescriptionS}
              onChange={e => onInputChange(e)}
            />
            <p>{errors.regDescriptionS?.message}</p>
          </div>

          <div className="header">
          <label>Status</label>
            <input
            {...register("regStatusS", {
                required: "Please enter the Status",
              })}
              type="text"
              name="regStatusS"
              value={regStatusS}
              onChange={e => onInputChange(e)}
            />
            <p>{errors.regStatusS?.message}</p>
          </div>

          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default SlapDefinition;