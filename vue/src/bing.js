import echarts from 'echarts'
import template from './bing.html'
import Vue from 'vue'

var Bing = Vue.extend({
    template,
    data(){
        return{}
    },
    ready(){
              // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('mainss'));
        var myChart2 = echarts.init(document.getElementById('mainss2'));
        this.common(myChart,[7,5,8,15,65,4])
        this.common(myChart2,[17,5,28,14,6,24])
        
        
    },
    methods:{
        common(el,data){
            var option = {
                    title: {
                        text: '衣服日销量'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'pie',
                        data: data
                    }]
              };
          el.setOption(option);
        }
    }
})
export default Bing