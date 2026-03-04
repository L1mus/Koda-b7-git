export const dataPromise = (name) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(`say my name ${name}`)
    },1000)
  })
}
