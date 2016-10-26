import React from 'react';
import {postPhone} from '../utils';

class Header extends React.Component{
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
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto',
        height:'120px'
      },
      p:{
        float:'left',
        lineHeight:'120px',
        fontSize:'32px',
        marginBottom:'0px'
      },
      search:{
        float:'right',
        paddingTop:'48px',
      },
      input:{
        lineHeight:'28px',
        border:'1px solid #e7210e',
        width:'25vw',
      },
      button:{
        lineHeight:'30px',
        border:'none',
        background:'#e7210e',
        color:'#fff',
        width:'7em'
      }
    }
    return(
      <div style={styles.root}>
        <p style={styles.p}>第嘉学社</p>
        <div style={styles.search}>
          <input type="text" placeholder="您的手机号" style={styles.input} ref="input"/>
          <button style={styles.button} onClick={this.handleClick.bind(this)}>领取助学金</button>
        </div>
      </div>
    )
  }
}

export default Header;
