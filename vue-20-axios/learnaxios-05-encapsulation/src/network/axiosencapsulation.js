import axios from 'axios';//只需要在axiosencapsulation.js导入axios，其他的地方导入axiosencapsulation.js

//封装axios实例1
const request = function (config,success,failure) {//
  // 当我们的vue组件或者js文件需要网络请求的时候，我们会调用axiosencapsulationljs下的request函数，
  // request函数是对axios实例1的封装！调用request函数的时候需要我们的vue组件或者js文件传入三个参数，
  // 需要网络请求的vue组件或者js文件调用request({},success(),failure()))，{}表示传入的url等配置对象，
  // 当request调用success函数的时候表示网络请求成功并进入success函数里面并将request函数网络请求成功时候的返回数据res作为success函数的参数，之后success函数打印返回的请求数据！
  // 当request调用failure函数的时候表示网络请求失败并进入failure函数里面并将request函数返回的错误信息err作为failure函数的参数，之后failure函数打印错误信息
  // 创建axios实例1
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 8000,

  });

  //这里才是真正的发送网络请求的代码，但是我们有一个问题，vue组件和js代码只调用了request()这个函数，
  // 但是vue组件的真正目的是想进行网络请求并得到返回数据或错误信息，也就是说vue组件调用了这个request函数之后需要得到网络请求的返回数据或者错误信息！
  //我们想一下，axios 的实例instance网络请求之后的请求的结果会返回到instance().then().catch()里面，
  // 也就是说只有一个config对象参数不能将request网络请求成功的请求数据或者失败时候的错误信息返回到vue组件或者js文件request函数调用的地方。
  // 也就是说vue组件调用的地方无法拿到请求结果！！！
  // 那我们的请求结果该怎么才能返回到vue组件或js调用的地方呢？我们可以给request函数再定义两个参数，这两个参数都是函数，
  // 也就是回调(request函数执行的时候，突然遇到自己参数列表里面定义的函数(success函数，failure函数)，
  // 这时候request函数会将执行的权力交给列表里面的success函数或者failure函数并将request返回的请求结果作为success函数或者failure函数的参数，
  // 之后success函数在调用request函数的vue组件或者js里面将request函数的网络请求的返回结果打印出来，这样调用request函数的vue组件或者js就可以得到网络请求的结果了，我们将它打印出来！)！！！
  instance(config)
      .then((res) => {
        // console.log(res);//instance发送的网络请求的成功请求结果(数据)存放在res里面，但是axiosencapsulation.js不需要这个res，
        // 调用axiosencapsulation.js下面的request函数的地方才是真的需要这个网络请求的结果(网络请求成功的结果数据存放在res里面)，
        // 因此需要将这个网络请求的结果res返回到调用request函数的vue组件或者js中，怎么将这个请求成功的结果(里面请求数据)返回到调用这个request函数的vue组件或者js中？
        // 可以通过一个success函数将请求结果res返回到调用request的地方！！！
        success(res);//request函数跑到这个success函数的时候回去调用success函数内容，并且将参数res这个参数传给success
      })
      .catch((err) => {
        // console.log(err);//instance发送的网络请求失败请求结果(数据)存放在err里面，但是axiosencapsulation.js不需要这个err，
        // 调用axiosencapsulation.js下面的request函数的地方才是真的需要这个网络请求的结果(网络请求失败的结果数据存放在err里面)，
        // 因此需要将这个网络请求失败的结果err返回到调用request函数的vue组件或者js中，怎么将这个请求成功的结果(里面请求数据)返回到调用这个request函数的vue组件或者js中？
        // 可以通过一个failure函数将请求失败结果err返回到调用request的地方！！！
        failure(err);//request函数跑到这个failure函数的时候回去调用failure函数内容，并且将参数err这个参数传给failure函数
      });
}


//封装axios实例2
const request2 = function (config) {//传入一个config对象，config对象里面包含baseConfig这个对象，success函数，failure函数！

  // 创建axios实例2
  const instance2 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,

  });

  instance2(config.baseConfig)
      .then((res) => {

        config.success(res);//request函数跑到这个success函数的时候回去调用success函数内容，并且将参数res这个参数传给success
      })
      .catch((err) => {

        config.failure(err);//request函数跑到这个failure函数的时候回去调用failure函数内容，并且将参数err这个参数传给failure函数
      });


}

//封装axios实例3
const request3 = function (config) {
  return new Promise((resolve, reject) => {
    // 创建axios实例3
    const instance3 = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 3000,
    });

    instance3(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
  });
};

//封装axios实例4，这是axios框架的终极方案！！
const request4 = function (config) {
    // 创建axios实例4
    const instance4 = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 3000,
    });
    return instance4(config);
    /*
    instance3(config)//axios的实例instance3为什么会有下面的instance3(config).then().catch()方法呢？证明axios的实例本身返回的就是一个Promise实例！！！！既然这样为什么我们不直接返回这个实例呢？？这样就不需要再使用Promise对象了！！
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
     */

};


//导出封装的axios请求实例
export {
  request,
  request2,
  request3,
  request4,
};