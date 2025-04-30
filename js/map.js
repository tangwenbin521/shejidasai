$(function () {
    function renderNevMap() {
        // 确保容器存在（与HTML中的ID一致）
        const container = document.getElementById('map');
        if (!container) {
            console.error('地图容器未找到！');
            return;
        }

        // 初始化图表（直接使用现有容器）
        const chart = echarts.init(container, 'white', { renderer: 'canvas' });

        // ECharts配置项（使用map_year.js的配置）
        const option = {
            "baseOption": {
                "series": [
                    {
                        "type": "map",
                        "name": "新能源汽车保有量(万辆)",
                        "label": {
                            "show": false,
                            "margin": 8,
                            "valueAnimation": false
                        },
                        "map": "china",
                        "data": [
                            {
                                "name": "广东",
                                "value": "379"
                            },
                            {
                                "name": "浙江",
                                "value": "245"
                            },
                            {
                                "name": "江苏",
                                "value": "269.1"
                            },
                            {
                                "name": "山东",
                                "value": "260"
                            },
                            {
                                "name": "河南",
                                "value": "200"
                            },
                            {
                                "name": "上海",
                                "value": "164.5"
                            },
                            {
                                "name": "北京",
                                "value": "100"
                            },
                            {
                                "name": "四川",
                                "value": "100"
                            },
                            {
                                "name": "湖北",
                                "value": "50"
                            },
                            {
                                "name": "湖南",
                                "value": "41.4"
                            },
                            {
                                "name": "安徽",
                                "value": "107.6"
                            },
                            {
                                "name": "福建",
                                "value": "61.6"
                            },
                            {
                                "name": "河北",
                                "value": "61.6"
                            },
                            {
                                "name": "广西",
                                "value": "92.37"
                            },
                            {
                                "name": "江西",
                                "value": "62"
                            },
                            {
                                "name": "重庆",
                                "value": "65"
                            },
                            {
                                "name": "陕西",
                                "value": "52.87"
                            },
                            {
                                "name": "云南",
                                "value": "40"
                            },
                            {
                                "name": "贵州",
                                "value": "41.1"
                            },
                            {
                                "name": "山西",
                                "value": "59.44"
                            },
                            {
                                "name": "内蒙古",
                                "value": "32.11"
                            },
                            {
                                "name": "辽宁",
                                "value": "39"
                            },
                            {
                                "name": "吉林",
                                "value": "15"
                            },
                            {
                                "name": "黑龙江",
                                "value": "8"
                            },
                            {
                                "name": "海南",
                                "value": "30.4"
                            },
                            {
                                "name": "甘肃",
                                "value": "15"
                            },
                            {
                                "name": "宁夏",
                                "value": "11.27"
                            },
                            {
                                "name": "新疆",
                                "value": "15"
                            },
                            {
                                "name": "青海",
                                "value": "5"
                            },
                            {
                                "name": "西藏",
                                "value": "1.5"
                            },
                            {
                                "name": "天津",
                                "value": "50.03"
                            },
                            {
                                "name": "台湾",
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
                        "2022年",
                        "2023年",
                        "2024年"
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
                            "新能源汽车保有量(万辆)"
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
                                "新能源汽车保有量(万辆)"
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
                            "name": "新能源汽车保有量(万辆)",
                            "label": {
                                "show": false,
                                "margin": 8,
                                "valueAnimation": false
                            },
                            "map": "china",
                            "data": [
                                {
                                    "name": "广东",
                                    "value": "146.64"
                                },
                                {
                                    "name": "浙江",
                                    "value": "134.82"
                                },
                                {
                                    "name": "江苏",
                                    "value": "50.5"
                                },
                                {
                                    "name": "山东",
                                    "value": "81"
                                },
                                {
                                    "name": "河南",
                                    "value": "92"
                                },
                                {
                                    "name": "上海",
                                    "value": "94.5"
                                },
                                {
                                    "name": "北京",
                                    "value": "61"
                                },
                                {
                                    "name": "四川",
                                    "value": "55.6"
                                },
                                {
                                    "name": "湖北",
                                    "value": "29.3"
                                },
                                {
                                    "name": "湖南",
                                    "value": "30.6"
                                },
                                {
                                    "name": "安徽",
                                    "value": "36.8"
                                },
                                {
                                    "name": "福建",
                                    "value": "10"
                                },
                                {
                                    "name": "河北",
                                    "value": "10"
                                },
                                {
                                    "name": "广西",
                                    "value": "40"
                                },
                                {
                                    "name": "江西",
                                    "value": "20"
                                },
                                {
                                    "name": "重庆",
                                    "value": "26"
                                },
                                {
                                    "name": "陕西",
                                    "value": "21"
                                },
                                {
                                    "name": "云南",
                                    "value": "10.5"
                                },
                                {
                                    "name": "贵州",
                                    "value": "15.95"
                                },
                                {
                                    "name": "山西",
                                    "value": "28.75"
                                },
                                {
                                    "name": "内蒙古",
                                    "value": "5.6"
                                },
                                {
                                    "name": "辽宁",
                                    "value": "10.23"
                                },
                                {
                                    "name": "吉林",
                                    "value": "5"
                                },
                                {
                                    "name": "黑龙江",
                                    "value": "1.3"
                                },
                                {
                                    "name": "海南",
                                    "value": "13.9"
                                },
                                {
                                    "name": "甘肃",
                                    "value": "5.4"
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        // 设置配置并渲染
        chart.setOption(option);
        window.addEventListener("resize", () => chart.resize());
    }

    // 直接调用渲染函数
    renderNevMap();
});