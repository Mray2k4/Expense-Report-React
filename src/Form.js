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
    setDate('')
    setDescription('');
    setAmount('')

    // console.log(items)
  };

  function deleteItem(id) {
    const deleteButton = items.filter(item => item.id !== id);
    setItems(deleteButton);
  }

  const itemList = items.map(item =>
    <tr key={item.id} className='table-primary'>
      <td>{item.value[0]}</td>
      <td>{item.value[1]}</td>
      <td>{item.value[2]}</td>
      <td>${item.value[3]}</td>
      <td><button onClick={() => deleteItem(item.id)}>X</button></td>
    </tr>
  )




  return (
    <form onSubmit={addButton}>
      <div className='list'>
        Purchase Date:
        <input
          onChange={e => setDate(e.target.value)}
          type="date"
          placeholder='date'
          value={date}
          required
        />

        What did you buy:
        <input
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder='Description'
          value={description}
          required
        />

        Payment Used:
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="Card">Card</option>
          <option value="Cash">Cash</option>
          <option value="Crypto">Crypto</option>
          placeholder='Category'
        </select>

        What was the Cost:
        <input
          onChange={e => setAmount(e.target.value)}
          type="number"
          placeholder='Amount'
          value={amount}
          required
        />

        <button>Add</button>
      </div>



      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
          {itemList}
        </thead>
        
        <tbody>
        </tbody>
      </table>




    </form>

  );
}

export default Form;