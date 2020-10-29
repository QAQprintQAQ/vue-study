let cpnapp={//cpnapp2.js中的方法是正宗的vue component的默认导出方式
  template:`
    <div> 
      <h4>{{message}}</h4>
      <h4>{{name}}</h4>
      <h4>{{height}}</h4>
      <button v-on:click="btnclick()">转换</button>
    </div>
  `,

  data() {
    return {
      message: 'hello webpack',
      name: 'liwenli',
      height: 178,
    };
  },

  methods: {
    btnclick() {
      this.message = 'hello vue';
      this.name = 'wangshuwei';
      this.height = 165;
    },
  },

};

//封装后需要导出
export {
  cpnapp
};

