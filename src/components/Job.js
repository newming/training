import React from 'react';
import JobImg from '../images/job.png';

class Job extends React.Component{
  render(){
    let styles={
      root:{
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto',
        paddingTop:'30px',
        paddingBottom:'50px',
        textAlign:'center',
        borderBottom:'1px solid #ccc'
      },
      h2:{
        fontSize:'36px',
        color:'#282828',
        marginBottom:'18px',
        fontWeight:'600'
      },
      p:{
        color:'#7b7b7b',
        textTransform:'uppercase'
      },
      img:{
        display:'block',
        width:'90%',
        maxWidth:'830px',
        margin:'0 auto',
        marginBottom:'20px'
      }
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}>就业岗位</h2>
        <p style={styles.p}>employment</p>
        <div className="short-line"></div>
        <img src={JobImg} style={styles.img} />
      </div>
    )
  }
}

export default Job;
