window.onload = function(){
  console.log('loaded now new stilasdf')
  if('serviceWorker' in navigator){
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(function(){ console.log("worker registered yo")})
  }
}
