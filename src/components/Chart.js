import React from 'react';
import ChartImg from '../images/chart.png';

class Chart extends React.Component{
  render(){
    let styles={
      root:{
        backgroundColor:'#f2f2f2',
        borderTop:'1px solid rgba(0,0,0,0.1)',
        paddingTop:'30px',
        paddingBottom:'50px',
        textAlign:'center',
      },
      h2:{
        fontSize:'36px',
        color:'#e7210e',
        marginBottom:'18px',
        fontWeight:'600'
      },
      span:{
        color:'#282828'
      },
      p:{
        color:'#7b7b7b',
        textTransform:'uppercase'
      },
      title:{
        color:'#000',
        marginTop:'15px',
        fontSize:'20px'
      },
      img:{
        display:'block',
        width:'90%',
        maxWidth:'1010px',
        margin:'0 auto',
        marginBottom:'20px'
      }
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}>薪资<span style={styles.span}>不断攀升，发展</span>潜力无限</h2>
        <p style={styles.p}>Rising wages and development potential</p>
        <div className="short-line"></div>
        <p style={styles.title}>学员平均薪资高出一般工程师</p>
        <img src={ChartImg} style={styles.img} />
        <a className="search-more" href='#'>了解更多行业资讯 > </a>
      </div>
    )
  }
}

export default Chart;
