

function sum(num) {
  let absoluteNumber = Math.abs(num);
  let stroke = absoluteNumber.toString();
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
  console.log(sum(-1))
  var count_all = countDigits(day.toString() + mounth.toString() + year.toString() + num_1.toString() + num_2.toString() + num_3.toString() + num_4.toString())
  var matrix = [
          [count_all[1], count_all[4], count_all[7]],
          [count_all[2], count_all[5], count_all[8]],
          [count_all[3], count_all[6], count_all[9]]
  ]

  $('.day').text(day)
  $('.mounth').text(mounth)
  $('.year').text(year)

  $('.one').text(num_1)
  $('.two').text(num_2)
  $('.three').text(num_3)
  $('.four').text(num_4)

  $('.stroke_1_1').text(count_all[1])
  $('.stroke_1_2').text(count_all[4])
  $('.stroke_1_3').text(count_all[7])
  $('.stroke_2_1').text(count_all[2])
  $('.stroke_2_2').text(count_all[5])
  $('.stroke_2_3').text(count_all[8])
  $('.stroke_3_1').text(count_all[3])
  $('.stroke_3_2').text(count_all[6])
  $('.stroke_3_3').text(count_all[9])
  $('.stroke_3_4').text(count_all[0])

  var x_param = [0, 0.5*(matrix[1][0]-1), 0.5*matrix[1][0], 0.5*(matrix[1][0]+1)]

  for (let i = 1; i <= count_all[4]; i++) { 
      x_param.push(0.5*(matrix[1][0]+1)+i)
  }
  

  if (count_all[4] > 0) {
      x_param.push(0.5*(matrix[1][0]+1)+matrix[0][1]+0.125)
  } else {
      x_param.push(0.5*(matrix[1][0]+1)+0.125)
  }


  var purpose = []
  for (const element of x_param) { purpose.push((matrix[0][0]*element**2+matrix[0][1]*element+matrix[0][2])*gender);}

  var family = []
  for (const element of x_param) { family.push((matrix[1][0]*element**2+matrix[1][1]*element+matrix[1][2])*gender);}

  var stability = []
  for (const element of x_param) { stability.push((matrix[2][0]*element**2+matrix[2][1]*element+matrix[2][2])*gender);}

  var assessment = []
  for (const element of x_param) { assessment.push((matrix[0][0]*element**2+matrix[1][0]*element+matrix[2][0])*gender);}

  var mol = []
  for (const element of x_param) { mol.push((matrix[0][1]*element**2+matrix[1][1]*element+matrix[2][1])*gender);}

  var talent = []
  for (const element of x_param) { talent.push((matrix[0][2]*element**2+matrix[1][2]*element+matrix[2][2])*gender);}

  var carnal = []
  for (const element of x_param) { carnal.push((matrix[2][0]*element**2+matrix[1][1]*element+matrix[0][2])*gender);}

  var spiritual = []
  for (const element of x_param) { spiritual.push((matrix[0][0]*element**2+matrix[1][1]*element+matrix[2][2])*gender);}
  

  x_param_new = []
  var purpose_new = []
  var family_new = []
  var stability_new = []
  var assessment_new = []
  var mol_new = []
  var talent_new = []
  var carnal_new = []
  var spiritual_new = []

  for (let i = x_param[1]; i <= x_param[x_param.length-1]+0.2; i+=0.125) {
      x_param_new.push(i)
  }

  for (let i = x_param[x_param.length-1]; i <= 50; i+=0.125) {
    x_param_new.push(i)
  }

  
  if (x_param[x_param.length-1] > 7) {
    $('#myChart').css('height', (x_param[x_param.length-1]+Math.abs(x_param[1]))/0.5*4*15+"px")
  $('#myChart').css('min-height', (x_param[x_param.length-1]+Math.abs(x_param[1]))/0.5*4*15+"px")
  $('#myChart').css('max-height', (x_param[x_param.length-1]+Math.abs(x_param[1]))/0.5*4*15+"px")
  var maxY = x_param[x_param.length-1]+Math.abs(x_param[1])
  } else {
    $('#myChart').css('height', (7+Math.abs(x_param[1]))/0.5*4*15+"px")
  $('#myChart').css('min-height', (7+Math.abs(x_param[1]))/0.5*4*15+"px")
  $('#myChart').css('max-height', (7+Math.abs(x_param[1]))/0.5*4*15+"px")
  var maxY = 7+Math.abs(x_param[1])
  }

  x_param_new.unshift(0)
  for (const element of x_param_new) { purpose_new.push((matrix[0][0]*element**2+matrix[0][1]*element+matrix[0][2])*gender);}
  for (const element of x_param_new) { family_new.push((matrix[1][0]*element**2+matrix[1][1]*element+matrix[1][2])*gender);}
  for (const element of x_param_new) { stability_new.push((matrix[2][0]*element**2+matrix[2][1]*element+matrix[2][2])*gender);}
  for (const element of x_param_new) { assessment_new.push((matrix[0][0]*element**2+matrix[1][0]*element+matrix[2][0])*gender);}
  for (const element of x_param_new) { mol_new.push((matrix[0][1]*element**2+matrix[1][1]*element+matrix[2][1])*gender);}
  for (const element of x_param_new) { talent_new.push((matrix[0][2]*element**2+matrix[1][2]*element+matrix[2][2])*gender);}
  for (const element of x_param_new) { carnal_new.push((matrix[2][0]*element**2+matrix[1][1]*element+matrix[0][2])*gender);}
  for (const element of x_param_new) { spiritual_new.push((matrix[0][0]*element**2+matrix[1][1]*element+matrix[2][2])*gender);}

  data_purpose_new = []
  data_family_new = []
  data_stability_new = []
  data_assessment_new = []
  data_mol_new = []
  data_talent_new = []
  data_carnal_new = []
  data_spiritual_new = []



  for (let i = 0; i < x_param_new.length; ++i) {data_purpose_new.push({x: purpose_new[i],y: x_param_new[i]})}
  for (let i = 0; i < x_param_new.length; ++i) {data_family_new.push({x: family_new[i],y: x_param_new[i]})}
  for (let i = 0; i < x_param_new.length; ++i) {data_stability_new.push({x: stability_new[i],y: x_param_new[i]})}
  for (let i = 0; i < x_param_new.length; ++i) {data_assessment_new.push({x: assessment_new[i],y: x_param_new[i]})}
  for (let i = 0; i < x_param_new.length; ++i) {data_mol_new.push({x: mol_new[i],y: x_param_new[i]})}
  for (let i = 0; i < x_param_new.length; ++i) {data_talent_new.push({x: talent_new[i],y: x_param_new[i]})}
  for (let i = 0; i < x_param_new.length; ++i) {data_carnal_new.push({x: carnal_new[i],y: x_param_new[i]})}
  for (let i = 0; i < x_param_new.length; ++i) {data_spiritual_new.push({x: spiritual_new[i],y: x_param_new[i]})}

  let maxValue = 0;

  let dataset_all = [purpose, family, stability, assessment,
    mol, talent, carnal, spiritual]
  console.log(dataset_all)
  var maxX = dataset_all[0][0]; // Предполагаем, что первое значение x - это максимальное

for (var i = 0; i < dataset_all.length; i++) {
for (var j = 0; j < dataset_all[i].length; j++) {
  if (dataset_all[i][j] > maxX) { // Если текущее значение x больше предполагаемого максимального значения, обновляем maxX
    if (dataset_all[i][j]*2 < 100) {
      maxX = dataset_all[i][j]*2;
    } else {
      maxX = 100;
    }
  }
}
}

let minNumber = Math.min(...dataset_all.flat());

var d = [{
  label: 'ЦЕЛЬ',
  data: data_purpose_new,
  backgroundColor: '#FF0000',
  borderColor: '#FF0000',
  borderWidth: 2,
  pointStyle: function(context) {
      var index = context.dataIndex;
      var dataPoint = context.dataset.data[index];

      if (dataPoint.y == x_param[1] || dataPoint.y == x_param[2] || dataPoint.y == x_param[3] || dataPoint.y == x_param[x_param.length-1]) {
          return 'circle';
      } else {
          return false;
      }
  },
},
{
  label: 'СЕМЬЯ',
  data: data_family_new,
  backgroundColor: '#FFA500',
  borderColor: '#FFA500',
  borderWidth: 2,
  pointStyle: function(context) {
      var index = context.dataIndex;
      var dataPoint = context.dataset.data[index];

      if (dataPoint.y == x_param[1] || dataPoint.y == x_param[2] || dataPoint.y == x_param[3] || dataPoint.y == x_param[x_param.length-1]) {
          return 'circle';
      } else {
          return false;
      }
  },
},
{
  label: 'СТАБИЛЬНОСТЬ',
  data: data_stability_new,
  backgroundColor: '#000000',
  borderColor: '#000000',
  borderWidth: 2,
  pointStyle: function(context) {
      var index = context.dataIndex;
      var dataPoint = context.dataset.data[index];

      if (dataPoint.y == x_param[1] || dataPoint.y == x_param[2] || dataPoint.y == x_param[3] || dataPoint.y == x_param[x_param.length-1]) {
          return 'circle';
      } else {
          return false;
      }
  },
},
{
  label: 'САМООЦЕНКА',
  data: data_assessment_new,
  backgroundColor: '#008000',
  borderColor: '#008000',
  borderWidth: 2,
  pointStyle: function(context) {
      var index = context.dataIndex;
      var dataPoint = context.dataset.data[index];

      if (dataPoint.y == x_param[1] || dataPoint.y == x_param[2] || dataPoint.y == x_param[3] || dataPoint.y == x_param[x_param.length-1]) {
          return 'circle';
      } else {
          return false;
      }
  },
},
{
  label: 'БЫТ',
  data: data_mol_new,
  backgroundColor: '#0f93ff',
  borderColor: '#0f93ff',
  borderWidth: 2,
  pointStyle: function(context) {
      var index = context.dataIndex;
      var dataPoint = context.dataset.data[index];

      if (dataPoint.y == x_param[1] || dataPoint.y == x_param[2] || dataPoint.y == x_param[3] || dataPoint.y == x_param[x_param.length-1]) {
          return 'circle';
      } else {
          return false;
      }
  },
},
{
  label: 'ТАЛАНТ',
  data: data_talent_new,
  backgroundColor: '#8b00ff',
  borderColor: '#8b00ff',
  borderWidth: 2,
  pointStyle: function(context) {
      var index = context.dataIndex;
      var dataPoint = context.dataset.data[index];

      if (dataPoint.y == x_param[1] || dataPoint.y == x_param[2] || dataPoint.y == x_param[3] || dataPoint.y == x_param[x_param.length-1]) {
          return 'circle';
      } else {
          return false;
      }
  },
},
{
  label: 'ПЛОТСКАЯ',
  data: data_carnal_new,
  backgroundColor: '#9b2d30',
  borderColor: '#9b2d30',
  borderWidth: 2,
  pointStyle: function(context) {
      var index = context.dataIndex;
      var dataPoint = context.dataset.data[index];

      if (dataPoint.y == x_param[1] || dataPoint.y == x_param[2] || dataPoint.y == x_param[3] || dataPoint.y == x_param[x_param.length-1]) {
          return 'circle';
      } else {
          return false;
      }
  },
},
{
  label: 'ДУХОВНАЯ',
  data: data_spiritual_new,
  backgroundColor: '#945d0b',
  borderColor: '#945d0b',
  borderWidth: 2,
  pointStyle: function(context) {
      var index = context.dataIndex;
      var dataPoint = context.dataset.data[index];

      if (dataPoint.y == x_param[1] || dataPoint.y == x_param[2] || dataPoint.y == x_param[3] || dataPoint.y == x_param[x_param.length-1]) {
          return 'circle';
      } else {
          return false;
      }
  },
},
{
label: 'Min',
data: [{x: 0, y:x_param[1]}, {x: 1000, y:x_param[1]}],
backgroundColor: '#000000',
borderColor: '#000000',
borderWidth: 1,
borderDash: [5, 5],
},
{
label: 'Max',
data: [{x: 0, y:x_param[2]}, {x: 1000, y:x_param[2]}],
backgroundColor: '#000000',
borderColor: '#000000',
borderWidth: 1,
borderDash: [5, 5],
},
{
label: 'ВГ',
data: [{x: 0, y:x_param[3]}, {x: 1000, y:x_param[3]}],
backgroundColor: '#000000',
borderColor: '#000000',
borderWidth: 1,
borderDash: [5, 5],
},
{
label: 'Lim',
data: [{x: 0, y:x_param[x_param.length-1]}, {x: 1000, y:x_param[x_param.length-1]}],
backgroundColor: '#000000',
borderColor: '#000000',
borderWidth: 1,
borderDash: [5, 5],
},
         
{
label: 'Ось Y',
data: [{x: 0, y:-100}, {x: 0, y:1000}],
backgroundColor: '#000000',
borderColor: '#000000',
borderWidth: 2,

},
{
label: 'Ось X',
data: [{x: minNumber, y:0}, {x: 1000, y:0}],
backgroundColor: '#000000',
borderColor: '#000000',
borderWidth: 2,

}]

for (let i = 1; i <= count_all[4]; i+=1) {
  d.push({
    label: i+' у.п',
    data: [{x: minNumber, y:x_param[3]+i}, {x: 1000, y:x_param[3]+i}],
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
borderDash: [5, 5],
    })
}

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      datasets: d
  },
  options: {
      scales: {
          x: {
              type: 'linear',
              position: 'bottom',
              max: 100,
              ticks: {
                maxRotation: 0,
                minRotation: 0,
                stepSize: 1,
                autoSkip: false,
                callback: function(value, index, values) {
                  if (value%2 != 0) {
                    return value
                  } else {
                    return ''
                  }
                }
                },
                beginAtZero: true
          },
          y: {
              type: 'linear',
              position: 'left',
              beginAtZero: true,
              min: x_param[0]-0.5,
              max: maxY,
              ticks: {
                stepSize: 0.125,
                autoSkip: false,
                  callback: function(value) {
                    if (value % 0.5 === 0) {
                        if (value == x_param[1]) {
                          return 'Min '+value
                        } else {
                          if (value == x_param[2]) {
                            return 'Max '+value
                          } else {
                            if (value == x_param[3]) {
                              return 'ВГ '+value
                            } else {
                              if (value == x_param[x_param.length-1]) {
                                return 'Lim '+value
                              } else {
                                if (value === x_param[3]+1) {
                                  return 1+' у.п'
                                } else {
                                  if (value === x_param[3]+2) {
                                    return 2+' у.п'
                                  } else {
                                    if (value === x_param[3]+3) {
                                      return 3+' у.п'
                                    } else {
                                      if (value === x_param[3]+4) {
                                        return 4+' у.п'
                                      } else {
                                        if (value === x_param[3]+5) {
                                          return 5+' у.п'
                                        } else {
                                          return value
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        
                    } else {
                      if (value == x_param[1]) {
                        return 'Min '+value
                      } else {
                        if (value == x_param[2]) {
                          return 'Max '+value
                        } else {
                          if (value == x_param[3]) {
                            return 'ВГ '+value
                          } else {
                            if (value == x_param[x_param.length-1]) {
                              return 'Lim '+value
                            } else {
                              if (value === x_param[3]+1) {
                                return 1+' у.п'
                              } else {
                                if (value === x_param[3]+2) {
                                  return 2+' у.п'
                                } else {
                                  if (value === x_param[3]+3) {
                                    return 3+' у.п'
                                  } else {
                                    if (value === x_param[3]+4) {
                                      return 4+' у.п'
                                    } else {
                                      if (value === x_param[3]+5) {
                                        return 5+' у.п'
                                      } else {
                                        return ''
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                }
                },
          }
      },
      animation: {
          duration: 0
      },
      maintainAspectRatio: false,
      aspectRatio: 1,
      responsive: false,
      plugins: {
        tooltip: {
            callbacks: {
                label: function(context) {
                    // Проверяем индекс элемента для скрытия метки
                    if (context.dataIndex === 3) {
                        return ''; // Пустая строка для скрытия метки
                    } else {
                        return context.label;
                    }
                }
            }
        }
    }
  }
});


$('.table').empty();
  $('.table').append(`<thead>
  <tr>
    <th scope="col">ЛИНИЯ</th>
    <th scope="col">ГРАФИК</th>
    <th scope="col">Х=0</th>
    <th scope="col">Хmin=${x_param[1]}</th>
    <th scope="col">Хmax=${x_param[2]}</th>
    <th scope="col">ВГ=${x_param[3]}</th>
  </tr>
</thead>
<tbody>
<tr>
  <td>ЦЕЛЬ</td>
  <td>${matrix[0][0]}x&sup2+${matrix[0][1]}x+${matrix[0][2]}=Y</td>
  <td>${purpose[0]}</td>
  <td>${purpose[1]}</td>
  <td>${purpose[2]}</td>
  <td>${purpose[3]}</td>
</tr>
<tr>
  <td>СЕМЬЯ</td>
  <td>${matrix[1][0]}x&sup2+${matrix[1][1]}x+${matrix[1][2]}=Y</td>
  <td>${family[0]}</td>
  <td>${family[1]}</td>
  <td>${family[2]}</td>
  <td>${family[3]}</td>
</tr>
<tr>
  <td>СТАБИЛЬНОСТЬ</td>
  <td>${matrix[2][0]}x&sup2+${matrix[2][1]}x+${matrix[2][2]}=Y</td>
  <td>${stability[0]}</td>
  <td>${stability[1]}</td>
  <td>${stability[2]}</td>
  <td>${stability[3]}</td>
</tr>
<tr>
  <td>САМООЦЕНКА</td>
  <td>${matrix[0][0]}x&sup2+${matrix[1][0]}x+${matrix[2][0]}=Y</td>
  <td>${assessment[0]}</td>
  <td>${assessment[1]}</td>
  <td>${assessment[2]}</td>
  <td>${assessment[3]}</td>
</tr>
<tr>
  <td>БЫТ</td>
  <td>${matrix[0][1]}x&sup2+${matrix[1][1]}x+${matrix[2][1]}=Y</td>
  <td>${mol[0]}</td>
  <td>${mol[1]}</td>
  <td>${mol[2]}</td>
  <td>${mol[3]}</td>
</tr>
<tr>
  <td>ТАЛАНТ</td>
  <td>${matrix[0][2]}x&sup2+${matrix[1][2]}x+${matrix[2][2]}=Y</td>
  <td>${talent[0]}</td>
  <td>${talent[1]}</td>
  <td>${talent[2]}</td>
  <td>${talent[3]}</td>
</tr>
<tr>
  <td>ПЛОТСКАЯ</td>
  <td>${matrix[2][0]}x&sup2+${matrix[1][1]}x+${matrix[0][2]}=Y</td>
  <td>${carnal[0]}</td>
  <td>${carnal[1]}</td>
  <td>${carnal[2]}</td>
  <td>${carnal[3]}</td>
</tr>
<tr>
  <td>ДУХОВНАЯ</td>
  <td>${matrix[0][0]}x&sup2+${matrix[1][1]}x+${matrix[2][2]}=Y</td>
  <td>${spiritual[0]}</td>
  <td>${spiritual[1]}</td>
  <td>${spiritual[2]}</td>
  <td>${spiritual[3]}</td>
</tr>
</tbody>
`)

for (i=4; i < x_param.length-1; i++) {
  $('thead tr').append(`
  <th scope="col">УР=${x_param[i]}</th>>`)
}
$('thead tr').append(`<th scope="col">Lim=${x_param[x_param.length-1]}</th>`)

for (i=4; i < purpose.length-1; i++) {
  $('tbody tr').eq(0).append(`
  <td>УР=${purpose[i]}</td>>`)
}
$('tbody tr').eq(0).append(`<td>Lim=${purpose[purpose.length-1]}</td>`)

for (i=4; i < family.length-1; i++) {
  $('tbody tr').eq(1).append(`
  <td>УР=${family[i]}</td>>`)
}
$('tbody tr').eq(1).append(`<td>Lim=${family[family.length-1]}</td>`)

for (i=4; i < stability.length-1; i++) {
  $('tbody tr').eq(2).append(`
  <td>УР=${stability[i]}</td>>`)
}
$('tbody tr').eq(2).append(`<td>Lim=${stability[stability.length-1]}</td>`)

for (i=4; i < assessment.length-1; i++) {
  $('tbody tr').eq(3).append(`
  <td>УР=${assessment[i]}</td>>`)
}
$('tbody tr').eq(3).append(`<td>Lim=${assessment[assessment.length-1]}</td>`)

for (i=4; i < mol.length-1; i++) {
  $('tbody tr').eq(4).append(`
  <td>УР=${mol[i]}</td>>`)
}
$('tbody tr').eq(4).append(`<td>Lim=${mol[mol.length-1]}</td>`)

for (i=4; i < talent.length-1; i++) {
  $('tbody tr').eq(5).append(`
  <td>УР=${talent[i]}</td>>`)
}
$('tbody tr').eq(5).append(`<td>Lim=${talent[talent.length-1]}</td>`)

for (i=4; i < carnal.length-1; i++) {
  $('tbody tr').eq(6).append(`
  <td>УР=${carnal[i]}</td>>`)
}
$('tbody tr').eq(6).append(`<td>Lim=${carnal[carnal.length-1]}</td>`)

for (i=4; i < spiritual.length-1; i++) {
  $('tbody tr').eq(7).append(`
  <td>УР=${spiritual[i]}</td>>`)
}
$('tbody tr').eq(7).append(`<td>Lim=${spiritual[spiritual.length-1]}</td>`)

var tbody = `<tbody>
<tr>
  <td>ЦЕЛЬ</td>
  <td>${matrix[0][0]}&sup2+${matrix[0][1]}x+${matrix[0][2]}=Y</td>
  <td>${purpose[0]}</td>
  <td>${purpose[1]}</td>
  <td>${purpose[2]}</td>
  <td>${purpose[3]}</td>
  <td>${purpose[4]}</td>
  <td>${purpose[5]}</td>
</tr>
<tr>
  <td>СЕМЬЯ</td>
  <td>${matrix[1][0]}x&sup2+${matrix[1][1]}x+${matrix[1][2]}=Y</td>
  <td>${family[0]}</td>
  <td>${family[1]}</td>
  <td>${family[2]}</td>
  <td>${family[3]}</td>
  <td>${family[4]}</td>
  <td>${family[5]}</td>
</tr>
<tr>
  <td>СТАБИЛЬНОСТЬ</td>
  <td>${matrix[2][0]}x&sup2+${matrix[2][1]}x+${matrix[2][2]}=Y</td>
  <td>${stability[0]}</td>
  <td>${stability[1]}</td>
  <td>${stability[2]}</td>
  <td>${stability[3]}</td>
  <td>${stability[4]}</td>
  <td>${stability[5]}</td>
</tr>
<tr>
  <td>САМООЦЕНКА</td>
  <td>${matrix[0][0]}x&sup2+${matrix[1][0]}x+${matrix[2][0]}=Y</td>
  <td>${assessment[0]}</td>
  <td>${assessment[1]}</td>
  <td>${assessment[2]}</td>
  <td>${assessment[3]}</td>
  <td>${assessment[4]}</td>
  <td>${assessment[5]}</td>
</tr>
<tr>
  <td>БЫТ</td>
  <td>${matrix[0][1]}x&sup2+${matrix[1][1]}x+${matrix[2][1]}=Y</td>
  <td>${mol[0]}</td>
  <td>${mol[1]}</td>
  <td>${mol[2]}</td>
  <td>${mol[3]}</td>
  <td>${mol[4]}</td>
  <td>${mol[5]}</td>
</tr>
<tr>
  <td>ТАЛАНТ</td>
  <td>${matrix[0][2]}x&sup2+${matrix[1][2]}x+${matrix[2][2]}=Y</td>
  <td>${talent[0]}</td>
  <td>${talent[1]}</td>
  <td>${talent[2]}</td>
  <td>${talent[3]}</td>
  <td>${talent[4]}</td>
  <td>${talent[5]}</td>
</tr>
<tr>
  <td>ПЛОТСКАЯ</td>
  <td>${matrix[2][0]}x&sup2+${matrix[1][1]}x+${matrix[0][2]}=Y</td>
  <td>${carnal[0]}</td>
  <td>${carnal[1]}</td>
  <td>${carnal[2]}</td>
  <td>${carnal[3]}</td>
  <td>${carnal[4]}</td>
  <td>${carnal[5]}</td>
</tr>
<tr>
  <td>ДУХОВНАЯ</td>
  <td>${matrix[0][0]}x&sup2+${matrix[1][1]}x+${matrix[2][2]}=Y</td>
  <td>${spiritual[0]}</td>
  <td>${spiritual[1]}</td>
  <td>${spiritual[2]}</td>
  <td>${spiritual[3]}</td>
  <td>${spiritual[4]}</td>
  <td>${spiritual[5]}</td>
</tr>
</tbody>`


if ($(window).width() < 800) {
  $('.mob').css('display', 'block')
} else {
  $('.descktop').css('display', 'block')
}
}

function generatePDF() {
  window.open(`http://134.0.119.88:3000/generate-pdf?date=${$('input[type=date]').val()}&gender=${$('.form-select').val()}&site=https://artsb2604.github.io/new_alg/`);
}

function generatePDF_mob() {
  $('.graph').css('overflow', 'inherit')
  html2canvas(document.getElementById('pdf')).then(function(canvas2) {
    // Создание PDF документа
    window.jsPDF = window.jspdf.jsPDF
    var pdfDoc = new jsPDF();

    // Добавление первого графика в PDF

    // Добавление второго графика в PDF
    var imgData2 = canvas2.toDataURL('image/jpeg', 1.0);
    pdfDoc.addImage(imgData2, 'JPEG', -20, -2, 250, 300);

    // Сохранение PDF файла
    pdfDoc.save('charts.pdf');
});
}
setTimeout(function() {
  $('.graph').css('overflow', 'auto')
}, 1000);
