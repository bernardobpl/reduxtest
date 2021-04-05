import './App.css';
import List from './components/List';
import Tela from './components/Tela';
import store from './store';

import  { Provider } from 'react-redux';
import { useState } from 'react';
import Tela2 from './components/Tela2';


function App() {
  const [tela, settela] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
        <div className="btns-div">
          <button onClick={()=>settela(1)}>Tela 1</button>
          <button onClick={()=>settela(2)}>Tela 2</button>
          <button onClick={()=>settela(0)}>Nenhuma tela</button>
        </div>
        {tela === 1 && <Tela tela="Essa é a tela 1"/>}
        {tela === 2 && <Tela2 tela="Essa é a tela 2"/>}
      </Provider>
    </div>
  );
}

export default App;