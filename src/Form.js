
function Form() {
    return (  
        <form className="main">
            <div id="data">
                <input type="date" id="date" placeholder='date'/>
                <input type="text" id="descript" placeholder='Description'/>
                <input type="text" id="category" placeholder='Category'/>
                <input type="number" id="amount" placeholder='Amount'/>
                <button id='btnAdd'>Add</button>
            </div>
        </form>
    );
}
 
export default Form;