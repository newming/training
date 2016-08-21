import React from 'react';

import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Banner from './components/Banner.js';
import News from './components/News.js';
import Chart from './components/Chart.js';
import Job from './components/Job.js';
import Who from './components/Who.js';
import Step from './components/Step.js';
import Works from './components/Works.js';
import Employ from './components/Employ.js';
import Cooperate from './components/Cooperate.js';
import Dynamic from './components/Dynamic.js';
import Footer from './components/Footer.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Menu />
        <Banner />
        <News />
        <Chart />
        <Job />
        <Who />
        <Step />
        <Works />
        <Employ />
        <Cooperate />
        <Dynamic />
        <Footer />
      </div>
    )
  }
}

export default App;
