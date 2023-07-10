import { useState } from 'react';
import Table from "./Table";

function Form() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('card');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([])

  console.log(items)
  function addButton(e) {
    e.preventDefault()
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: [date, description, category, amount]
  };

    setItems(previousList => [...previousList, item]);
    // setDate('')
    // setDescription('');
    // setAmount('')

      console.log(items)
  };

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }


  const itemList = items.map(item =>
    <li key={item.id}>
      {item.value} 
      <button onClick={() => deleteItem(item.id)}>X</button>
    </li>

  // const itemDate = items.map(item =>
  //   <li key={item.id}>
  //     {item.value[0]} 
  //     <button onClick={() => deleteItem(item.id)}>X</button>
  //   </li>

  // const itemDescription = items.map(item =>
  //   <li key={item.id}>
  //     {item.value[1]} 
  //     <button onClick={() => deleteItem(item.id)}>X</button>
  //   </li>

  //        const itemCategory = items.map(item =>
  //   <li key={item.id}>
  //     {item.value[2]} 
  //     <button onClick={() => deleteItem(item.id)}>X</button>
  //   </li>                    
  


  
  )


  return (
    <form onSubmit={addButton}>
      <div>
        Purchase Date:
      <input
        onChange={e => setDate(e.target.value)}
        type="date"
        placeholder='date'
        value={date}
        required
      />
        </div>

      <div>
        What did you buy:
      <input
        onChange={e => setDescription(e.target.value)}
        type="text"
        placeholder='Description'
        value={description}
        required
      />
        </div>
      
      <div>
        Payment Used:
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="card">card</option>
        <option value="cash">cash</option>
        placeholder='Category'
      </select>
        </div>

      <div>
        What was the Cost:
      <input
        onChange={e => setAmount(e.target.value)}
        type="number"
        placeholder='Amount'
        value={amount}
        required
      />
      </div>
        
      <button>Add</button>
      {/* <p>{date}</p>
                <p>{description}</p>
                <p>{category}</p>
                <p>{amount}</p> */}

      <table id='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="5">
              <input class="place" type="text" placeholder="Your Items Will Appear Below" />
            </td>

          </tr>
        </tbody>
      </table>

      <ul>
        {/* {items.map(item => {
          return (
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button></li>
          )
        })}
 */}
        {itemList}
        {/* {itemDate}
        {itemDescription} */}
      </ul>


    </form>

  );
}

export default Form;