import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Prime from "./components/Prime";


function App() {


  const [val, setVal] = useState("");
  const [girilenSayi, setgirilenSayi] = useState(20);
  const [sonuc, setSonuc] = useState("");
  

  return (
    <div className="App">  
      <Prime 
        val={val}
        setVal={setVal}
        sonuc={sonuc}
        setSonuc={setSonuc}
      />
      <Card
        girilenSayi= {girilenSayi}
        setgirilenSayi= {setgirilenSayi}
        sonuc={sonuc}
      />
    </div>
  );
}

export default App;
