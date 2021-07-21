function create() {
  let obj = {}
  console.log(arguments)
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}

let c = {'0':{A:1,B:2},'1':22}
console.log([].shift.call([1,2]))