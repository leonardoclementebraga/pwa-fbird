if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
    .then((reg)=>{
      console.log('ServiceWorker registrado', reg)
    }).catch((error)=>{
      console.log('ServiceWorker não registrado',error)
    })
  })
}