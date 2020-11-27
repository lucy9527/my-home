class Promise {
  construtor(fn){
    var status = 'pending'
    var value = ''
    var error = ''
    var onfullfilled = []
    var onrejected = []
    var resolve = (value)=>{
      status = 'fullfilled'
      this.
      onfullfilled.forEach(item=>item())
    }
    var reject = ()=>{
      status = 'rejected'
      onrejected.forEach(item=>item())
    }
    try{
      fn()
    }catch(err){
      console.log(err);
    }
  }
  then(resfn,rejfn){
    res = res instanceof Function ? res : ()=>{}
    rej = rej instanceof Function ? rej : ()=>{}
    var value = this.data
    this.fullfilled.push(res)
    this.rejected.push(rej)
    if(this.status === 'fullfilled'){
      var ret = this.fullfilled.forEach(item)
    }
  }
}