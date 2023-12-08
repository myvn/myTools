let per = {
  name: "jack",
  age: 18
}
let p = new Proxy(per, {
  get(target, propsName) {
    // return target[propsName]
    return Reflect.get(target, propsName)
  },
  set(target, propsName, value) {
    // target[propsName] = value
    return Reflect.set(target, propsName, value)
  },
  deleteProperty(target, propsName) {
    // delete target[propsName]
    return Reflect.deleteProperty(target, propsName)

  }
})
