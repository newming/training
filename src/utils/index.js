import axios from 'axios';

function postPhone(num) {
  return axios.post('http://digitalcity.duopingshidai.com', num)
    .then((res) => (
      {msg:res.data}
    ))
    .catch(function (error) {
      console.log(error);
    });
}
export { postPhone };
