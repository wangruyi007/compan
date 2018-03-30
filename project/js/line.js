$(document).ready(function(){
    dataChart();
    function dataChart() {
        require.config({
            paths: {
                echarts: '../js/echarts-2.2.7/build/dist'
            }
        });
        require(
            [
                'echarts',
                'echarts/chart/line',
            ],
        )
    }
})