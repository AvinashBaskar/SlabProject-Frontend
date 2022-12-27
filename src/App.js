
import './App.css';
import SlapEntry from './Component/SlapEntry';
import SlapDefinition from './Component/SlapDefinition';
import GetData from './Component/GetData';
import AddSlap from './Component/AddSlap';


function App() {
  return (
    <div className='head'>
        {/* <SlapEntry/> */}
        <SlapDefinition/> 
        <AddSlap/>
        <GetData/>
        
    </div>
  );
}

export default App;
