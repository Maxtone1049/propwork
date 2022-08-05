(function (jQuery) {
  "use strict";
if (document.querySelectorAll('#myChart').length) {
  const options = {
    series: [50, 30,32],
    chart: {
    height: 230,
    type: 'radialBar',
  },
  colors: ["#000080", "#c83200","#ffa500"],
  plotOptions: {
    radialBar: {
      hollow: {
          margin: 12,
          size: "35%",
      },
      track: {
          margin: 10,
          strokeWidth: '50%',
      },
      dataLabels: {
          show: false,
      }
    }
  },
  labels: ['Apples', 'Oranges'],
  };
  if(ApexCharts !== undefined) {
    const chart = new ApexCharts(document.querySelector("#myChart"), options);
    chart.render();
    document.addEventListener('ColorChange', (e) => {
        const newOpt = {colors: [e.detail.detail2, e.detail.detail1],}
        chart.updateOptions(newOpt)
       
    })
  }
}
if (document.querySelectorAll('#d-activity').length) {
    const options = {
      series: [{
        name: 'B2B Property Name goes here',
        data: [10,5,3,1]
      }, 
      ],
    chart: {
        type: 'bar',
        height: 290,
        stacked: true,
        toolbar: {
            show:true
          }
      },
      colors: ["#c83200","#000080"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          endingShape: 'rounded',
          borderRadius: 5,
        },
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['d','b','c',"a"],
        labels: {
          minHeight:50,
          maxHeight:50,
          style: {
            colors: "#000",
            weight:"900",
          },
        }
      },
      yaxis: {
        title: {
          text: ''
        },
        labels: {
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: "#8A92A6",
              weight:"900",
            },
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return  val+ "% " + " strength of property"
          }
        }
      }
    };
  
    const chart = new ApexCharts(document.querySelector("#d-activity"), options);
    chart.render();
    document.addEventListener('ColorChange', (e) => {
    const newOpt = {colors: [e.detail.detail1, e.detail.detail2],}
    chart.updateOptions(newOpt)
    })
  }
if (document.querySelectorAll('#d-main').length) {
  const options = {
      series: [{
          name: 'visits',
          data: [0, 2, 4, 6, 8, 2, 5]
      }, {
          name: 'engagements',
          data: [5,2,4,6,8,10,12]
      }],
      chart: {
          fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          height: 245,
          type: 'area',
          toolbar: {
              show: false
          },
          sparkline: {
              enabled: false,
          },
      },
      colors: ["#c83200", "#000080"],
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth',
          width: 3,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
          offsetX: -5,
        },
      },
      legend: {
          show: false,
      },
      xaxis: {
          labels: {
              minHeight:22,
              maxHeight:22,
              show: true,
              style: {
                colors: "#8A92A6",
              },
          },
          lines: {
              show: false  //or just here to disable only x axis grids
          },
          categories: ["Jan 2022", "Feb 2022", "Mar 2022", "Apr 2022", "Jun 2022", "Jul 2022", "Aug 2022"]
      },
      grid: {
          show: false,
      },
      fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              type: "vertical",
              shadeIntensity: 0,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: .4,
              opacityTo: .1,
              stops: [0, 50, 80],
              colors: ["#c83200", "#ffa500"]
          }
          
      },
      tooltip: {
        enabled: true,
      },
  };

  const chart = new ApexCharts(document.querySelector("#d-main"), options);
  chart.render();
  document.addEventListener('ColorChange', (e) => {
    console.log(e)
    const newOpt = {
      colors: [e.detail.detail1, e.detail.detail2],
      fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: [e.detail.detail1, e.detail.detail2], // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: .4,
            opacityTo: .1,
            stops: [0, 50, 60],
            colors: [e.detail.detail1, e.detail.detail2],
        }
    },
   }
    chart.updateOptions(newOpt)
  })
}
if ($('.d-slider1').length > 0) {
    const options = {
        centeredSlides: false,
        loop: false,
        slidesPerView: 4,
        autoplay:false,
        spaceBetween: 32,
        breakpoints: {
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1400: { slidesPerView: 3 },
            1500: { slidesPerView: 4 },
            1920: { slidesPerView: 6 },
            2040: { slidesPerView: 7 },
            2440: { slidesPerView: 8 }
        },
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },  

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'  
        }
    } 
    let swiper = new Swiper('.d-slider1',options);

    document.addEventListener('ChangeMode', (e) => {
      if (e.detail.rtl === 'rtl' || e.detail.rtl === 'ltr') {
        swiper.destroy(true, true)
        setTimeout(() => {
            swiper = new Swiper('.d-slider1',options);
        }, 500);
      }
    })
}


})(jQuery)


