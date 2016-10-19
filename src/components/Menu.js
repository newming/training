import React from 'react';

class Menu extends React.Component{
  render(){
    let styles={
      root:{
        height:'50px',
        width:'100%',
        background:'#3c3c3c'
      },
      span:{
        lineHeight:'50px',
        fontSize:'18px',
        color:'#fff'
      }
    }
    return(
      <div style={styles.root}>
        <div className="menu-wrap">
          <a href="#course"><span style={styles.span}>热门课程</span></a>
          <a href="#course"><span style={styles.span}>专业技能</span></a>
          <a href="#teacher"><span style={styles.span}>师资力量</span></a>
          <a href="#course-design"><span style={styles.span}>课程设置</span></a>
          <a href="#works"><span style={styles.span}>项目实训</span></a>
          <a href="#student"><span style={styles.span}>明星学员</span></a>
          <a href="#works"><span style={styles.span}>学员作品</span></a>
        </div>
      </div>
    )
  }
}

export default Menu;
