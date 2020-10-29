export default {//大括号是必须的,在main.js中导入的时候只需要 import cpnapp2 from "./vue/cpnapp2";
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
