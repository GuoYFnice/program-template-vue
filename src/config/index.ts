const modeUrlObj = (data:string) => {
  switch(data){
    // 生产环境
    case 'production' :{
      return {
      baseURL: '192.168.0.1',
      authBaseURL: ''
      }
    }
    // 开发环境
    case 'development' :{
      return {
      baseURL: '192.168.0.1',
      authBaseURL: ''
      }
    }
    // 测试环境
    case 'test' :{
      return {
      baseURL: '192.168.0.1',
      authBaseURL: ''
      }
    }
  }
  //   // 生产环境
  // 'production': {
  //   baseURL: '192.168.0.1',
  //   authBaseURL: ''
  // },
  // // 开发环境
  // 'development': {
  //   baseURL: '192.168.0.1',
  //   authBaseURL: ''
  // },
  // // 测试环境
  // 'test': {
  //   baseURL: '192.168.0.1',
  //   authBaseURL: ''
  // }
}
export default modeUrlObj(process.env.NODE_ENV)