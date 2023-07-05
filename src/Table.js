import {useState} from 'react';

function Table() {
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmmount] = useState(0)

    const form = `<tr>
                    <td>${date}</td>
                    <td>${description}</td>
                    <td>${category}</td>
                    <td>${amount}</td>
                    <td><input type="button" value="Delete" onclick="deleteRow(this)"/></td>
                </tr>`;

    return (
         <>
         {form}
         </>       
    )
}

export default Table;