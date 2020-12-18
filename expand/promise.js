/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-27 15:44:30
 * @LastEditTime: 2020-11-30 13:06:03
 * @LastEditors: HongXuan.Lu
 */
class PromiseA {
  constructor(fn){
    this.status = 'pending'
    this.value = ''
    this.error = ''
    this.onfullfilled = []
    this.onrejected = []
    var resolve = (data)=>{
      if(this.status === "pending"){
        this.status = 'fullfilled'
        this.value = data
        this.onfullfilled.forEach(item=>item())
      }
    }
    var reject = (data)=>{
      if(this.status === 'pending'){
        this.status = 'rejected'
        this.error = data
        this.onrejected.forEach(item=>item())
      }
    }
    try{
      fn(resolve,reject)
    }catch(err){
      console.log(err);
    }
  }
  then(resfn,rejfn){
    resfn = resfn instanceof Function ? resfn : (item)=>item
    rejfn = rejfn instanceof Function ? rejfn : (item)=>item
    // 这里不能用function 否则取不到this
    let p2 = new PromiseA((resolve,reject)=>{
      if(this.status === 'fullfilled'){
        console.log('full');
        var nextval = resfn(this.value) //看这里，如果resfn里面有resolve()，则如果resfn返回promise，仍能向下执行，否则陷入pending
        nextval instanceof PromiseA ? nextval.then(resolve,reject) : resolve(nextval)
      }
      if(this.status === 'rejected'){
        console.log('rej');
        var nextval = resfn(this.error)
        nextval instanceof PromiseA ? nextval.then(resolve,reject) : reject(nextval)
      }
      if(this.status === 'pending'){
        this.onfullfilled.push(()=>{
          var p = resfn(this.value);
          p instanceof PromiseA ? p.then(resolve,reject) : resolve(p)
        })

        this.onrejected.push(()=>{
          var p = rejfn(this.error);
          p instanceof PromiseA ? p.then(resolve,reject) : reject(p)
        })
      }
    })
    return p2
  }
}

PromiseA.resolve = function(val){
  return new PromiseA(function(resolve, reject){
    resolve(val)
  })
};

PromiseA.reject = function(err){
  return new PromiseA(function(resolve, reject){
    reject(err)
  })
} 

PromiseA.race = function(PromiseAs){
  var ret = ""
  function raceP(data,resolve){
    ret = ret === "" ? data : ret
    resolve(ret)
  }
  return new PromiseA(function(resolve, reject){
    for(var i =0 ;i< PromiseAs.length;i++){
      PromiseAs[i].then((data)=>raceP(data,resolve))
    }
  })
} 

// 只实现resolve情况
PromiseA.all = function(PromiseAs){
  var ret = []
  var count = 0
  function raceP(index, data,resolve){
    console.log(index,data,'调用');
    ret[index] = data
    count += 1
    if(count  == PromiseAs.length){
      resolve(ret)
    }
  }
  return new PromiseA(function(resolve, reject){
    for(var i =0 ;i< PromiseAs.length;i++){
      console.log(i);
      PromiseAs[i].then(data=>raceP(i,data,resolve))
    }
  })
}