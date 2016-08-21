import React from 'react';
import Comp1 from '../images/comp1.jpg';
import Comp2 from '../images/comp2.jpg';
import Comp3 from '../images/comp3.jpg';
import Comp4 from '../images/comp4.jpg';
import Comp5 from '../images/comp5.jpg';

class Lslider extends React.Component{
  constructor(){
    super();
    this.state={
      boxHeight:200,
      nowScroll:0
    }
  }
  handleClick(x){
    let now = this.state.nowScroll + x;
    if (now<0) {
      now = 3;
    }
    if (now>3) {
      now = 0;
    }
    this.setState({
      nowScroll:now,
    })
  }
  componentDidMount(){
    let imgWidth = parseInt(this.refs.imgWidth.width,10);
    // console.log(typeof imgWidth);
    this.setState({
      boxHeight:imgWidth
    })
  }
  render(){
    let styles={
      root:{
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto',
        overflow:'hidden',
        padding:'40px 0',
        borderBottom:'1px solid #ccc',
        position:'relative',
        height: this.state.boxHeight + 80 + 'px'
      },
      container:{
        width:'160%',
        position:'absolute',
        transition:'all 0.5s ease',
        left:-this.state.nowScroll*20+'%'
      },
      img:{
        width:'12.5%',
      },
      left:{
        lineHeight: this.state.boxHeight + 'px',
      },
      right:{
        lineHeight: this.state.boxHeight+ 'px',
        right:'0',
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.container}>
          <img src={Comp1}  style={styles.img} ref='imgWidth'/>
          <img src={Comp2}  style={styles.img} />
          <img src={Comp3}  style={styles.img} />
          <img src={Comp4}  style={styles.img} />
          <img src={Comp5}  style={styles.img} />
          <img src={Comp1}  style={styles.img} />
          <img src={Comp2}  style={styles.img} />
          <img src={Comp3}  style={styles.img} />
        </div>
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" style={styles.left} onClick={this.handleClick.bind(this,-1)}></span>
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" style={styles.right} onClick={this.handleClick.bind(this,1)}></span>
      </div>
    )
  }
}

export default Lslider;
