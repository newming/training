import React from 'react';
import Comp1 from '../images/comp1.jpg';
import Comp2 from '../images/comp2.jpg';
import Comp3 from '../images/comp3.jpg';
import Comp4 from '../images/comp4.jpg';
import Comp5 from '../images/comp5.jpg';

class Lslider extends React.Component{
  render(){
    let styles={
      root:{
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto',
        padding:'40px 0',
        borderBottom:'1px solid #ccc',
      },
      container:{
        width:'100%',
      },
      img:{
        width:'20%',
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.container}>
          <img src={Comp1}  style={styles.img} />
          <img src={Comp2}  style={styles.img} />
          <img src={Comp3}  style={styles.img} />
          <img src={Comp4}  style={styles.img} />
          <img src={Comp5}  style={styles.img} />
        </div>
      </div>
    )
  }
}

export default Lslider;
