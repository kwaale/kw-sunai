import { Link } from 'react-router-dom';

function Inicio() {
    
    return (
      <div className="App">
        <Link className='nav-link active' to='/cliente'>
        <button
                    onClick={() => <Link className='nav-link active' to='/cliente'/>} >Inicio</button> 
            </Link>
      </div>
    );
  }
  export default Inicio;