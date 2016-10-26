import React from 'react';
import Work1 from '../images/work1.jpg';
import Work2 from '../images/work2.jpg';
import Work3 from '../images/work3.jpg';
import Work4 from '../images/work4.jpg';
import Work5 from '../images/work5.jpg';
import Work6 from '../images/work6.jpg';

class Works extends React.Component{
  render(){
    let styles={
      root:{
        width:'100%',
        paddingTop:'30px',
      },
      h2:{
        textAlign:'center',
        fontSize:'36px',
        color:'#e7210e',
        marginBottom:'18px',
        fontWeight:'600',
        padding:'0 10px'
      },
      span:{
        color:'#282828'
      },
      p:{
        color:'#7b7b7b',
        textAlign:'center',
        padding:'0 10px',
        textTransform:'uppercase'
      },
      btn:{
        textAlign:'center',
        padding:'50px 0',
      },
    }
    return(
      <div style={styles.root} id="works">
        <h2 style={styles.h2}>零基础<span style={styles.span}>入学，</span>4个月<span style={styles.span}>拥有两年项目经验</span></h2>
        <p style={styles.p}>Zero base entrance, 4 months, with two years experience in project</p>
        <div className="short-line" style={{marginBottom:'30px'}}></div>
        <div className="works-card">
          <img src={Work1} />
          <img src={Work2} />
          <img src={Work3} />
          <img src={Work4} />
          <img src={Work5} />
          <img src={Work6} />
        </div>
        <div style={styles.btn}>
          <a className="search-more" href='#'>更多学员作品 > </a>
        </div>
      </div>
    )
  }
}

export default Works;
