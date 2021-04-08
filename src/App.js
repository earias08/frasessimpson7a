import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Frase from './components/Frase';

function App() {
  return (
   <section className='container d-flex flex-column my-5 align-items-center'>
     <img src={process.env.PUBLIC_URL+'logo.png'} alt="logo de los simpsons" className='w-75'/>
     <Button variant="warning" className='my-4 w-75'>Obtener frase</Button>
     <Frase></Frase>
   </section>
  );
}

export default App;
