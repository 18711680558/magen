import echarts from 'echarts'
import template from './rights.html'
import Vue from 'vue'

var Rights = Vue.extend({
    template,
    data(){
        return{}
    },
    ready(){
              // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('mains'));
        var myChart2 = echarts.init(document.getElementById('mains2'));
        this.common(myChart,[5, 20, 36, 30, 32, 20])
        this.common(myChart2,[13, 8, 26, 28, 19, 28])

        // 指定图表的配置项和数据
        
    },
    methods:{
        common(el,data){
            var option = {
            title: {
                text: '手机日销售'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["小米","三星","苹果","华为","OPPO","魅族"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        el.setOption(option);
    }
    }
})
export default Rights