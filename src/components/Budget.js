import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        if(newBudget > 20000){
            alert("The value cannot exceed remaining funds £"+ newBudget)
        }
        else if(newBudget < budget){
            alert("You cannot reduce the budget value lower than the spending")
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: €</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}/>
</div>
    );
};
export default Budget;
