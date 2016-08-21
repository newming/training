import React from 'react';
import Logo1 from '../images/logo1.jpg';
import Logo2 from '../images/logo2.jpg';
import Logo3 from '../images/logo3.jpg';
import Logo4 from '../images/logo4.jpg';
import Logo5 from '../images/logo5.jpg';
import Logo6 from '../images/logo6.jpg';
import Logo7 from '../images/logo7.jpg';
import Logo8 from '../images/logo8.jpg';

import Pers1 from '../images/pers1.jpg';
import Pers2 from '../images/pers2.jpg';
import Pers3 from '../images/pers3.jpg';
import Pers4 from '../images/pers4.jpg';
import Pers5 from '../images/pers5.jpg';
import Pers6 from '../images/pers6.jpg';
import Pers7 from '../images/pers7.jpg';
import Pers8 from '../images/pers8.jpg';

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
        backgroundColor:'#fff'
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
              <div style={styles.logo}>
                <img src={Logo1} />
              </div>
              <img src={Pers1} style={styles.pers} />
            </div>
            <h3>郝小军</h3>
            <p>就职： 乐视</p>
            <p>薪资： <span>15000</span>/月</p>
            <p>毕业院校： 河北科技师范学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <div style={styles.logo}>
                <img src={Logo2} />
              </div>
              <img src={Pers2} style={styles.pers} />
            </div>
            <h3>戴金明</h3>
            <p>就职： 北京链家地产</p>
            <p>薪资： <span>12000</span>/月</p>
            <p>毕业院校： 河北科技师范学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <div style={styles.logo}>
                <img src={Logo3} />
              </div>
              <img src={Pers3} style={styles.pers} />
            </div>
            <h3>姜 文</h3>
            <p>就职： 百度</p>
            <p>薪资： <span>13000</span>/月</p>
            <p>毕业院校： 东北石油</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <div style={styles.logo}>
                <img src={Logo4} />
              </div>
              <img src={Pers4} style={styles.pers} />
            </div>
            <h3>孙璐璐</h3>
            <p>就职： 优酷土豆</p>
            <p>薪资： <span>15000</span>/月</p>
            <p>毕业院校： 河北科技师范学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <div style={styles.logo}>
                <img src={Logo5} />
              </div>
              <img src={Pers5} style={styles.pers} />
            </div>
            <h3>余 昊</h3>
            <p>就职： 网易</p>
            <p>薪资： <span>30万</span>元/年</p>
            <p>毕业院校： 武汉大学</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <div style={styles.logo}>
                <img src={Logo6} />
              </div>
              <img src={Pers6} style={styles.pers} />
            </div>
            <h3>张军雅</h3>
            <p>就职： HTC</p>
            <p>薪资： <span>15000</span>/月</p>
            <p>毕业院校： 南京艺术师范学院</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <div style={styles.logo}>
                <img src={Logo7} />
              </div>
              <img src={Pers7} style={styles.pers} />
            </div>
            <h3>王少静</h3>
            <p>就职： 小米科技</p>
            <p>薪资： <span>15000</span>/月</p>
            <p>毕业院校： 河北理工大学</p>
          </div>
          <div className="coo-list">
            <div className="coo-img">
              <div style={styles.logo}>
                <img src={Logo8} />
              </div>
              <img src={Pers8} style={styles.pers} />
            </div>
            <h3>孔 越</h3>
            <p>就职： 搜狐sohu</p>
            <p>薪资： <span>12000</span>/月</p>
            <p>毕业院校： 沈阳大学</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CooCard;
