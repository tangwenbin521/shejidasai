// pie_year.js
document.addEventListener('DOMContentLoaded', function() {
    // 创建容器
    const chartContainer = document.createElement('div');
    chartContainer.id = '44694c951d8f41c6a512c3cd5f6030d8';
    chartContainer.className = 'chart-container';
    chartContainer.style = 'width:900px; height:500px;';
    document.body.appendChild(chartContainer);

    // 初始化图表
    const chart = echarts.init(
        document.getElementById('44694c951d8f41c6a512c3cd5f6030d8'),
        'white',
        { renderer: 'canvas' }
    );

    // 配置项
    const option = {
        // 此处与原HTML中的option_44694c951d8f41c6a512c3cd5f6030d8完全一致
        // 为节省篇幅，配置内容请直接复制原HTML中从 `baseOption` 到 `options` 的完整配置
        // （确保JSON结构完整，注意不要遗漏逗号或括号）
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
                "rewind": false,
                "show": true,
                "inverse": false,
                "bottom": "-5px",
                "progress": {},
                "data": [
                    "2022\u5e74",
                    "2023\u5e74",
                    "2024\u5e74"
                ]
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
                    "show": true,
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
                    "show": true,
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
                    "text": "2022\u5e74\u4e2d\u56fd\u65b0\u80fd\u6e90\u6c7d\u8f66\u6e17\u900f\u7387Top5\u7701\u4efd",
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
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
                        "show": true,
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
                        "text": "2023\u5e74\u4e2d\u56fd\u65b0\u80fd\u6e90\u6c7d\u8f66\u6e17\u900f\u7387Top5\u7701\u4efd",
                        "target": "blank",
                        "subtarget": "blank",
                        "padding": 5,
                        "itemGap": 10,
                        "textAlign": "auto",
                        "textVerticalAlign": "auto",
                        "triggerEvent": false
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
                        "show": true,
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
                        "text": "2024\u5e74\u4e2d\u56fd\u65b0\u80fd\u6e90\u6c7d\u8f66\u6e17\u900f\u7387Top5\u7701\u4efd",
                        "target": "blank",
                        "subtarget": "blank",
                        "padding": 5,
                        "itemGap": 10,
                        "textAlign": "auto",
                        "textVerticalAlign": "auto",
                        "triggerEvent": false
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

    // 应用配置
    chart.setOption(option);
});