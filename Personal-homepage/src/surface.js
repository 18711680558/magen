import $ from 'jquery'
import Vue from 'vue'
import template from './surface.html'

let Surface=Vue.extend({
    
    template,
    data(){
        return{
         items:[]
      }
    },
    
    computed : {
        size(){
            return this.items.length
        }
    },
    
    created (){
        var self = this
        $.ajax({
            url : '/datas/user_lick.json',
            success : function(datas) {
                self.items = datas.items
                self.count = datas.count
            }
        })
    }
    
})
export default Surface