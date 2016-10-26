import React from 'react';
import Slider from './LittleSlider';
import CooCard from './CooCard';

import Ok from '../images/ok.png';

class Cooperate extends React.Component{
  render(){
    let styles={
      root:{
        width:'100%',
        backgroundColor:'#f2f2f2',
        paddingTop:'30px',
        paddingBottom:'30px',
      },
      h2:{
        textAlign:'center',
        fontSize:'36px',
        color:'#e7210e',
        marginBottom:'18px',
        lineHeight:'1.2',
        fontWeight:'600',
        padding:'0 10px'
      },
      span:{
        color:'#282828'
      },
      p:{
        textAlign:'center',
        color:'#7b7b7b',
        textTransform:'uppercase'
      },
      btn:{
        textAlign:'center',
        padding:'20px 0'
      },
      img:{
        display:'block',
        margin:'0 auto',
        width:'90%',
        maxWidth:'460px',
        position:'relative',
        top:'-15px'
      }
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}><span style={styles.span}>百余家合作企业，近千个就业岗位虚位以待</span><br/>期待你的加入</h2>
        <p style={styles.p}>Looking forward to your joining</p>
        <div className="short-line"></div>
        <Slider />
        <CooCard />
        <div style={styles.btn}>
          <a className="search-more" href='#'>查看更多学员信息 > </a>
        </div>
        <h2 style={styles.h2}><span style={styles.span}>他们已经实现了</span>完美蜕变<span style={styles.span}>，月薪万元</span>只需一个电话</h2>
        <img src={Ok} style={styles.img}/>
      </div>
    )
  }
}

export default Cooperate;
