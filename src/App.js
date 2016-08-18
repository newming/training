import React from 'react';

import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Banner from './components/Banner.js';
import News from './components/News.js';
import Chart from './components/Chart.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Menu />
        <Banner />
        <News />
        <Chart />
      </div>
    )
  }
}

export default App;
