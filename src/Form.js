import {useState} from 'react';

function Form() {
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)


    return (  
        <form className="main">
                <input
                  onChange={e => setDate(e.target.value)} 
                  type="date"
                  id="date" 
                  placeholder='date'/>
                <input 
                  onChange={e => setDescription(e.target.value)}
                  type="text" 
                  id="descript" 
                  placeholder='Description'
                />
                <input 
                  onChange={e => setCategory(e.target.value)}
                  type="text" 
                  id="category" 
                  placeholder='Category'
                />
                <input 
                  onChange={e => setAmount(e.target.value)}
                  type="number" 
                  id="amount" 
                  placeholder='Amount'
                />
                <button id='btnAdd'>Add</button>
        </form>
    );
}
 
export default Form;