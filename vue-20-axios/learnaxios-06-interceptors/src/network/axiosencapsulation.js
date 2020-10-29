import axios from 'axios';

//封装axios实例instance，这是axios框架的终极方案！！
const request = function (config) {
  //axios全局拦截器！
  // axios.interceptors.request.use();// 这是axios全局拦截器，一般不使用
  //  创建一个axios实例instance
    const instance = axios.create({// 创建axios实例4
      baseURL: 'http://123.207.32.32:8000',
      timeout: 3000,


    });

  // axios的实例instance拦截器，这个拦截器必须在创建axios实例instance之后使用！！！不然会报instance.interceptors undefined!
  instance.interceptors.request.use((config) => {//请求发送成功拦截器
    console.log(config);//请求发送成功时候打印config参数信息，注意这里不是res(因为请求还没有响应呢，这里只能获取到请求的config参数信息)
    return config;//拦截下来参数配置后要还回去，要不然网络请求将会在这里中断，发送网络请求的地方接收不到响应数据。
  }, (err) => {//请求发送不成功的时候的拦截器
    console.log(err);//如果发送请求失败则打印失败信息

  });//请求拦截器

  instance.interceptors.response.use((res) => {//响应拦截器
    console.log(res);//打印响应成功的响应数据
    return res;//拦截下响应数据之后，我们应该还回去，要不然网络请求将会在这里中断，发送网络请求的地方接收不到响应数据！
  }, (err) => {
    console.log(err);//打印响应失败的错误信息
  });
  return instance(config);


};

//导出封装的axios请求实例
export {
  request,
};