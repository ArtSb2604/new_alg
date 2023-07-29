

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

    
    x_param_new = [0]
    var purpose_new = []
    var family_new = []
    var stability_new = []
    var assessment_new = []
    var mol_new = []
    var talent_new = []
    var carnal_new = []
    var spiritual_new = []
    for (let i = x_param[1]; i <= x_param[5]; i+=0.125) {
        x_param_new.push(i)
    }

    for (const element of x_param_new) { purpose_new.push((matrix[0][0]*element**2+matrix[0][1]*element+matrix[0][2])*gender);}
    for (const element of x_param_new) { family_new.push((matrix[1][0]*element**2+matrix[1][1]*element+matrix[1][2])*gender);}
    for (const element of x_param_new) { stability_new.push((matrix[2][0]*element**2+matrix[2][1]*element+matrix[2][2])*gender);}
    for (const element of x_param_new) { assessment_new.push((matrix[0][0]*element**2+matrix[1][0]*element+matrix[2][0])*gender);}
    for (const element of x_param_new) { mol_new.push((matrix[0][1]*element**2+matrix[1][1]*element+matrix[2][1])*gender);}
    for (const element of x_param_new) { talent_new.push((matrix[0][2]*element**2+matrix[1][2]*element+matrix[2][2])*gender);}
    for (const element of x_param_new) { carnal_new.push((matrix[2][0]*element**2+matrix[1][1]*element+matrix[0][2])*gender);}
    for (const element of x_param_new) { spiritual_new.push((matrix[0][0]*element**2+matrix[1][1]*element+matrix[2][2])*gender);}

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'ЦЕЛЬ',
            data: [{x: purpose_new[1],y: x_param_new[1]}, {x: purpose_new[2],y: x_param_new[2]}, {x: purpose_new[3],y: x_param_new[3]}, {x: purpose_new[4],y: x_param_new[4]},
                {x: purpose_new[5],y: x_param_new[5]},{x: purpose_new[6],y: x_param_new[6]},{x: purpose_new[7],y: x_param_new[7]},{x: purpose_new[8],y: x_param_new[8]},{x: purpose_new[9],y: x_param_new[9]},{x: purpose_new[10],y: x_param_new[10]}],
            backgroundColor: '#FF0000',
            borderColor: '#FF0000',
            pointStyle: function(context) {
                var index = context.dataIndex;
                var dataPoint = context.dataset.data[index];
    
                if (dataPoint.x == purpose_new[1] || dataPoint.x == purpose_new[5] || dataPoint.x == purpose_new[9] || dataPoint.x == purpose_new[10]) {
                    return 'circle';
                } else {
                    return false;
                }
            },
        },
        {
            label: 'СЕМЬЯ',
            data: [{x: family_new[1],y: x_param_new[1]}, {x: family_new[2],y: x_param_new[2]}, {x: family_new[3],y: x_param_new[3]}, {x: family_new[4],y: x_param_new[4]},
            {x: family_new[5],y: x_param_new[5]},{x: family_new[6],y: x_param_new[6]},{x: family_new[7],y: x_param_new[7]},{x: family_new[8],y: x_param_new[8]},{x: family_new[9],y: x_param_new[9]},{x: family_new[10],y: x_param_new[10]}],
            backgroundColor: '#FFA500',
            borderColor: '#FFA500',
            pointStyle: function(context) {
                var index = context.dataIndex;
                var dataPoint = context.dataset.data[index];
    
                if (dataPoint.x == family_new[1] || dataPoint.x == family_new[5] || dataPoint.x == family_new[9] || dataPoint.x == family_new[10]) {
                    return 'circle';
                } else {
                    return false;
                }
            },
        },
        {
            label: 'СТАБИЛЬНОСТЬ',
            data: [{x: stability_new[1],y: x_param_new[1]}, {x: stability_new[2],y: x_param_new[2]}, {x: stability_new[3],y: x_param_new[3]}, {x: stability_new[4],y: x_param_new[4]},
            {x: stability_new[5],y: x_param_new[5]},{x: stability_new[6],y: x_param_new[6]},{x: stability_new[7],y: x_param_new[7]},{x: stability_new[8],y: x_param_new[8]},{x: stability_new[9],y: x_param_new[9]},{x: stability_new[10],y: x_param_new[10]}],
            backgroundColor: '#000000',
            borderColor: '#000000',
            pointStyle: function(context) {
                var index = context.dataIndex;
                var dataPoint = context.dataset.data[index];
    
                if (dataPoint.x == stability_new[1] || dataPoint.x == stability_new[5] || dataPoint.x == stability_new[9] || dataPoint.x == stability_new[10]) {
                    return 'circle';
                } else {
                    return false;
                }
            },
        },
        {
            label: 'САМООЦЕНКА',
            data: [{x: assessment_new[1],y: x_param_new[1]}, {x: assessment_new[2],y: x_param_new[2]}, {x: assessment_new[3],y: x_param_new[3]}, {x: assessment_new[4],y: x_param_new[4]},
            {x: assessment_new[5],y: x_param_new[5]},{x: assessment_new[6],y: x_param_new[6]},{x: assessment_new[7],y: x_param_new[7]},{x: assessment_new[8],y: x_param_new[8]},{x: assessment_new[9],y: x_param_new[9]},{x: assessment_new[10],y: x_param_new[10]}],
            backgroundColor: '#008000',
            borderColor: '#008000',
            pointStyle: function(context) {
                var index = context.dataIndex;
                var dataPoint = context.dataset.data[index];
    
                if (dataPoint.x == assessment_new[1] || dataPoint.x == assessment_new[5] || dataPoint.x == assessment_new[9] || dataPoint.x == assessment_new[10]) {
                    return 'circle';
                } else {
                    return false;
                }
            },
        },
        {
            label: 'БЫТ',
            data: [{x: mol_new[1],y: x_param_new[1]}, {x: mol_new[2],y: x_param_new[2]}, {x: mol_new[3],y: x_param_new[3]}, {x: mol_new[4],y: x_param_new[4]},
            {x: mol_new[5],y: x_param_new[5]},{x: mol_new[6],y: x_param_new[6]},{x: mol_new[7],y: x_param_new[7]},{x: mol_new[8],y: x_param_new[8]},{x: mol_new[9],y: x_param_new[9]},{x: mol_new[10],y: x_param_new[10]}],
            backgroundColor: '#0f93ff',
            borderColor: '#0f93ff',
            pointStyle: function(context) {
                var index = context.dataIndex;
                var dataPoint = context.dataset.data[index];
    
                if (dataPoint.x == mol_new[1] || dataPoint.x == mol_new[5] || dataPoint.x == mol_new[9] || dataPoint.x == mol_new[10]) {
                    return 'circle';
                } else {
                    return false;
                }
            },
        },
        {
            label: 'ТАЛАНТ',
            data: [{x: talent_new[1],y: x_param_new[1]}, {x: talent_new[2],y: x_param_new[2]}, {x: talent_new[3],y: x_param_new[3]}, {x: talent_new[4],y: x_param_new[4]},
            {x: talent_new[5],y: x_param_new[5]},{x: talent_new[6],y: x_param_new[6]},{x: talent_new[7],y: x_param_new[7]},{x: talent_new[8],y: x_param_new[8]},{x: talent_new[9],y: x_param_new[9]},{x: talent_new[10],y: x_param_new[10]}],
            backgroundColor: '#8b00ff',
            borderColor: '#8b00ff',
            pointStyle: function(context) {
                var index = context.dataIndex;
                var dataPoint = context.dataset.data[index];
    
                if (dataPoint.x == talent_new[1] || dataPoint.x == talent_new[5] || dataPoint.x == talent_new[9] || dataPoint.x == talent_new[10]) {
                    return 'circle';
                } else {
                    return false;
                }
            },
        },
        {
            label: 'ПЛОТСКАЯ',
            data: [{x: carnal_new[1],y: x_param_new[1]}, {x: carnal_new[2],y: x_param_new[2]}, {x: carnal_new[3],y: x_param_new[3]}, {x: carnal_new[4],y: x_param_new[4]},
            {x: carnal_new[5],y: x_param_new[5]},{x: carnal_new[6],y: x_param_new[6]},{x: carnal_new[7],y: x_param_new[7]},{x: carnal_new[8],y: x_param_new[8]},{x: carnal_new[9],y: x_param_new[9]},{x: carnal_new[10],y: x_param_new[10]}],
            backgroundColor: '#9b2d30',
            borderColor: '#9b2d30',
            pointStyle: function(context) {
                var index = context.dataIndex;
                var dataPoint = context.dataset.data[index];
    
                if (dataPoint.x == carnal_new[1] || dataPoint.x == carnal_new[5] || dataPoint.x == carnal_new[9] || dataPoint.x == carnal_new[10]) {
                    return 'circle';
                } else {
                    return false;
                }
            },
        },
        {
            label: 'ДУХОВНАЯ',
            data: [{x: spiritual_new[1],y: x_param_new[1]}, {x: spiritual_new[2],y: x_param_new[2]}, {x: spiritual_new[3],y: x_param_new[3]}, {x: spiritual_new[4],y: x_param_new[4]},
            {x: spiritual_new[5],y: x_param_new[5]},{x: spiritual_new[6],y: x_param_new[6]},{x: spiritual_new[7],y: x_param_new[7]},{x: spiritual_new[8],y: x_param_new[8]},{x: spiritual_new[9],y: x_param_new[9]},{x: spiritual_new[10],y: x_param_new[10]}],
            backgroundColor: '#945d0b',
            borderColor: '#945d0b',
            pointStyle: function(context) {
                var index = context.dataIndex;
                var dataPoint = context.dataset.data[index];
    
                if (dataPoint.x == spiritual_new[1] || dataPoint.x == spiritual_new[5] || dataPoint.x == spiritual_new[9] || dataPoint.x == spiritual_new[10]) {
                    return 'circle';
                } else {
                    return false;
                }
            },
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

