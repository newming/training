import React from 'react';

class Dynamic extends React.Component{
  render(){
    let styles={
      root:{
        paddingTop:'30px',
        paddingBottom:'50px',
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto'
      },
      h2:{
        fontSize:'36px',
        marginBottom:'18px',
        color:'#282828',
        textAlign:'center',
        fontWeight:'600'
      },
      p:{
        textAlign:'center',
        color:'#7b7b7b',
        textTransform:'uppercase'
      },
      btn:{
        textAlign:'center',
        paddingTop:'40px',
        paddingBottom:'10px'
      },
      line:{
        height:'1px',
        backgroundColor:'#e5e5e5',
        marginTop:'30px',
        marginBottom:'15px',
      },
      news:{
        lineHeight:'2.0',
        paddingLeft:'10px',
        width:'90%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow:'ellipsis',
        cursor:'pointer'
      },
      more:{
        position:'absolute',
        right:'5px',
        top:'4px',
        cursor:'pointer'
      }
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}>学校动态</h2>
        <p style={styles.p}>School dynamic</p>
        <div style={styles.line}></div>
        <div style={{borderBottom:'1px solid #e5e5e5',position:'relative',marginTop:'10px'}}>
          <p style={styles.news}>用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={{borderBottom:'1px solid #e5e5e5',position:'relative',marginTop:'10px'}}>
          <p style={styles.news}>用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={{borderBottom:'1px solid #e5e5e5',position:'relative',marginTop:'10px'}}>
          <p style={styles.news}>用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={styles.btn}>
          <a className="search-more" href='#'>了解更多招聘信息 > </a>
        </div>
      </div>
    )
  }
}

export default Dynamic;
