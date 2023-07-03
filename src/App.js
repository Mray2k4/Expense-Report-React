import Navbar from './Navbar';

function MyButton() {
return (
  <button>
    I'm a button
  </button>
)
}


function App() {
  const name = 'Marque Ray';


  return ( 
    <div>
      <h1>App Component</h1>
      <MyButton/>
      <p>{name}</p>
      <Navbar></Navbar>
      
    </div>
   );
}
 
export default App;