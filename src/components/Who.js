import React from 'react';
import Who1 from '../images/who1.png';
import Who2 from '../images/who2.png';
import Who3 from '../images/who3.png';
import Blue from '../images/blue.png';
import Yellow from '../images/yellow.png';
import Green from '../images/green.png';

class Who extends React.Component{
  render(){
    let styles={
      root:{
        width:'100%',
        paddingTop:'30px',
        paddingBottom:'50px',
      },
      h3:{
        textAlign:'center',
        fontWeight:'300',
      },
      change:{
        color:'#f6001d',
        textAlign:'center',
        fontWeight:'300',
      }
    }
    return(
      <div style={styles.root}>
        <h3 style={styles.h3}>茫茫人海中&nbsp;&nbsp;&nbsp;<span style={{fontWeight:'600'}}>你是哪一个</span></h3>
        <div className="who-list">
          <div className="who-card">
            <h4 style={{backgroundColor:'#256329'}}>在校大学生</h4>
            <img src={Green} />
            <img src={Who1} style={{marginTop:'5px'}} />
            <div className="who-content">
              <p>你还在为大学里学的课程和企业要求不匹配而烦恼吗？</p>
              <p>你还在担心大学毕业后找不到理想工作而忧虑吗？</p>
              <p>你还在为花了父母几万块钱，脑袋里面空空而痛苦吗？</p>
              <p>你还在不能给父母最后的回报而伤心吗？</p>
            </div>
          </div>
          <div className="who-card">
            <h4 style={{backgroundColor:'#ffa200'}}>在职</h4>
            <img src={Yellow} />
            <img src={Who2} style={{marginTop:'5px'}} />
            <div className="who-content">
              <p>你还在企业边缘岗，每天看主管脸色吗？</p>
              <p>你还在因为自己没有专业技能，无法提升而烦恼吗？</p>
              <p>你还在单位浑浑噩噩的混日子吗？</p>
              <p>你还在为迟迟不加薪而着急吗？</p>
            </div>
          </div>
          <div className="who-card">
            <h4 style={{backgroundColor:'#7e7bb8'}}>没有工作</h4>
            <img src={Blue} />
            <img src={Who3} style={{marginTop:'5px'}} />
            <div className="who-content">
              <p>你还在为毕业了没有找到满意的工作而痛苦吗？</p>
              <p>你还在为没有一技之长而着急吗？</p>
              <p>你还在为不能自食其力而苦恼吗？</p>
              <p>你还在创业找不到方向而迷茫吗？</p>
            </div>
          </div>
        </div>
        <h3 style={styles.change}><span style={{fontWeight:'600'}}>改变现状</span>&nbsp;&nbsp;&nbsp;只需<span style={{fontWeight:'600'}}>4</span>个月</h3>
      </div>
    )
  }
}

export default Who;
