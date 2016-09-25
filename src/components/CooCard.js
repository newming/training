import React from 'react';

import Per1 from '../images/per1.jpg';
import Per2 from '../images/per2.jpg';
import Per3 from '../images/per3.jpg';
import Per4 from '../images/per4.jpg';
import Per5 from '../images/per5.jpg';
import Per6 from '../images/per6.jpg';
import Per7 from '../images/per7.jpg';
import Per8 from '../images/per8.jpg';
import Per9 from '../images/per9.jpg';
import Per10 from '../images/per10.jpg';
import Per11 from '../images/per11.jpg';
import Per12 from '../images/per12.jpg';

class CooCard extends React.Component{
  render(){
    let styles={
      root:{
        width:'100%',
        maxWidth:'1090px',
        margin:'0 auto',
        paddingTop:'30px',
        paddingBottom:'10px',
      },
      logo:{
        textAlign:'center',
        width:'100%',
        padding:'5px 0',
        backgroundColor:'#fff',
        lineHeight:'42px'
      },
      pers:{
        width:'100%'
      },
    }
    return(
      <div style={styles.root}>
        <div className="coo-card">
          <div className="coo-list">
            <div className="coo-img">
              {/*
                <div style={styles.logo}>
                  <span>北京开普勒科技有限公司</span>
                </div>
              */}
              <img src={Per1} style={styles.pers} />
            </div>
            <h3>白占红</h3>
            <p>就职： 东云创达公司</p>
            <p>薪资： <span>8000</span>/月</p>
            <p>毕业院校： 秦皇岛职业技术学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per2} style={styles.pers} />
            </div>
            <h3>徐元良</h3>
            <p>就职： 北京联众</p>
            <p>薪资： <span>15000</span>/月</p>
            <p>毕业院校： 东北石油大学秦皇岛分校</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per3} style={styles.pers} />
            </div>
            <h3>边冠洲</h3>
            <p>就职： 北京彩球世纪科技</p>
            <p>薪资： <span>9000</span>/月</p>
            <p>毕业院校： 东北石油大学秦皇岛分校</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per4} style={styles.pers} />
            </div>
            <h3>杜丽婷</h3>
            <p>就职： 北京汉唐自远技术</p>
            <p>薪资： <span>9500</span>/月</p>
            <p>毕业院校： 燕山大学里仁学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per5} style={styles.pers} />
            </div>
            <h3>郝小军</h3>
            <p>就职： 北京用友</p>
            <p>薪资： <span>20000</span>元/月</p>
            <p>毕业院校： 河北科技师范学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per6} style={styles.pers} />
            </div>
            <h3>戴金明</h3>
            <p>就职： 北京链家地产</p>
            <p>薪资： <span>12000</span>/月</p>
            <p>毕业院校： 河北科技师范学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per7} style={styles.pers} />
            </div>
            <h3>孟冬梅</h3>
            <p>就职： 小米科技</p>
            <p>薪资： <span>10000</span>/月</p>
            <p>毕业院校： 河北科技师范学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per8} style={styles.pers} />
            </div>
            <h3>钮亚峰</h3>
            <p>就职： 京北方信息技术有限公司</p>
            <p>薪资： <span>10000</span>/月</p>
            <p>毕业院校： 河北科技师范学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per9} style={styles.pers} />
            </div>
            <h3>申健萍</h3>
            <p>就职： 清华同方</p>
            <p>薪资： <span>10000</span>/月</p>
            <p>毕业院校： 沈阳航空航天大学</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per10} style={styles.pers} />
            </div>
            <h3>杨 强</h3>
            <p>就职： 北京中科云谱物联技术公司</p>
            <p>薪资： <span>12000</span>/月</p>
            <p>毕业院校： 辽宁大学</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per11} style={styles.pers} />
            </div>
            <h3>朱海伦</h3>
            <p>就职： 我爱</p>
            <p>薪资： <span>11000</span>/月</p>
            <p>毕业院校： 沈阳工程学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <img src={Per12} style={styles.pers} />
            </div>
            <h3>杨 武</h3>
            <p>就职： 北京开普勒科技有限公司</p>
            <p>薪资： <span>9000</span>/月</p>
            <p>毕业院校： 沈阳工程学院</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CooCard;
