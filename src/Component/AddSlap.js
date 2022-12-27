import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './AddSlap.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



const AddSlap = () => {

  const [slapd, setslapd] = useState({
    slapName: "",
    slapLowValue: "",
    slapHighValue: "",
    slapPercentage: "",
    slapValue: "",
  });


  const [nameList, setNameList] = useState([{'name':'','id':''}])

    useEffect(() =>{
        const fetchData = async ()=>{
            const response = await fetch(`https://localhost:7083/api/slap/GetDefSlap`);
            const newData = await response.json();
            setNameList(newData);
            console.log(newData);
        };
        fetchData();
    }, [])



  const options = [
    'one', 'two', 'three'
  ];

  const {register,handleSubmit,formState: { errors }} = useForm({mode: "all"});

//   const onSubmit = (data) => console.log(data);

  console.log(errors);
 
  const { regslapName,regPayGroupCode, regslapLowValue,regslapHighValue,regslapPercentage,regslapValue} = slapd;
   
  const onInputChange = e => {
    setslapd({ ...slapd, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async e => {
    
    await axios.post("https://localhost:7083/api/slap/InsertSlap",slapd);
    alert('Slap Inserted');
    
  };
  
  return (
    <div className="form-group">
      <div className="row">  
       <div className="column">
        
        <form onSubmit={e => handleSubmit(onSubmit)(e)}  autoComplete="off">
        <h2>Slab Entry</h2>
          <div className="header">
          <label>Slab Name</label>
            <input
                {...register("regslapName", {
                    required: "Please enter Slab Name",
                    minLength: {
                      value: 3,
                      message: "Name must be atleast 3 characters long...",
                    }
                    
                  })}
              type="text"
              name="regslapName"
              value={regslapName}
              onChange={e => onInputChange(e)}
            />
          <p>{errors.regslapName?.message}</p>
          </div>

          {/* <Dropdown options={options} onChange={e => onInputChange(e)} value={regslapName} placeholder="Select an option" /> */}
          <div className="header">
          <select className="form-control" name="regslapName" value={regslapName} onChange={e => onInputChange(e)}>
              <option value="">Choose Slap Name</option>

        {nameList.map(company => (
              <option value={company.shortName} key={company.slid} >{company.shortName}</option>
    
              ))
              }

          </select>
          <br/><br/>
          </div>

          {/* <Dropdown className="slapoptions" options={options} name='regslapName' onChange={(value) => setslapd({...slapd,
                    regslapName:value.value})} value={slapd.regslapName}placeholder="Slab Name"></Dropdown>
         */}
        <div className="header">
    
            <label>Pay Group Code</label><br/><br/>
        <select className="form-control" name="regPayGroupCode" value={regPayGroupCode} onChange={e => onInputChange(e)}>
              <option value="">Pay Group Code</option>

        {nameList.map(company => (
              <option value={company.payGroupCode} key={company.slid} >{company.payGroupCode}</option>
    
              ))
              }

          </select>
          </div>
{/*           
          <div className="header">
            <label>PayGroupCode</label>
          
          <input
            type="text"
            name="regPayGroupCode"
            value={nameList?.payGroupCode}
            onChange={setNameList}
          
          />
          </div> */}

          <div className="header">
          <label>Low Value</label>
            <input
            {...register("regslapLowValue", {
                required: "Please enter Low Value",
              })}
              type="text"
              name="regslapLowValue"
              value={regslapLowValue}
              onChange={e => onInputChange(e)}
            />
            <p>{errors.regslapLowValue?.message}</p>
          </div>
          
          <div className="header">
          <label>High Value</label>
            <input
            {...register("regslapHighValue", {
                required: "Please enter high value",
                minLength: {
                    value: 2,
                    message: "Number  must have 10 numbers long...",
                  },
                
                maxLength: {
                    value: 10,
                    message: "Number  must have 10 numbers long...",
                  }
                
              })}
              type="text"
              name="regslapHighValue"
              value={regslapHighValue}
              onChange={e => onInputChange(e)}
            />
            <p>{errors.regslapHighValue?.message}</p>
          </div>
          
          <div className="header">
          <label>Percentage</label>
            <input
            {...register("regslapPercentage", {
                required: "Please enter Percentage",
              })}
              type="text"
              name="regslapPercentage"
              value={regslapPercentage}
              onChange={e => onInputChange(e)}
            />
            <p>{errors.regslapPercentage?.message}</p>
          </div>

          <div className="header">
            <label>Value</label>
            <input
            {...register("regslapValue", {
                required: "Please enter the value",
              })}
              type="text"
              name="regslapValue"
              value={regslapValue}
              onChange={e => onInputChange(e)}
            />
            <p>{errors.regslapValue?.message}</p>
          </div>

          <button  className="submit" >Submit</button>
          
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default AddSlap;