const axios = require('axios');
axios.defaults.headers['X-MBX-APIKEY'] = 'WEMG1J37O9sn9ysFEtpz6JFwRveBAJtLOhyqbHaicnImRrYFSi6eRJSK0fyGlflz';
// 9iUv29ZV88IfedTet4discH05uIfaRb3zb3PRgdL7J0fLcPBmMcDgjYKcdB6zVKB

export const init = function(api){
  axios.get(api)
  .then(function (response) {
    debugger
  })
}




export const listenKey = function(api){
  axios.post(api, {
    timestamp: +new Date
  })
  .then(function (response) {
    debugger
  }).catch((err)=>{
    console.log(err)
  })
}