import {useState} from 'react';

function Form() {
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('card')
    const [amount, setAmount] = useState(0)

    function addButton(e) {
        e.preventDefault()
        const inputs = {date, description, category, amount};
        console.log(inputs)

    }


    return (  
        <form onSubmit={addButton}>
                <input
                  onChange={e => setDate(e.target.value)} 
                  type="date" 
                  placeholder='date'
                  value={date}
                  />
                  
                <input 
                  onChange={e => setDescription(e.target.value)}
                  type="text"  
                  placeholder='Description'
                  value={description}
                />
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="card">card</option>
                    <option value="cash">cash</option>
                  placeholder='Category'
                </select>
                <input 
                  onChange={e => setAmount(e.target.value)}
                  type="number" 
                  placeholder='Amount'
                  value={amount}
                />
                <button>Add</button>
                {/* <p>{date}</p>
                <p>{description}</p>
                <p>{category}</p>
                <p>{amount}</p> */}
        </form>
    );
}
 
export default Form;