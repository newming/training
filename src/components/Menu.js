import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
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
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#course">热门课程</NavItem>
            <NavItem eventKey={2} href="#course">专业技能</NavItem>
            <NavItem eventKey={3} href="#teacher">师资力量</NavItem>
            <NavItem eventKey={4} href="#course-design">课程设置</NavItem>
            <NavItem eventKey={5} href="#works">项目实训</NavItem>
            <NavItem eventKey={6} href="#student">明星学员</NavItem>
            <NavItem eventKey={7} href="#works">学员作品</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
// <div style={styles.root}>
// <div className="menu-wrap">
//   <a href="#course"><span style={styles.span}>热门课程</span></a>
//   <a href="#course"><span style={styles.span}>专业技能</span></a>
//   <a href="#teacher"><span style={styles.span}>师资力量</span></a>
//   <a href="#course-design"><span style={styles.span}>课程设置</span></a>
//   <a href="#works"><span style={styles.span}>项目实训</span></a>
//   <a href="#student"><span style={styles.span}>明星学员</span></a>
//   <a href="#works"><span style={styles.span}>学员作品</span></a>
// </div>
// </div>

export default Menu;
