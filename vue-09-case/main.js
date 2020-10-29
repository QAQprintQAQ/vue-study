let vue = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1,
      },
      {
        id: 2,
        name: '《UNIX编程》',
        date: '2006-2',
        price: 59.00,
        count: 1,
      },

      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },

      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1,
      }
      ],

    message: '购物车为空,快去逛逛',
  },
  //函数
  methods:{

    /*

    getFinalPrice(price)这个最好放在过滤器(filters)里面
    getFinalPrice(price) {
      return '￥' + price.toFixed(2);//保留两位小数,写在这里的原因是为了实现可复用性

    },

     */

    /*
    getTotalPrice()最好放在计算属性里面(computed)
    totalPrice() {
      let sum = 0;
      for (let i = 0; i < this.books.length; i++) {

        sum += this.books[i].price*this.books[i].count;
      }

      return sum;
    },

     */


    increase(index) {
      console.log('increase()')
      // this.books.count++;//取不到序号,无法实现特定书的增加

      console.log(index+'increase()')
      this.books[index].count++;
    },

    minus(index) {
      console.log(index + ' minus()');//变量连接字符串需要用'+'
      // this.books.count--;//这样做是不能让具体的书的数量增加的,因为取不到数组的下标
      this.books[index].count--;//我们现在还有一个问题,怎么才能让书的数量不会减少到0,甚至是复数！
    },

    removeButton(index) {
      // this.books.pop(index);//pop()函数是用来删除数组末尾元素的,这里需要删除给定序号的元素,因此我们得用到splice(index,1)
      this.books.splice(index, 1);//从当前index开始,删除一个元素,不就是删除index元素本身嘛！

    }
  },
  //过滤器,一般是函数,用于对一些数据进行处理,在处理的数据后面用 '|'+过滤器方法
  filters:{

    showPrice(price){

      return '￥' + price.toFixed(2);
    },

  },

  computed:{
    //  计算总价钱的属性,只是实现了get()的函数
    totalPrice() {
      let sum = 0;
      for (let i = 0; i < this.books.length; i++) {

        sum += this.books[i].price*this.books[i].count;
      }

      return sum;
    },

  },
});


