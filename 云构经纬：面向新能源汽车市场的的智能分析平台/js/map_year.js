// map_year.js

// 封装在DOM加载事件中
document.addEventListener('DOMContentLoaded', function() {
    // 修改容器ID为'map'
    const container = document.getElementById('map');
    if (!container) {
        console.error('地图容器未找到！');
        return;
    }

    // 初始化图表
    const chart = echarts.init(container, 'white', { renderer: 'canvas' });

    // 使用原map_year.js的完整配置（需保持原配置结构）
    const option = {
        "baseOption": {
            "series": [
                {
                    "type": "map",
                    "name": "\u65b0\u80fd\u6e90\u6c7d\u8f66\u4fdd\u6709\u91cf(\u4e07\u8f86)",
                    "label": {
                        "show": true,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "map": "china",
                    "data": [
                        {
                            "name": "\u5e7f\u4e1c",
                            "value": "379"
                        },
                        {
                            "name": "\u6d59\u6c5f",
                            "value": "245"
                        },
                        {
                            "name": "\u6c5f\u82cf",
                            "value": "269.1"
                        },
                        {
                            "name": "\u5c71\u4e1c",
                            "value": "260"
                        },
                        {
                            "name": "\u6cb3\u5357",
                            "value": "200"
                        },
                        {
                            "name": "\u4e0a\u6d77",
                            "value": "164.5"
                        },
                        {
                            "name": "\u5317\u4eac",
                            "value": "100"
                        },
                        {
                            "name": "\u56db\u5ddd",
                            "value": "100"
                        },
                        {
                            "name": "\u6e56\u5317",
                            "value": "50"
                        },
                        {
                            "name": "\u6e56\u5357",
                            "value": "41.4"
                        },
                        {
                            "name": "\u5b89\u5fbd",
                            "value": "107.6"
                        },
                        {
                            "name": "\u798f\u5efa",
                            "value": "61.6"
                        },
                        {
                            "name": "\u6cb3\u5317",
                            "value": "61.6"
                        },
                        {
                            "name": "\u5e7f\u897f",
                            "value": "92.37"
                        },
                        {
                            "name": "\u6c5f\u897f",
                            "value": "62"
                        },
                        {
                            "name": "\u91cd\u5e86",
                            "value": "65"
                        },
                        {
                            "name": "\u9655\u897f",
                            "value": "52.87"
                        },
                        {
                            "name": "\u4e91\u5357",
                            "value": "40"
                        },
                        {
                            "name": "\u8d35\u5dde",
                            "value": "41.1"
                        },
                        {
                            "name": "\u5c71\u897f",
                            "value": "59.44"
                        },
                        {
                            "name": "\u5185\u8499\u53e4",
                            "value": "32.11"
                        },
                        {
                            "name": "\u8fbd\u5b81",
                            "value": "39"
                        },
                        {
                            "name": "\u5409\u6797",
                            "value": "15"
                        },
                        {
                            "name": "\u9ed1\u9f99\u6c5f",
                            "value": "8"
                        },
                        {
                            "name": "\u6d77\u5357",
                            "value": "30.4"
                        },
                        {
                            "name": "\u7518\u8083",
                            "value": "15"
                        },
                        {
                            "name": "\u5b81\u590f",
                            "value": "11.27"
                        },
                        {
                            "name": "\u65b0\u7586",
                            "value": "15"
                        },
                        {
                            "name": "\u9752\u6d77",
                            "value": "5"
                        },
                        {
                            "name": "\u897f\u85cf",
                            "value": "1.5"
                        },
                        {
                            "name": "\u5929\u6d25",
                            "value": "50.03"
                        },
                        {
                            "name": "\u53f0\u6e7e",
                            "value": "30"
                        }
                    ],
                    "roam": true,
                    "aspectScale": 0.75,
                    "nameProperty": "name",
                    "selectedMode": false,
                    "zoom": 1,
                    "zlevel": 0,
                    "z": 2,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "mapValueCalculation": "sum",
                    "showLegendSymbol": false,
                    "emphasis": {}
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
            "visualMap": {
                "show": true,
                "type": "piecewise",
                "min": 0,
                "max": 380,
                "inRange": {
                    "color": [
                        "#FFF1DA",
                        "#FF4500"
                    ]
                },
                "calculable": true,
                "inverse": false,
                "splitNumber": 10,
                "hoverLink": true,
                "orient": "vertical",
                "padding": 5,
                "showLabel": true,
                "itemWidth": 20,
                "itemHeight": 14,
                "borderWidth": 0
            },
            "legend": [
                {
                    "data": [
                        "\u65b0\u80fd\u6e90\u6c7d\u8f66\u4fdd\u6709\u91cf(\u4e07\u8f86)"
                    ],
                    "selected": {},
                    "show": false,
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
            ]
        },
        "options": [
            {
                "legend": [
                    {
                        "data": [
                            "\u65b0\u80fd\u6e90\u6c7d\u8f66\u4fdd\u6709\u91cf(\u4e07\u8f86)"
                        ],
                        "selected": {},
                        "show": false,
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
                        "type": "map",
                        "name": "\u65b0\u80fd\u6e90\u6c7d\u8f66\u4fdd\u6709\u91cf(\u4e07\u8f86)",
                        "label": {
                            "show": false,
                            "margin": 8,
                            "valueAnimation": false
                        },
                        "map": "china",
                        "data": [
                            {
                                "name": "\u5e7f\u4e1c",
                                "value": "146.64"
                            },
                            {
                                "name": "\u6d59\u6c5f",
                                "value": "134.82"
                            },
                            {
                                "name": "\u6c5f\u82cf",
                                "value": "50.5"
                            },
                            {
                                "name": "\u5c71\u4e1c",
                                "value": "81"
                            },
                            {
                                "name": "\u6cb3\u5357",
                                "value": "92"
                            },
                            {
                                "name": "\u4e0a\u6d77",
                                "value": "94.5"
                            },
                            {
                                "name": "\u5317\u4eac",
                                "value": "61"
                            },
                            {
                                "name": "\u56db\u5ddd",
                                "value": "55.6"
                            },
                            {
                                "name": "\u6e56\u5317",
                                "value": "29.3"
                            },
                            {
                                "name": "\u6e56\u5357",
                                "value": "30.6"
                            },
                            {
                                "name": "\u5b89\u5fbd",
                                "value": "36.8"
                            },
                            {
                                "name": "\u798f\u5efa",
                                "value": "10"
                            },
                            {
                                "name": "\u6cb3\u5317",
                                "value": "10"
                            },
                            {
                                "name": "\u5e7f\u897f",
                                "value": "40"
                            },
                            {
                                "name": "\u6c5f\u897f",
                                "value": "20"
                            },
                            {
                                "name": "\u91cd\u5e86",
                                "value": "26"
                            },
                            {
                                "name": "\u9655\u897f",
                                "value": "21"
                            },
                            {
                                "name": "\u4e91\u5357",
                                "value": "10.5"
                            },
                            {
                                "name": "\u8d35\u5dde",
                                "value": "15.95"
                            },
                            {
                                "name": "\u5c71\u897f",
                                "value": "28.75"
                            },
                            {
                                "name": "\u5185\u8499\u53e4",
                                "value": "5.6"
                            },
                            {
                                "name": "\u8fbd\u5b81",
                                "value": "10.23"
                            },
                            {
                                "name": "\u5409\u6797",
                                "value": "5"
                            },
                            {
                                "name": "\u9ed1\u9f99\u6c5f",
                                "value": "1.3"
                            },
                            {
                                "name": "\u6d77\u5357",
                                "value": "13.9"
                            },
                            {
                                "name": "\u7518\u8083",
                                "value": "5.4"
                            },
                            {
                                "name": "\u5b81\u590f",
                                "value": "2.5"
                            },
                            {
                                "name": "\u65b0\u7586",
                                "value": "4.7"
                            },
                            {
                                "name": "\u9752\u6d77",
                                "value": "1"
                            },
                            {
                                "name": "\u897f\u85cf",
                                "value": "0.24"
                            },
                            {
                                "name": "\u5929\u6d25",
                                "value": "38"
                            },
                            {
                                "name": "\u53f0\u6e7e",
                                "value": "10"
                            }
                        ],
                        "roam": true,
                        "aspectScale": 0.75,
                        "nameProperty": "name",
                        "selectedMode": false,
                        "zoom": 1,
                        "zlevel": 0,
                        "z": 2,
                        "seriesLayoutBy": "column",
                        "datasetIndex": 0,
                        "mapValueCalculation": "sum",
                        "showLegendSymbol": false,
                        "emphasis": {}
                    }
                ],
                "title": [
                    {
                        "show": true,
                        "text": "2022\u5e74\u4e2d\u56fd\u5404\u65b0\u80fd\u6e90\u6c7d\u8f66\u5206\u5e03",
                        "target": "blank",
                        "subtarget": "blank",
                        "padding": 5,
                        "itemGap": 10,
                        "left": "center", // 添加这行，实现水平居中
                        "top": "top", // 控制垂直位置
                        "textAlign": "center",
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
                "visualMap": {
                    "show": true,
                    "type": "piecewise",
                    "min": 0,
                    "max": 380,
                    "inRange": {
                        "color": [
                            "#FFF1DA",
                            "#FF4500"
                        ]
                    },
                    "calculable": true,
                    "inverse": false,
                    "splitNumber": 10,
                    "hoverLink": true,
                    "orient": "vertical",
                    "padding": 5,
                    "showLabel": true,
                    "itemWidth": 20,
                    "itemHeight": 14,
                    "borderWidth": 0
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
                            "\u65b0\u80fd\u6e90\u6c7d\u8f66\u4fdd\u6709\u91cf(\u4e07\u8f86)"
                        ],
                        "selected": {},
                        "show": false,
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
                        "type": "map",
                        "name": "\u65b0\u80fd\u6e90\u6c7d\u8f66\u4fdd\u6709\u91cf(\u4e07\u8f86)",
                        "label": {"left": "center",
                            "show": false,
                            "margin": 8,
                            "valueAnimation": false
                        },
                        "map": "china",
                        "data": [
                            {
                                "name": "\u5e7f\u4e1c",
                                "value": "289"
                            },
                            {
                                "name": "\u6d59\u6c5f",
                                "value": "165.2"
                            },
                            {
                                "name": "\u6c5f\u82cf",
                                "value": "209.23"
                            },
                            {
                                "name": "\u5c71\u4e1c",
                                "value": "165.9"
                            },
                            {
                                "name": "\u6cb3\u5357",
                                "value": "145.9"
                            },
                            {
                                "name": "\u4e0a\u6d77",
                                "value": "128.8"
                            },
                            {
                                "name": "\u5317\u4eac",
                                "value": "77.3"
                            },
                            {
                                "name": "\u56db\u5ddd",
                                "value": "89.63"
                            },
                            {
                                "name": "\u6e56\u5317",
                                "value": "38.8"
                            },
                            {
                                "name": "\u6e56\u5357",
                                "value": "36"
                            },
                            {
                                "name": "\u5b89\u5fbd",
                                "value": "60"
                            },
                            {
                                "name": "\u798f\u5efa",
                                "value": "34"
                            },
                            {
                                "name": "\u6cb3\u5317",
                                "value": "32"
                            },
                            {
                                "name": "\u5e7f\u897f",
                                "value": "64.7"
                            },
                            {
                                "name": "\u6c5f\u897f",
                                "value": "41.6"
                            },
                            {
                                "name": "\u91cd\u5e86",
                                "value": "45"
                            },
                            {
                                "name": "\u9655\u897f",
                                "value": "39.77"
                            },
                            {
                                "name": "\u4e91\u5357",
                                "value": "32.6"
                            },
                            {
                                "name": "\u8d35\u5dde",
                                "value": "27.48"
                            },
                            {
                                "name": "\u5c71\u897f",
                                "value": "34.64"
                            },
                            {
                                "name": "\u5185\u8499\u53e4",
                                "value": "14.16"
                            },
                            {
                                "name": "\u8fbd\u5b81",
                                "value": "10.8"
                            },
                            {
                                "name": "\u5409\u6797",
                                "value": "6.8"
                            },
                            {
                                "name": "\u9ed1\u9f99\u6c5f",
                                "value": "4.5"
                            },
                            {
                                "name": "\u6d77\u5357",
                                "value": "24.4"
                            },
                            {
                                "name": "\u7518\u8083",
                                "value": "9.79"
                            },
                            {
                                "name": "\u5b81\u590f",
                                "value": "5.36"
                            },
                            {
                                "name": "\u65b0\u7586",
                                "value": "11.26"
                            },
                            {
                                "name": "\u9752\u6d77",
                                "value": "2"
                            },
                            {
                                "name": "\u897f\u85cf",
                                "value": "0.61"
                            },
                            {
                                "name": "\u5929\u6d25",
                                "value": "48"
                            },
                            {
                                "name": "\u53f0\u6e7e",
                                "value": "13"
                            }
                        ],
                        "roam": true,
                        "aspectScale": 0.75,
                        "nameProperty": "name",
                        "selectedMode": false,
                        "zoom": 1,
                        "zlevel": 0,
                        "z": 2,
                        "seriesLayoutBy": "column",
                        "datasetIndex": 0,
                        "mapValueCalculation": "sum",
                        "showLegendSymbol": false,
                        "emphasis": {}
                    }
                ],
                "title": [
                    {
                        "show": true,
                        "text": "2023\u5e74\u4e2d\u56fd\u5404\u65b0\u80fd\u6e90\u6c7d\u8f66\u5206\u5e03",
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
                "visualMap": {
                    "show": true,
                    "type": "piecewise",
                    "min": 0,
                    "max": 380,
                    "inRange": {
                        "color": [
                            "#FFF1DA",
                            "#FF4500"
                        ]
                    },
                    "calculable": true,
                    "inverse": false,
                    "splitNumber": 10,
                    "hoverLink": true,
                    "orient": "vertical",
                    "padding": 5,
                    "showLabel": true,
                    "itemWidth": 20,
                    "itemHeight": 14,
                    "borderWidth": 0
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
                            "\u65b0\u80fd\u6e90\u6c7d\u8f66\u4fdd\u6709\u91cf(\u4e07\u8f86)"
                        ],
                        "selected": {},
                        "show": false,
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
                        "type": "map",
                        "name": "\u65b0\u80fd\u6e90\u6c7d\u8f66\u4fdd\u6709\u91cf(\u4e07\u8f86)",
                        "label": {
                            "show": false,
                            "margin": 8,
                            "valueAnimation": false
                        },
                        "map": "china",
                        "data": [
                            {
                                "name": "\u5e7f\u4e1c",
                                "value": "379"
                            },
                            {
                                "name": "\u6d59\u6c5f",
                                "value": "245"
                            },
                            {
                                "name": "\u6c5f\u82cf",
                                "value": "269.1"
                            },
                            {
                                "name": "\u5c71\u4e1c",
                                "value": "260"
                            },
                            {
                                "name": "\u6cb3\u5357",
                                "value": "200"
                            },
                            {
                                "name": "\u4e0a\u6d77",
                                "value": "164.5"
                            },
                            {
                                "name": "\u5317\u4eac",
                                "value": "100"
                            },
                            {
                                "name": "\u56db\u5ddd",
                                "value": "100"
                            },
                            {
                                "name": "\u6e56\u5317",
                                "value": "50"
                            },
                            {
                                "name": "\u6e56\u5357",
                                "value": "41.4"
                            },
                            {
                                "name": "\u5b89\u5fbd",
                                "value": "107.6"
                            },
                            {
                                "name": "\u798f\u5efa",
                                "value": "61.6"
                            },
                            {
                                "name": "\u6cb3\u5317",
                                "value": "61.6"
                            },
                            {
                                "name": "\u5e7f\u897f",
                                "value": "92.37"
                            },
                            {
                                "name": "\u6c5f\u897f",
                                "value": "62"
                            },
                            {
                                "name": "\u91cd\u5e86",
                                "value": "65"
                            },
                            {
                                "name": "\u9655\u897f",
                                "value": "52.87"
                            },
                            {
                                "name": "\u4e91\u5357",
                                "value": "40"
                            },
                            {
                                "name": "\u8d35\u5dde",
                                "value": "41.1"
                            },
                            {
                                "name": "\u5c71\u897f",
                                "value": "59.44"
                            },
                            {
                                "name": "\u5185\u8499\u53e4",
                                "value": "32.11"
                            },
                            {
                                "name": "\u8fbd\u5b81",
                                "value": "39"
                            },
                            {
                                "name": "\u5409\u6797",
                                "value": "15"
                            },
                            {
                                "name": "\u9ed1\u9f99\u6c5f",
                                "value": "8"
                            },
                            {
                                "name": "\u6d77\u5357",
                                "value": "30.4"
                            },
                            {
                                "name": "\u7518\u8083",
                                "value": "15"
                            },
                            {
                                "name": "\u5b81\u590f",
                                "value": "11.27"
                            },
                            {
                                "name": "\u65b0\u7586",
                                "value": "15"
                            },
                            {
                                "name": "\u9752\u6d77",
                                "value": "5"
                            },
                            {
                                "name": "\u897f\u85cf",
                                "value": "1.5"
                            },
                            {
                                "name": "\u5929\u6d25",
                                "value": "50.03"
                            },
                            {
                                "name": "\u53f0\u6e7e",
                                "value": "30"
                            }
                        ],
                        "roam": true,
                        "aspectScale": 0.75,
                        "nameProperty": "name",
                        "selectedMode": false,
                        "zoom": 1,
                        "zlevel": 0,
                        "z": 2,
                        "seriesLayoutBy": "column",
                        "datasetIndex": 0,
                        "mapValueCalculation": "sum",
                        "showLegendSymbol": false,
                        "emphasis": {}
                    }
                ],
                "title": [
                    {
                        "show": true,
                        "text": "2024\u5e74\u4e2d\u56fd\u5404\u65b0\u80fd\u6e90\u6c7d\u8f66\u5206\u5e03",
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
                "visualMap": {
                    "show": true,
                    "type": "piecewise",
                    "min": 0,
                    "max": 380,
                    "inRange": {
                        "color": [
                            "#FFF1DA",
                            "#FF4500"
                        ]
                    },
                    "calculable": true,
                    "inverse": false,
                    "splitNumber": 10,
                    "hoverLink": true,
                    "orient": "vertical",
                    "padding": 5,
                    "showLabel": true,
                    "itemWidth": 20,
                    "itemHeight": 14,
                    "borderWidth": 0
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
            }
        ]
    }; // 注意：此处需完整复制问题中map_year.js的option配置内容

    // 应用配置
    chart.setOption(option);

    // 添加窗口resize监听
    window.addEventListener('resize', function() {
        chart.resize();
    });
});