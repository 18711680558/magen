import echarts from 'echarts'
import template from './zhutu.html'
import Vue from 'vue'

var zhuTu = Vue.extend({
    template,
    data(){
       return{} 
    },
    ready(){
              // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        var myChart2 = echarts.init(document.getElementById('main2'));
        this.common(myChart,[15,5,23,36,12,25])
        this.common(myChart2,[25,15,13,26,32,5])

        // 指定图表的配置项和数据

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
                    type: 'bar',
                    data: data
                }]
            };

        // 使用刚指定的配置项和数据显示图表。
         el.setOption(option);
       }
    }
})
export default zhuTu