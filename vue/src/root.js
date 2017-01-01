import template from './root.html'
import Vue from 'vue'
import $ from 'jquery'
import Gogo from './gogo.js'
import Todo from './todo.js'
import Zhutu from './zhutu.js'
import Rights from './rights.js'
import Bing from './bing.js'

let AppRoot = Vue.extend({
    template,
    data(){
        return{
         items:[],
         view:'zhutu'
      }
    },
    components:{
        gogo:Gogo,
        todo:Todo,
        zhutu:Zhutu,
        rights:Rights,
        bing:Bing
        
        
    },
    methods:{
        menu(name,event){
            this.view=name
        }
    }
})

export default AppRoot