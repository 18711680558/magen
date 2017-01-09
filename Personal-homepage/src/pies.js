import echarts from 'echarts'
import template from './pies.html'
import Vue from 'vue'
import $ from 'jquery'

var Pies = Vue.extend({
    template,
    ready(){
       var myChart = echarts.init(document.getElementById('main'));
       var option = {
           backgroundColor: '#2c343c',
           title: {
           text: '手机销量',
           left: 'center',
           top: 20,
           textStyle: {
           color: '#ccc'
          }
      },

           tooltip : {
           trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

           visualMap: {
           show: false,
           min: 80,
           max: 600,
           inRange: {
            colorLightness: [0, 1]
         }
      },
           series : [
          { 
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'华为'},
                {value:310, name:'oppo'},
                {value:274, name:'小米'},
                {value:235, name:'samsung'},
                {value:400, name:'iphone'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
        myChart.setOption(option);     
   }
})
export default Pies