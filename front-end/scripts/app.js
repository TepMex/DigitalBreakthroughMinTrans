function getRandomData(dataPoints, discrete){
    let result = [];
    for(let i=1; i<dataPoints.length; i++){
        result.push(...generatePoints(dataPoints[i-1], dataPoints[i], discrete))
    }

    return result;
}

function generatePoints(p1, p2, discrete){
    let dLat = (p2[0]-p1[0])/discrete;
    let dLong = (p2[1]-p1[1])/discrete;

    let result = [];

    for(let i = 0; i<discrete; i++) {
        let rand = Math.floor(Math.random()*2)
        result.push([p1[0]+dLat*i*rand, p1[1]+dLong*i*rand])
    }

    return result;
}
var data = [
[
                    49.097940289239105,
                    55.78968029802343
                ],
                [
                    49.0936916701595,
                    55.7953621341517
                ],
                [
                    49.07111819909017,
                    55.79942353231833
                ],
                [
                    49.05266460106766,
                    55.806336600760794
                ],
                [
                    49.01275333092605,
                    55.801502416759476
                ],
                [
                    48.9710396163264,
                    55.80140572692455
                ],
                [
                    48.95541843102369,
                    55.80536981217307
                ],
                [
                    48.90975756688387,
                    55.81446401003953
                ],
                [
                    48.889244032338,
                    55.81750859794367
                ],
                [
                    48.87027545018462,
                    55.81862005455002
                ],
                [
                    48.84211190680493,
                    55.825698524562036
                ],
                [
                    48.80606555479174,
                    55.82913845309746
                ]
            ].map(e=>[e[1], e[0]])
ymaps.ready(function () {
        var map = new ymaps.Map('map', {
                center: [55.800587642272475,48.91762104167971],
                controls: ['zoomControl', 'typeSelector',  'fullscreenControl'],
                zoom: 10
            }),

            gradients = [{
                1.0: 'rgba(128, 255, 0, 0.7)',
                0.7: 'rgba(255, 255, 0, 0.8)',
                0.2: 'rgba(234, 72, 58, 0.9)',
                0.1: 'rgba(162, 36, 25, 1)'
            }, {
                1.0: 'rgba(162, 36, 25, 0.7)',
                0.7: 'rgba(234, 72, 58, 0.8)',
                0.2: 'rgba(255, 255, 0, 0.9)',
                0.1: 'rgba(128, 255, 0, 1)'
            }],
            radiuses = [5, 10, 20, 30],
            opacities = [0.4, 0.6, 0.8, 1];
        ymaps.modules.require(['Heatmap'], function (Heatmap) {
            var heatmap = new Heatmap(getRandomData(data, 100), {
                gradient: gradients[0],
                radius: radiuses[1],
                opacity: opacities[2]
            });
            heatmap.setMap(map);

        });
    });