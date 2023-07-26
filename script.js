

function sum(num) {
    let stroke = num.toString();
    let cifr = stroke.split('').map(Number);
    let suma = cifr.reduce((a, b) => a + b, 0);
    return suma;
  }
  
  function countDigits(number) {
    var digitCount = Array(10).fill(0);
    var digits = number.toString();
  
    for (var i = 0; i < digits.length; i++) {
      var digit = parseInt(digits[i], 10);
  
      if (!isNaN(digit)) {
        digitCount[digit]++;
      }
    }
  
    return digitCount;
  }


function alg(){
    $('.graph').empty();
    $('.graph').append('<canvas id="myChart"></canvas>');
    var data = $('#date').val();
    var day = parseInt(data.split('-')[2], 10);
    var mounth = parseInt(data.split('-')[1], 10);
    var year = parseInt(data.split('-')[0], 10);

    var gender = 0;
    if ($('.form-select').val() == 'm') {
        gender += 4;
    } else {
        gender += 3.5;
    }
    console.log(gender)
    var num_1 = sum(day)+sum(mounth)+sum(year)
    var num_2 = sum(num_1)
    var num_3 = num_1-(2*Number(day.toString()[0]))
    var num_4 = sum(num_3)
    var count_all = countDigits(day.toString() + mounth.toString() + year.toString() + num_1.toString() + num_2.toString() + num_3.toString() + num_4.toString())
    var matrix = [
            [count_all[1], count_all[4], count_all[7]],
            [count_all[2], count_all[5], count_all[8]],
            [count_all[3], count_all[6], count_all[9]]
    ]

    var x_param = [0, 0.5*(matrix[1][0]-1), 0.5*matrix[1][0], 0.5*(matrix[1][0]+1), 0.5*(matrix[1][0]+1)+matrix[0][1], 0.5*(matrix[1][0]+1)+matrix[0][1]+0.125]

    var purpose = [(matrix[0][0]*x_param[0]**2+matrix[0][1]*x_param[0]+matrix[0][2])*gender, (matrix[0][0]*x_param[1]**2+matrix[0][1]*x_param[1]+matrix[0][2])*gender, 
    (matrix[0][0]*x_param[2]**2+matrix[0][1]*x_param[2]+matrix[0][2])*gender, (matrix[0][0]*x_param[3]**2+matrix[0][1]*x_param[3]+matrix[0][2])*gender,
    (matrix[0][0]*x_param[4]**2+matrix[0][1]*x_param[4]+matrix[0][2])*gender, (matrix[0][0]*x_param[5]**2+matrix[0][1]*x_param[5]+matrix[0][2])*gender]

    var family = [(matrix[1][0]*x_param[0]**2+matrix[1][1]*x_param[0]+matrix[1][2])*gender, (matrix[1][0]*x_param[1]**2+matrix[1][1]*x_param[1]+matrix[1][2])*gender, 
    (matrix[1][0]*x_param[2]**2+matrix[1][1]*x_param[2]+matrix[1][2])*gender, (matrix[1][0]*x_param[3]**2+matrix[1][1]*x_param[3]+matrix[1][2])*gender,
    (matrix[1][0]*x_param[4]**2+matrix[1][1]*x_param[4]+matrix[1][2])*gender, (matrix[1][0]*x_param[5]**2+matrix[1][1]*x_param[5]+matrix[1][2])*gender]

    var stability = [(matrix[2][0]*x_param[0]**2+matrix[2][1]*x_param[0]+matrix[2][2])*gender, (matrix[2][0]*x_param[1]**2+matrix[2][1]*x_param[1]+matrix[2][2])*gender, 
    (matrix[2][0]*x_param[2]**2+matrix[2][1]*x_param[2]+matrix[2][2])*gender, (matrix[2][0]*x_param[3]**2+matrix[2][1]*x_param[3]+matrix[2][2])*gender,
    (matrix[2][0]*x_param[4]**2+matrix[2][1]*x_param[4]+matrix[2][2])*gender, (matrix[2][0]*x_param[5]**2+matrix[2][1]*x_param[5]+matrix[2][2])*gender]

    var assessment = [(matrix[0][0]*x_param[0]**2+matrix[1][0]*x_param[0]+matrix[2][0])*gender, (matrix[0][0]*x_param[1]**2+matrix[1][0]*x_param[1]+matrix[2][0])*gender, 
    (matrix[0][0]*x_param[2]**2+matrix[1][0]*x_param[2]+matrix[2][0])*gender, (matrix[0][0]*x_param[3]**2+matrix[1][0]*x_param[3]+matrix[2][0])*gender,
    (matrix[0][0]*x_param[4]**2+matrix[1][0]*x_param[4]+matrix[2][0])*gender, (matrix[0][0]*x_param[5]**2+matrix[1][0]*x_param[5]+matrix[2][0])*gender]

    var mol = [(matrix[0][1]*x_param[0]**2+matrix[1][1]*x_param[0]+matrix[2][1])*gender, (matrix[0][1]*x_param[1]**2+matrix[1][1]*x_param[1]+matrix[2][1])*gender, 
    (matrix[0][1]*x_param[2]**2+matrix[1][1]*x_param[2]+matrix[2][1])*gender, (matrix[0][1]*x_param[3]**2+matrix[1][1]*x_param[3]+matrix[2][1])*gender,
    (matrix[0][1]*x_param[4]**2+matrix[1][1]*x_param[4]+matrix[2][1])*gender, (matrix[0][1]*x_param[5]**2+matrix[1][1]*x_param[5]+matrix[2][1])*gender]

    var talent = [(matrix[0][2]*x_param[0]**2+matrix[1][2]*x_param[0]+matrix[2][2])*gender, (matrix[0][2]*x_param[1]**2+matrix[1][2]*x_param[1]+matrix[2][2])*gender, 
    (matrix[0][2]*x_param[2]**2+matrix[1][2]*x_param[2]+matrix[2][2])*gender, (matrix[0][2]*x_param[3]**2+matrix[1][2]*x_param[3]+matrix[2][2])*gender,
    (matrix[0][2]*x_param[4]**2+matrix[1][2]*x_param[4]+matrix[2][2])*gender, (matrix[0][2]*x_param[5]**2+matrix[1][2]*x_param[5]+matrix[2][2])*gender]

    var carnal = [(matrix[2][0]*x_param[0]**2+matrix[1][1]*x_param[0]+matrix[0][2])*gender, (matrix[2][0]*x_param[1]**2+matrix[1][1]*x_param[1]+matrix[0][2])*gender, 
    (matrix[2][0]*x_param[2]**2+matrix[1][1]*x_param[2]+matrix[0][2])*gender, (matrix[2][0]*x_param[3]**2+matrix[1][1]*x_param[3]+matrix[0][2])*gender,
    (matrix[2][0]*x_param[4]**2+matrix[1][1]*x_param[4]+matrix[0][2])*gender, (matrix[2][0]*x_param[5]**2+matrix[1][1]*x_param[5]+matrix[0][2])*gender]
    
    var spiritual = [(matrix[0][0]*x_param[0]**2+matrix[1][1]*x_param[0]+matrix[2][2])*gender, (matrix[0][0]*x_param[1]**2+matrix[1][1]*x_param[1]+matrix[2][2])*gender, 
    (matrix[0][0]*x_param[2]**2+matrix[1][1]*x_param[2]+matrix[2][2])*gender, (matrix[0][0]*x_param[3]**2+matrix[1][1]*x_param[3]+matrix[2][2])*gender,
    (matrix[0][0]*x_param[4]**2+matrix[1][1]*x_param[4]+matrix[2][2])*gender, (matrix[0][0]*x_param[5]**2+matrix[1][1]*x_param[5]+matrix[2][2])*gender]

    var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'ЦЕЛЬ',
            data: [{x: purpose[1],y: x_param[1]}, {x: purpose[2],y: x_param[2]}, {x: purpose[3],y: x_param[3]}, {x: purpose[4],y: x_param[4]},
                {x: purpose[5],y: x_param[5]}],
            backgroundColor: '#FF0000',
            borderColor: '#FF0000',
        },
        {
            label: 'СЕМЬЯ',
            data: [{x: family[1],y: x_param[1]}, {x: family[2],y: x_param[2]}, {x: family[3],y: x_param[3]}, {x: family[4],y: x_param[4]},
                {x: family[5],y: x_param[5]}],
            backgroundColor: '#FFA500',
            borderColor: '#FFA500'
        },
        {
            label: 'СТАБИЛЬНОСТЬ',
            data: [{x: stability[1],y: x_param[1]}, {x: stability[2],y: x_param[2]}, {x: stability[3],y: x_param[3]}, {x: stability[4],y: x_param[4]},
                {x: stability[5],y: x_param[5]}],
            backgroundColor: '#000000',
            borderColor: '#000000'
        },
        {
            label: 'САМООЦЕНКА',
            data: [{x: assessment[1],y: x_param[1]}, {x: assessment[2],y: x_param[2]}, {x: assessment[3],y: x_param[3]}, {x: assessment[4],y: x_param[4]},
                {x: assessment[5],y: x_param[5]}],
            backgroundColor: '#008000',
            borderColor: '#008000'
        },
        {
            label: 'БЫТ',
            data: [{x: mol[1],y: x_param[1]}, {x: mol[2],y: x_param[2]}, {x: mol[3],y: x_param[3]}, {x: mol[4],y: x_param[4]},
                {x: mol[5],y: x_param[5]}],
            backgroundColor: '#0f93ff',
            borderColor: '#0f93ff'
        },
        {
            label: 'ТАЛАНТ',
            data: [{x: talent[1],y: x_param[1]}, {x: talent[2],y: x_param[2]}, {x: talent[3],y: x_param[3]}, {x: talent[4],y: x_param[4]},
                {x: talent[5],y: x_param[5]}],
            backgroundColor: '#8b00ff',
            borderColor: '#8b00ff'
        },
        {
            label: 'ПЛОТСКАЯ',
            data: [{x: carnal[1],y: x_param[1]}, {x: carnal[2],y: x_param[2]}, {x: carnal[3],y: x_param[3]}, {x: carnal[4],y: x_param[4]},
                {x: carnal[5],y: x_param[5]}],
            backgroundColor: '#9b2d30',
            borderColor: '#9b2d30'
        },
        {
            label: 'ДУХОВНАЯ',
            data: [{x: spiritual[1],y: x_param[1]}, {x: spiritual[2],y: x_param[2]}, {x: spiritual[3],y: x_param[3]}, {x: spiritual[4],y: x_param[4]},
                {x: spiritual[5],y: x_param[5]}],
            backgroundColor: '#945d0b',
            borderColor: '#945d0b'
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                    stepSize: 1 
                  },
                  beginAtZero: true
            },
            y: {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                ticks: {
                    stepSize: 0.2 
                  },
            }
        },
        animation: {
            duration: 0
        }
    }
});

    return purpose
}

