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
      },
      item:{
        borderBottom:'1px solid #e5e5e5',
        position:'relative',
        marginTop:'10px'
      }
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}>行业动态</h2>
        <p style={styles.p}>School dynamic</p>
        <div style={styles.line}></div>
        <div style={styles.item}>
          <p style={styles.news}>你认为“三只松鼠”一天内销售破亿用的是什么营销思维？</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={styles.item}>
          <p style={styles.news}>天猫国际牵手麦德龙，跨境电商爆发期来临？</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={styles.item}>
          <p style={styles.news}>越来越多的商家在网上卖水果，生鲜O2O是电商的新蓝海吗？</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={styles.item}>
          <p style={styles.news}>越来越多的商家在网上卖水果，生鲜O2O是电商的新蓝海吗？</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={styles.item}>
          <p style={styles.news}>如果您做三星移动互联网产品，您认为在移动互联网时代，三星该怎样布局？</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={styles.item}>
          <p style={styles.news}>关于最近阿里云内部员工抢月饼事件引发的js程序拓展</p>
          <span style={styles.more}>更多></span>
        </div>
        <div style={styles.item}>
          <p style={styles.news}>带着手机逛菜场，是怎样的体验？菜市场也接入支付宝了</p>
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
