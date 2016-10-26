import React from 'react';
import Katong from '../images/katong.png';
import Star1 from '../images/star1.png';
import Star2 from '../images/star2.png';
import Star3 from '../images/star3.png';
import {postPhone} from '../utils';

class Footer extends React.Component{
  handleClick(){
    let inputText = this.refs.input.value;
    let reg = /^1\d{10}$/;
    if (reg.test(inputText)) {
      postPhone({phoneNumber:inputText})
        .then( (res) => alert(res.msg.message) )
    }else {
      alert('您输入的手机号有误，请核对后输入')
    }
  }
  render(){
    let styles={
      root:{
        backgroundColor:'#f6001d',
      },
      container:{
        width:'100%',
        maxWidth:'1130px',
        margin:'0 auto',
        padding:'20px',
        position:'relative'
      },
      input:{
        border:'1px solid #fff',
        backgroundColor:'rgba(255,255,255,0)',
        color:'#fff',
        padding:'5px 10px',
        marginTop:'30px',
        width:'80%'
      },
      button:{
        border:'none',
        borderRadius:'5px',
        color:'#f6001d',
        backgroundColor:'#fff',
        marginTop:'20px'
      },
    }
    return(
      <div style={styles.root}>
        <div style={styles.container} className="clearfix">
          <div className="foot-left clearfix">
            <div className="foot-h3">
              <h3>高薪就业就选第嘉学社</h3>
              <img src={Star1} style={{top:'-20px',left:'30%'}} />
              <img src={Star1} style={{top:'40px',left:'80%'}} />
              <img src={Star2} style={{top:'45px',left:'65%'}} />
              <img src={Star3} style={{top:'-25px',left:'50%'}} />
            </div>
            <p style={{color:'#fff',marginTop:'10px'}}>秦皇岛第嘉</p>
            <p>秦皇岛市海港区金梦海湾1号秦海路84号4层</p>
            <p>电话：0335-7104491&nbsp;&nbsp;&nbsp;&nbsp;15703387810&nbsp;&nbsp;&nbsp;&nbsp;QQ : 3205653686</p>
            <p style={{color:'#fff',marginTop:'10px'}}>北京第嘉</p>
            <p>北京朝阳区建国路93号万达广场写字楼A&nbsp;&nbsp;&nbsp;&nbsp;电话：400-600－7366</p>
            <p style={{color:'#fff',marginTop:'10px'}}>沈阳第嘉</p>
            <p>沈阳市沈北新区道义南大街江南甲第D座10-27&nbsp;&nbsp;&nbsp;电话：400-600－7366<br/>（地铁2号线航空航天大学站A出口即是）</p>
            <p style={{color:'#fff',marginTop:'10px'}}>深圳第嘉</p>
            <p>深圳市南山高新科技园南区高新南一道德赛科技大厦604室&nbsp;&nbsp;&nbsp;电话：400-600－7366</p>
          </div>
          <div className="foot-right">
            <input type="text" placeholder="请输入手机号" style={styles.input} ref="input"/><br/>
            <button style={styles.button} onClick={this.handleClick.bind(this)}>报名领取助学金</button>
          </div>
          <img src={Katong} className="katong"/>
        </div>
      </div>
    )
  }
}

export default Footer;
