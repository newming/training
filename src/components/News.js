import React from 'react';
import News1 from '../images/news1.jpg';
import News2 from '../images/news2.jpg';

class News extends React.Component{
  render(){
    let styles={
      root:{
        width:'100%',
        paddingTop:'30px',
        marginBottom:'50px'
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
        color:'#ee7973',
        textAlign:'center',
        padding:'0 10px',
        textTransform:'uppercase'
      },
      subSpan:{
        color:'#7b7b7b',
      },
      container:{
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto',
        marginTop:'10px'
      }
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}>互联网+时代<span style={styles.span}>/不懂IT技术迟早被淘汰</span></h2>
        <p style={styles.p}>Internet + age don‘t <span style={styles.subSpan}>understand IT technology to be  eliminated<br/>eliminated sooner or later</span></p>
        <div className="short-line"></div>
        <div style={styles.container} className="clearfix">
          <div className="news-card">
            <h3>薪资高，让同龄人遥不可及</h3>
            <p>web前端开发源于传统的互联网，互联网普及让人才需求量居高不下，随着移动互联网的高速发展，移动终端的前端开发也越来越受到重视，因此薪水自然也高，据智联招聘、51job、拉勾、猎聘网等招聘网站得到的数据，web前端工程师的平均薪资都在万元以上，是真正的高薪职业。</p>
            <img src={News1} />
          </div>
          <div className="news-card">
            <h3>人才缺口大 现在是入行最佳时机</h3>
            <p>在互联网高速发展的今天，web前端工程师是市场上紧缺的高技能人才，每天有数万家企业招聘该岗位，以北京为例，每天就有近9000条web前端工程师职位招聘，可以说web前端工程师就业前景广阔，符合未来发展趋势。人才缺口大，现在是入行最佳时机。</p>
            <img src={News2} />
          </div>
        </div>
      </div>
    )
  }
}

export default News;
