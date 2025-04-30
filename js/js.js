 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_2()
echarts_3()
/*echarts_4()*/
echarts_5()
echarts_6()

function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
var data = [67884434, 32592848, 24894477, 24734334, 18739699, 14412879, 14383347, 13446973, 12468034, 10897942, 9492474, 9263631, 7877617, 6464643,]
var titlename = [' 比亚迪 ', ' 特斯拉 ', ' 吉利 ', ' 领克 ', ' 红旗 ', ' 蔚来 ', ' 零跑 ', ' 小鹏 ', ' 宝马 ', ' 上海通用五菱 ', ' 奇瑞 ', ' 极氪 ', ' 长安 ','吉利银河'];
option = {
	grid: {
        left: '0',
		top:'0',
        right: '0',
        bottom: '0%',
       containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick:{ show: false},
        axisLabel: {
            textStyle: {
                color:'#fff'
            },
        },

    }, {
        show: false,
        inverse: true,
        data: data,
        axisLabel: {textStyle: {color: '#fff'}},
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick: { show: false},
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 15,
        itemStyle: {
            normal: {
               barBorderRadius: 50,
                color:'#1089E7',
            }
        },
        label: {
           normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
			   textStyle: {color: 'rgba(255,255,255,.5)'}
            }
        },
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        var chart = echarts.init(document.getElementById("echart3"), "white", {
            renderer:"canvas"
        });

        var option = {
            animation : true,
            tooltip : {
                trigger : "axis",
                axisPointer : {
                    type : "shadow",
                    lineStyle : { color : "#dddc6b" }
                },
                backgroundColor : "rgba(0,0,0,0.7)",
                textStyle : { color : "#fff" }
            },
            grid : {
                left : "10%",
                top : "15%",
                right : "5%",
                bottom : "15%",
                containLabel : true
            },
            xAxis : [{
                type : "category",
                data : ["2023", "2024", "2025"],
                axisLine : {
                    lineStyle : { color : "rgba(255,255,255,0.2)" }
                },
                axisLabel : {
                    color : "#fff",
                    fontSize :12
                }
            }],
            yAxis : [{
                type : "value",
                name : "销量（辆）",
                splitLine : {
                    lineStyle : { color : "rgba(255,255,255,0.1)" }
                },
                axisLabel : {
                    color : "#fff",
                    fontSize :12
                }
            }],
            series : [
                {
                    name : "传统汽车",
                    type : "line", // ←关键修改：柱状图→折线图
                    data : [7476939,7565732,1341710],
                    symbol : "circle", //数据点样式
                    symbolSize :8,
                    lineStyle : {
                        width :3,
                        color : "#5470c6"
                    },
                    itemStyle : {
                        color : "#5470c6",
                        borderColor : "#fff",
                        borderWidth :1
                    },
                    label : {
                        show :true,
                        position :"top",
                        formatter:"{c}辆",
                        color:"#fff"
                    }
                },
                {
                    name : "新能源汽车",
                    type : "line", // ←关键修改：柱状图→折线图
                    data : [10451966,11583491,1834863],
                    symbol : "circle",
                    symbolSize :8,
                    lineStyle : {
                        width :3,
                        color : "#91cc75"
                    },
                    itemStyle : {
                        color : "#91cc75",
                        borderColor : "#fff",
                        borderWidth :1
                    },
                    label : {
                        show :true,
                        position:"top",
                        formatter:"{c}辆",
                        color:"#fff"
                    }
                }
            ],
            legend : {
                data : ["传统汽车","新能源汽车"],
                textStyle : { color:"#fff" },
                right:"10%",
                top:"5%"
            },
            title : {
                text:"传统汽车与新能源汽车年销量趋势",
                textStyle:{ color:"#fff", fontSize:"16" }
            }
        };

        chart.setOption(option);
        window.addEventListener("resize", function() {
            chart.resize();
        });
    }
  /*  function echarts_4() {
        var myChart = echarts.init(document.getElementById('echart4'), 'white', { renderer: 'canvas' });
        var option = {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "series": [{
                "type": "bar",
                "data": [3614715,9947622,3315670,4638641],
                "barWidth": 100,
                "label": {
                    "show": true,
                    "margin": 8
                }
            }],
            "xAxis": [{
                "name": "价格区间",
                "data": ["10万以内","10 - 20万","20 - 30万","30万以上"],
                "splitLine": { "show": true }
            }],
            "yAxis": [{
                "name": "销量（辆）",
                "splitLine": { "show": true }
            }],
            "title": {
                "text": "新能源汽车各价格区间销量分布",
                "textStyle": { color: "#fff" }  // 添加标题颜色
            },
            "tooltip": {
                "trigger": "item",
                "textStyle": { color: "#fff" },  // 添加文字颜色
                "backgroundColor": "rgba(0,0,0,0.7)"  // 添加背景色
            },
            "textStyle": {  // 全局文字样式
                "color": "#fff"
            }
        };

        // 样式调整：坐标轴颜色
        option.xAxis[0].axisLine = { lineStyle: { color: "rgba(255,255,255,.1)" } };
        option.yAxis[0].axisLine = { lineStyle: { color: "rgba(255,255,255,.1)" } };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }*/
    function echarts_5() {
        // 创建容器（复用原DOM ID "echart5"）
        const chartContainer = document.getElementById('echart5');
        chartContainer.style = 'width:300 px; height:160px;'; // 调整样式

        // 初始化图表
        const chart = echarts.init(chartContainer, 'white', { renderer: 'canvas' });
        // 定义数据
        const option = {
            "baseOption": {
                "series": [
                    {
                        "type": "pie",
                        "colorBy": "data",
                        "legendHoverLink": true,
                        "selectedMode": false,
                        "selectedOffset": 10,
                        "clockwise": true,
                        "startAngle": 90,
                        "minAngle": 0,
                        "minShowLabelAngle": 0,
                        "avoidLabelOverlap": true,
                        "stillShowZeroSum": true,
                        "percentPrecision": 2,
                        "showEmptyCircle": true,
                        "emptyCircleStyle": {
                            "color": "lightgray",
                            "borderColor": "#000",
                            "borderWidth": 0,
                            "borderType": "solid",
                            "borderDashOffset": 0,
                            "borderCap": "butt",
                            "borderJoin": "bevel",
                            "borderMiterLimit": 10,
                            "opacity": 1
                        },
                        "data": [
                            {
                                "name": "\u5c71\u897f\u7701",
                                "value": 60.89
                            },
                            {
                                "name": "\u4e0a\u6d77\u5e02",
                                "value": 60.0
                            },
                            {
                                "name": "\u6d77\u5357\u7701",
                                "value": 58.2
                            },
                            {
                                "name": "\u5929\u6d25\u5e02",
                                "value": 55.3
                            },
                            {
                                "name": "\u6d59\u6c5f\u7701",
                                "value": 50.3
                            }
                        ],
                        "radius": [
                            "0%",
                            "75%"
                        ],
                        "center": [
                            "50%",
                            "50%"
                        ],
                        "label": {
                            "formatter": "{b}:{c}%"
                        },
                        "labelLine": {
                            "show": true,
                            "showAbove": false,
                            "length": 15,
                            "length2": 15,
                            "smooth": false,
                            "minTurnAngle": 90,
                            "maxSurfaceAngle": 90
                        },
                        "rippleEffect": {
                            "show": true,
                            "brushType": "stroke",
                            "scale": 2.5,
                            "period": 4
                        }
                    }
                ],
                "timeline": {
                    "axisType": "category",
                    "currentIndex": 0,
                    "orient": "horizontal",
                    "autoPlay": false,
                    "controlPosition": "left",
                    "loop": true,
                    "show": true,
                    "left": "10%",
                    "right": "10%",
                    "bottom": "-5px",  // 关键修改：时间轴下移 20px
                    "lineStyle": {
                        "color": "#fff",
                        "width": 2
                    },
                    "label": {
                        "textStyle": {
                            "color": "#fff",
                            "fontSize": 10
                        }
                    },
                    "controlStyle": {
                        "show": true,
                        "itemSize": 15,
                        "itemGap": 10,
                        "normal": {
                            "color": "#666",
                            "borderColor": "#666"
                        },
                        "emphasis": {
                            "color": "#fff",
                            "borderColor": "#fff"
                        }
                    },
                    "data": ["2022年", "2023年", "2024年"]
                },
                "legend": [
                    {
                        "data": [
                            "\u5c71\u897f\u7701",
                            "\u4e0a\u6d77\u5e02",
                            "\u6d77\u5357\u7701",
                            "\u5929\u6d25\u5e02",
                            "\u6d59\u6c5f\u7701"
                        ],
                        "selected": {},
                        "show": false,
                        "left": "left",
                        "top": "bottom",
                        "orient": "vertical",
                        "padding": 5,
                        "itemGap": 10,
                        "itemWidth": 25,
                        "itemHeight": 14,
                        "backgroundColor": "transparent",
                        "borderColor": "#ccc",
                        "borderRadius": 0,
                        "pageButtonItemGap": 5,
                        "pageButtonPosition": "end",
                        "pageFormatter": "{current}/{total}",
                        "pageIconColor": "#2f4554",
                        "pageIconInactiveColor": "#aaa",
                        "pageIconSize": 15,
                        "animationDurationUpdate": 800,
                        "selector": false,
                        "selectorPosition": "auto",
                        "selectorItemGap": 7,
                        "selectorButtonGap": 10
                    }
                ] },
            "options": [
                {
                    "legend": [
                        {
                            "data": [
                                "\u4e0a\u6d77\u5e02",
                                "\u6d77\u5357\u7701",
                                "\u9655\u897f\u7701",
                                "\u5929\u6d25\u5e02",
                                "\u91cd\u5e86\u5e02"
                            ],
                            "selected": {},
                            "show": false,
                            "left": "left",
                            "top": "bottom",
                            "orient": "vertical",
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14,
                            "backgroundColor": "transparent",
                            "borderColor": "#ccc",
                            "borderRadius": 0,
                            "pageButtonItemGap": 5,
                            "pageButtonPosition": "end",
                            "pageFormatter": "{current}/{total}",
                            "pageIconColor": "#2f4554",
                            "pageIconInactiveColor": "#aaa",
                            "pageIconSize": 15,
                            "animationDurationUpdate": 800,
                            "selector": false,
                            "selectorPosition": "auto",
                            "selectorItemGap": 7,
                            "selectorButtonGap": 10
                        }
                    ],
                    "series": [
                        {
                            "type": "pie",
                            "colorBy": "data",
                            "legendHoverLink": true,
                            "selectedMode": false,
                            "selectedOffset": 10,
                            "clockwise": true,
                            "startAngle": 90,
                            "minAngle": 0,
                            "minShowLabelAngle": 0,
                            "avoidLabelOverlap": true,
                            "stillShowZeroSum": true,
                            "percentPrecision": 2,
                            "showEmptyCircle": true,
                            "emptyCircleStyle": {
                                "color": "lightgray",
                                "borderColor": "#000",
                                "borderWidth": 0,
                                "borderType": "solid",
                                "borderDashOffset": 0,
                                "borderCap": "butt",
                                "borderJoin": "bevel",
                                "borderMiterLimit": 10,
                                "opacity": 1
                            },
                            "data": [
                                {
                                    "name": "\u4e0a\u6d77\u5e02",
                                    "value": 45.3
                                },
                                {
                                    "name": "\u6d77\u5357\u7701",
                                    "value": 40.0
                                },
                                {
                                    "name": "\u9655\u897f\u7701",
                                    "value": 32.0
                                },
                                {
                                    "name": "\u5929\u6d25\u5e02",
                                    "value": 30.0
                                },
                                {
                                    "name": "\u91cd\u5e86\u5e02",
                                    "value": 29.0
                                }
                            ],
                            "radius": [
                                "0%",
                                "75%"
                            ],
                            "center": [
                                "50%",
                                "50%"
                            ],
                            "label": {
                                "formatter": "{b}:{c}%"
                            },
                            "labelLine": {
                                "show": true,
                                "showAbove": false,
                                "length": 15,
                                "length2": 15,
                                "smooth": false,
                                "minTurnAngle": 90,
                                "maxSurfaceAngle": 90
                            },
                            "rippleEffect": {
                                "show": true,
                                "brushType": "stroke",
                                "scale": 2.5,
                                "period": 4
                            }
                        }
                    ],
                    "title": [
                        {
                            "show": true,
                            "text": "2022\u5e74",
                            "target": "blank",
                            "subtarget": "blank",
                            "padding": 5,
                            "itemGap": 10,
                            "textAlign": "auto",
                            "textVerticalAlign": "auto",
                            "triggerEvent": false,
                            "textStyle": {  // 新增 textStyle 配置
                                "color": "#fff",  // 修改颜色为白色
                                "fontSize": 9
                            }
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "showContent": true,
                        "alwaysShowContent": false,
                        "showDelay": 0,
                        "hideDelay": 100,
                        "enterable": false,
                        "confine": false,
                        "appendToBody": false,
                        "transitionDuration": 0.4,
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "color": [
                        "#5470c6",
                        "#91cc75",
                        "#fac858",
                        "#ee6666",
                        "#73c0de",
                        "#3ba272",
                        "#fc8452",
                        "#9a60b4",
                        "#ea7ccc"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u4e0a\u6d77\u5e02",
                                "\u6d77\u5357\u7701",
                                "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
                                "\u6c5f\u82cf\u7701",
                                "\u91cd\u5e86\u5e02"
                            ],
                            "selected": {},
                            "show": false,
                            "left": "left",
                            "top": "bottom",
                            "orient": "vertical",
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14,
                            "backgroundColor": "transparent",
                            "borderColor": "#ccc",
                            "borderRadius": 0,
                            "pageButtonItemGap": 5,
                            "pageButtonPosition": "end",
                            "pageFormatter": "{current}/{total}",
                            "pageIconColor": "#2f4554",
                            "pageIconInactiveColor": "#aaa",
                            "pageIconSize": 15,
                            "animationDurationUpdate": 800,
                            "selector": false,
                            "selectorPosition": "auto",
                            "selectorItemGap": 7,
                            "selectorButtonGap": 10
                        }
                    ],
                    "series": [
                        {
                            "type": "pie",
                            "colorBy": "data",
                            "legendHoverLink": true,
                            "selectedMode": false,
                            "selectedOffset": 10,
                            "clockwise": true,
                            "startAngle": 90,
                            "minAngle": 0,
                            "minShowLabelAngle": 0,
                            "avoidLabelOverlap": true,
                            "stillShowZeroSum": true,
                            "percentPrecision": 2,
                            "showEmptyCircle": true,
                            "emptyCircleStyle": {
                                "color": "lightgray",
                                "borderColor": "#000",
                                "borderWidth": 0,
                                "borderType": "solid",
                                "borderDashOffset": 0,
                                "borderCap": "butt",
                                "borderJoin": "bevel",
                                "borderMiterLimit": 10,
                                "opacity": 1
                            },
                            "data": [
                                {
                                    "name": "\u4e0a\u6d77\u5e02",
                                    "value": 55.0
                                },
                                {
                                    "name": "\u6d77\u5357\u7701",
                                    "value": 50.8
                                },
                                {
                                    "name": "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
                                    "value": 45.0
                                },
                                {
                                    "name": "\u6c5f\u82cf\u7701",
                                    "value": 41.4
                                },
                                {
                                    "name": "\u91cd\u5e86\u5e02",
                                    "value": 41.0
                                }
                            ],
                            "radius": [
                                "0%",
                                "75%"
                            ],
                            "center": [
                                "50%",
                                "50%"
                            ],
                            "label": {
                                "formatter": "{b}:{c}%"
                            },
                            "labelLine": {
                                "show": true,
                                "showAbove": false,
                                "length": 15,
                                "length2": 15,
                                "smooth": false,
                                "minTurnAngle": 90,
                                "maxSurfaceAngle": 90
                            },
                            "rippleEffect": {
                                "show": true,
                                "brushType": "stroke",
                                "scale": 2.5,
                                "period": 4
                            }
                        }
                    ],
                    "title": [
                        {
                            "show": true,
                            "text": "2023\u5e74",
                            "target": "blank",
                            "subtarget": "blank",
                            "padding": 5,
                            "itemGap": 10,
                            "textAlign": "auto",
                            "textVerticalAlign": "auto",
                            "triggerEvent": false,
                            "textStyle": {  // 新增 textStyle 配置
                                "color": "#fff"  // 修改颜色为白色
                            }
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "showContent": true,
                        "alwaysShowContent": false,
                        "showDelay": 0,
                        "hideDelay": 100,
                        "enterable": false,
                        "confine": false,
                        "appendToBody": false,
                        "transitionDuration": 0.4,
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "color": [
                        "#5470c6",
                        "#91cc75",
                        "#fac858",
                        "#ee6666",
                        "#73c0de",
                        "#3ba272",
                        "#fc8452",
                        "#9a60b4",
                        "#ea7ccc"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u5c71\u897f\u7701",
                                "\u4e0a\u6d77\u5e02",
                                "\u6d77\u5357\u7701",
                                "\u5929\u6d25\u5e02",
                                "\u6d59\u6c5f\u7701"
                            ],
                            "selected": {},
                            "show": false,
                            "left": "left",
                            "top": "bottom",
                            "orient": "vertical",
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14,
                            "backgroundColor": "transparent",
                            "borderColor": "#ccc",
                            "borderRadius": 0,
                            "pageButtonItemGap": 5,
                            "pageButtonPosition": "end",
                            "pageFormatter": "{current}/{total}",
                            "pageIconColor": "#2f4554",
                            "pageIconInactiveColor": "#aaa",
                            "pageIconSize": 15,
                            "animationDurationUpdate": 800,
                            "selector": false,
                            "selectorPosition": "auto",
                            "selectorItemGap": 7,
                            "selectorButtonGap": 10
                        }
                    ],
                    "series": [
                        {
                            "type": "pie",
                            "colorBy": "data",
                            "legendHoverLink": true,
                            "selectedMode": false,
                            "selectedOffset": 10,
                            "clockwise": true,
                            "startAngle": 90,
                            "minAngle": 0,
                            "minShowLabelAngle": 0,
                            "avoidLabelOverlap": true,
                            "stillShowZeroSum": true,
                            "percentPrecision": 2,
                            "showEmptyCircle": true,
                            "emptyCircleStyle": {
                                "color": "lightgray",
                                "borderColor": "#000",
                                "borderWidth": 0,
                                "borderType": "solid",
                                "borderDashOffset": 0,
                                "borderCap": "butt",
                                "borderJoin": "bevel",
                                "borderMiterLimit": 10,
                                "opacity": 1
                            },
                            "data": [
                                {
                                    "name": "\u5c71\u897f\u7701",
                                    "value": 60.89
                                },
                                {
                                    "name": "\u4e0a\u6d77\u5e02",
                                    "value": 60.0
                                },
                                {
                                    "name": "\u6d77\u5357\u7701",
                                    "value": 58.2
                                },
                                {
                                    "name": "\u5929\u6d25\u5e02",
                                    "value": 55.3
                                },
                                {
                                    "name": "\u6d59\u6c5f\u7701",
                                    "value": 50.3
                                }
                            ],
                            "radius": [
                                "0%",
                                "75%"
                            ],
                            "center": [
                                "50%",
                                "50%"
                            ],
                            "label": {
                                "formatter": "{b}:{c}%"
                            },
                            "labelLine": {
                                "show": true,
                                "showAbove": false,
                                "length": 15,
                                "length2": 15,
                                "smooth": false,
                                "minTurnAngle": 90,
                                "maxSurfaceAngle": 90
                            },
                            "rippleEffect": {
                                "show": true,
                                "brushType": "stroke",
                                "scale": 2.5,
                                "period": 4
                            }
                        }
                    ],
                    "title": [
                        {
                            "show": true,
                            "text": "2024\u5e74",
                            "target": "blank",
                            "subtarget": "blank",
                            "padding": 5,
                            "itemGap": 10,
                            "textAlign": "auto",
                            "textVerticalAlign": "auto",
                            "triggerEvent": false,
                            "textStyle": {  // 新增 textStyle 配置
                                "color": "#fff"  // 修改颜色为白色
                            }
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "showContent": true,
                        "alwaysShowContent": false,
                        "showDelay": 0,
                        "hideDelay": 100,
                        "enterable": false,
                        "confine": false,
                        "appendToBody": false,
                        "transitionDuration": 0.4,
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "color": [
                        "#5470c6",
                        "#91cc75",
                        "#fac858",
                        "#ee6666",
                        "#73c0de",
                        "#3ba272",
                        "#fc8452",
                        "#9a60b4",
                        "#ea7ccc"
                    ]
                } ]
        };
        chart.setOption(option);
        window.addEventListener("resize", function() {
            chart.resize();
        });
    }
    function echarts_6() {
        var myChart = echarts.init(document.getElementById('echart6'));
        var option = {
            title: {
                text: '新能源汽车各价格区间销量分布',
                textStyle: { color: '#fff' }
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,0.7)',
                textStyle: { color: '#fff' }
            },
            xAxis: {
                type: 'category',
                data: ['10万以内', '10 - 20万', '20 - 30万', '30万以上'],
                axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
                axisLabel: { color: '#fff' }
            },
            yAxis: {
                type: 'value',
                name: '销量（辆）',
                splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
                axisLabel: { color: '#fff' }
            },
            series: [{
                type: 'bar',
                data: [9614715, 3947622, 3315670, 4638641],
                barWidth: '60%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#03b48e' },
                        { offset: 1, color: '#3893e5' }
                    ])
                },
                label: {
                    show: true,
                    position: 'top',
                    color: '#fff'
                }
            }],
            grid: {
                containLabel: true,
                left: '10%',
                right: '10%',
                bottom: '10%'
            },
            textStyle: { color: '#fff' }
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
})



		
		
		


		









