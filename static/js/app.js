/* data route */
var url = '/barchart';

function buildPlot() {
  Plotly.d3.json(url, function(error, response) {
    console.log(response);
    
    var trace1 = {
      type: 'bar',
      x: response.human_rating_x,
      y: response.human_rating_y,
      
      marker: {
        color: "#8a89a6"
      }
    };

    var trace2 = {
      type: 'bar',
      x: response.machine_rating_x.push(0.2),
      y: response.machine_rating_y,
      
      marker: {
        color: "#ff8c00"
      }
    };

    var data = [trace1, trace2];

    var layout = {
      title: 'Machin vs human rating',
      xaxis:{
        title: "Rating"
      },
      yaxis:{
        title:"count"
      },
      margin:{
        l:1000,
        t:1
      }
    };

    Plotly.newPlot('plot', data, layout);
  });

  Plotly.d3.json(url, function(error, response) {
    console.log(response);
    

    var trace3 = {
      type: 'bar',
      x: response.deviations_x,
      y: response.deviations_y,
      
      marker: {
        color: "#98abc5"
      }
    };

    var data2 = [trace3];

    var layout = {
      title: 'deviation of accuracy of model',
      xaxis:{
        title: "Rating deviation"
      },
      yaxis:{
        title:"Count"
      },
      margin:{
        l:1000,
        t:1,
      }
    };

    Plotly.newPlot('plot2', data2, layout);
  });
}

buildPlot();
