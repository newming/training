import React from 'react';
import Step1 from '../images/step1.png';
import Step2 from '../images/step2.png';
import Step3 from '../images/step3.png';
import Th1 from '../images/th1.png';
import Th2 from '../images/th2.png';
import Th3 from '../images/th3.png';
import Th4 from '../images/th4.png';
import Th5 from '../images/th5.png';
import Project1 from '../images/pro1.jpg';
import Project2 from '../images/pro2.jpg';
import Project3 from '../images/pro3.jpg';
import Project4 from '../images/pro4.jpg';
import Project5 from '../images/pro5.jpg';
import Project6 from '../images/pro6.jpg';
import Project7 from '../images/pro7.jpg';
import Project8 from '../images/pro8.jpg';

class Step extends React.Component{
  render(){
    let styles={
      root:{
        backgroundColor:'#f2f2f2',
        paddingTop:'30px',
        paddingBottom:'10px',
      },
      step1:{
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto',
        borderBottom:'1px solid #ccc'
      },
      step3:{
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto',
      },
      img:{
        width:'100%',
        maxWidth:'200px',
        marginTop:'20px',
        marginBottom:'20px'
      },
      p:{
        fontWeight:'600',
        fontSize:'18px',
        paddingLeft:'5px'
      },
      span:{
        fontWeight:'400'
      },
      btn:{
        textAlign:'center',
        padding:'50px 0'
      },
      avator:{
        display:'block',
        margin:'0 auto',
        width:'100%',
        maxWidth:'120px'
      },
      h3:{
        fontSize:'20px',
        textAlign:'center',
        fontWeight:'600'
      },
      desc:{
        textIndent:'2em',
      },
      name:{
        fontWeight:'bold'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.step1}>
          <img src={Step1} style={styles.img}/>
          <p style={styles.p}>pc端模块：<span style={styles.span}>div＋css网站重构，浏览器兼容，网站交互特效，数据交互技术，面向对象编程思想及模块化开发原理</span></p>
          <p style={styles.p}>移动端模块：<span style={styles.span}>css3动画，响应式设计，H5开发，微信场景开发技术，Web App开发</span></p>
          <p style={styles.p}>全栈模块：<span style={styles.span}>最新mean技术栈，es6，nodejs，reactjs组件化开发等技术</span></p>
          <p style={styles.p}>全国首创ui+web前端课程，熟悉完整工作流程，减少沟通阻力，实现与ui设计师工作完美对接</p>
          <div style={styles.btn}>
            <a className="search-more" href='#'>了解详细课程内容 > </a>
          </div>
        </div>
        <div style={styles.step1}>
          <img src={Step2} style={styles.img}/>
          <div className="step-card">
            <div>
              <img src={Th1} style={styles.avator} />
              <h3 style={styles.h3}>林喜军</h3>
              <p style={styles.desc}><span style={styles.name}>Frank&nbsp;&nbsp;</span>北京第嘉传媒创始人，全国最大的CG培训基地火星时代原互动媒体系创始人之一，曾任职于OgilvyOne、电通、华洋联众等4A广告公司，还曾任职于新东方、北京八维教育集团等大型教育培训机构，有着多年的专业广告公司从业经历、10余年的教育培训经验，尤其对大学市场有着丰富的教学与营销经验。</p>
            </div>
            <div>
              <img src={Th2} style={styles.avator} />
              <h3 style={styles.h3}>刘 健</h3>
              <p style={styles.desc}><span style={styles.name}>Jason&nbsp;&nbsp;</span>曾就职于北京创世奇迹Wonderad全国创意总监，并在OgilvyOne、麦肯光明、电通广告、AGENDA、等国际4A广告公司工作过，有多年创意方面的专业技能，而且在客户服务有丰富的经验。曾经服务过游戏客户：完美世界,网易游戏,盛大,搜狐畅游等。品牌客户IBM, Moto, DHL, LG, Airbus, WWF, JEEP, Siemens, Honda Acura众多国内外客户。</p>
            </div>
            <div>
              <img src={Th3} style={styles.avator} />
              <h3 style={styles.h3}>陈 硕</h3>
              <p style={styles.desc}>现任金棕榈广告副总经理/创意总监，15年的广告行业从业经验，非常优秀的客户把控能力及项目开发能力。曾在多家4A及local广告公司任职负责创意策划工作，并对多家4A广告公司项目进行指导并协助完成。</p>
            </div>
            <div>
              <img src={Th4} style={styles.avator} />
              <h3 style={styles.h3}>杨 永</h3>
              <p style={styles.desc}>现就职于北京铭硕知识产权代理有限公司。研发中心前端工程师总监，负责管理沈阳分公司前端开发工作。擅长网页重构，人机交互设计，网页构架设计，CSS框架建设，安卓apk，苹果APP应用开发。</p>
            </div>
            <div>
              <img src={Th5} style={styles.avator} />
              <h3 style={styles.h3}>Peter</h3>
              <p style={styles.desc}>好多视频网站创始人，慕课网在线视频的主讲，疯狂的在线教育爱好者，十多年业界经验的骨灰级专家，曾在清华大学举办过沙龙，倡导推广前端技术，在github上有2k的粉丝。</p>
            </div>
          </div>
          <div style={styles.btn}>
            <a className="search-more" href='#'>查看更多师资信息 > </a>
          </div>
        </div>
        <div style={styles.step3}>
          <img src={Step3} style={styles.img}/>
          <p style={styles.p}>企业项目实战教学，学习＝工作<span style={styles.span}>，课程内容根据企业招聘需求更新，毕业即可顺利进入工作状态</span></p>
          <div className="project-card">
            <div><img src={Project1} /><p style={{backgroundColor:'#00a8ff'}}>PC网站项目</p></div>
            <div><img src={Project2} /><p style={{backgroundColor:'#ffa200'}}>手游项目</p></div>
            <div><img src={Project3} /><p style={{backgroundColor:'#7e7bb8'}}>HTML5项目</p></div>
            <div><img src={Project4} /><p style={{backgroundColor:'#256329'}}>电商项目</p></div>
            <div><img src={Project5} /><p style={{backgroundColor:'#aa915c'}}>APP项目</p></div>
            <div><img src={Project6} /><p style={{backgroundColor:'#6c7879'}}>iPad项目</p></div>
            <div><img src={Project7} /><p style={{backgroundColor:'#5daeb2'}}>WEB游戏项目</p></div>
            <div><img src={Project8} /><p style={{backgroundColor:'#c4beaa'}}>医疗项目</p></div>
          </div>
          <div style={styles.btn}>
            <a className="search-more" href='#'>点击申请在线免费试听课程 > </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Step;
