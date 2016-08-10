import React from 'react';

class Header extends React.Component{
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
        width:'30vw',
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
          <input type="text" placeholder="手机号" style={styles.input}/>
          <button style={styles.button}>领取助学金</button>
        </div>
      </div>
    )
  }
}

export default Header;
