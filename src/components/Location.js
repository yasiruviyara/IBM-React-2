import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className=''>
            <span>
        

      <select 
      className='alert alert-success select-1' 
      name="Location" 
      id="Location" 
      onChange={
        event=>changeLocation(event.target.value)
        }
       defaultValue="Currency (£ Pound)" 
       >
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Europe</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      
      
      </span>
    </div>
    );
};

export default Location;