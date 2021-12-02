function loader(content) {
    console.log('进入到了loader内部');
    // console.log(content)
    return 'hello'
  }
  
  module.exports = loader
  