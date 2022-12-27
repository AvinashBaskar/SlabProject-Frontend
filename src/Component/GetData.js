import React, { useEffect, useState } from 'react';
import './GetData.css';

function GetData() {
    const [category, setCategory]=useState([]);
    useEffect(() => {
        const getcategory = async () => {
          const res = await fetch("https://localhost:7083/api/slap/GetAllSlap");
          const getdata = await res.json();
          setCategory(getdata);
        };
    
        getcategory();
      },[]);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Slab Name</th>
                        <th>Low Value </th>
                        <th>High Value</th>
                        <th>Percentage</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                {category.map((Entry) => (
                  <tr key={Entry.slapid}>
                    <td>{Entry.slapName}</td>
                    <td>{Entry.slapLowValue}</td>
                    <td> {Entry.slapHighValue}</td>
                    <td> {Entry.slapPercentage}</td>
                    <td> {Entry.slapValue}</td>
                    
                  </tr>
                ))}
              </tbody>

            </table>
            
        </div>
    );
}

export default GetData;