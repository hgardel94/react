
import { useState } from 'react';

import './App.css';
import FighterList from './components/FighterList'
import FighterDetails from './components/FighterDetails'


function App() {
    const [fighterSelected, setFighterSelected] = useState(null)


    console.log("El luchador seleccionado es: ",fighterSelected)
    return <div>
        {fighterSelected!==null?
        < FighterDetails details={fighterSelected} onSelect={()=>setFighterSelected(null)}/> :
        <FighterList onSelect={setFighterSelected} />
        }
</div>
}




export default App;
