import React from 'react';

import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Banner from './components/Banner.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Menu />
        <Banner />
      </div>
    )
  }
}

export default App;
