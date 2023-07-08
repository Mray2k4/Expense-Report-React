import { useState } from 'react';
import Table from "./Table";

function Form() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('card');
  const [amount, setAmount] = useState(0);
  const [items, setItems] = useState([])

  function addButton(e) {
    e.preventDefault()



    const inputs = { date, description, category, amount };
    const item = {
      id: Math.floor(Math.random() * 1000),
      // value: { inputs }
      // value: date, description, category, amount
      value: [date, description, category, amount]


    };

    setItems(previousList => [...previousList, item]);
    setDescription('');

    console.log(items)
  };

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }


  return (
    <form onSubmit={addButton}>
      <input
        onChange={e => setDate(e.target.value)}
        type="date"
        placeholder='date'
        value={date}
        required
      />

      <input
        onChange={e => setDescription(e.target.value)}
        type="text"
        placeholder='Description'
        value={description}
        required
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
        required
      />
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
          <input class="place" type="text" placeholder="Your Items Will Appear Below"/>
        </td>
        
      </tr>
    </tbody>
  </table>

      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button></li>
          )
        })}

      </ul>


    </form>

  );
}

export default Form;