import React from 'react';
import Table from 'react-bootstrap/lib/Table.js';

class Employ extends React.Component{
  render(){
    let styles={
      root:{
        paddingTop:'50px',
        width:'100%',
        maxWidth:'1090px',
        borderTop:'1px solid rgba(0,0,0,0.1)',
        margin:'0 auto'
      },
      p:{
        fontSize:'18px',
        padding:'0 10px'
      },
      btn:{
        textAlign:'center',
        padding:'50px 0',
      },
      contain:{
        width:'100%',
        marginTop:'40px',
        borderTop:'7px solid #f6001d',
        backgroundColor:'#f4f4f4',
        padding:'20px',
        boxShadow:'0 0 10px 1px rgba(0, 0, 0, 0.2)'
      },
      table:{
        width:'100%',
        boxShadow:'0 0 10px 1px rgba(0, 0, 0, 0.2)',
        padding:'10px',
        textAlign:'center',
      },
      thead:{
        textAlign:'center',
        fontSize:'16px',
        color:'#f6001d'
      }
    }
    return(
      <div style={styles.root}>
        <p style={styles.p}><span style={{fontWeight:'bold'}}>就业保障：</span>就业顾问1对1就业指导，就业推荐，提供企业专属岗位业界最权威职业素养软实力训练，全面提高职业素养、面试技巧、沟通能力等。</p>
        <div style={styles.contain}>
          <div style={styles.table}>
            <Table responsive>
              <thead>
                <tr>
                  <th style={styles.thead}>公司名称</th>
                  <th style={styles.thead}>职 位</th>
                  <th style={styles.thead}>薪 资</th>
                  <th style={styles.thead}>工作经验</th>
                  <th style={styles.thead}>其他</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>爱奇艺</td>
                  <td>web前端开发</td>
                  <td style={{color:'#f6001d'}}>10k-20k</td>
                  <td>经验不限</td>
                  <td>更多></td>
                </tr>
                <tr>
                  <td>爱奇艺</td>
                  <td>web前端开发</td>
                  <td style={{color:'#f6001d'}}>15k-27k</td>
                  <td>一年以上</td>
                  <td>更多></td>
                </tr>
                <tr>
                  <td>国美美信</td>
                  <td>web前端开发</td>
                  <td style={{color:'#f6001d'}}>10k-20k</td>
                  <td>一年以上</td>
                  <td>更多></td>
                </tr>
                <tr>
                  <td>乐视</td>
                  <td>web前端开发</td>
                  <td style={{color:'#f6001d'}}>15k-30k</td>
                  <td>三年以上</td>
                  <td>更多></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div style={styles.btn}>
          <a className="search-more" href='#'>了解更多招聘信息 > </a>
        </div>
      </div>
    )
  }
}

export default Employ;
