import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useEffect} from 'react'
import Menu from './components/menu';
import ShopingCart from './components/shoping-cart';


function App() {

  useEffect(() => {
    axios.get('http://localhost:3001/data').then(res => {
      console.log('data: ', res.data)
    }).catch(e => {})
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
    </div>
  );
}

export default App;
