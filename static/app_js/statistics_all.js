/**

Copyright (c) 2016, Virginia Tech
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
 following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following
disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those of the authors and should not be
interpreted as representing official policies, either expressed or implied, of the FreeBSD Project.

This material was prepared as an account of work sponsored by an agency of the United States Government. Neither the
United States Government nor the United States Department of Energy, nor Virginia Tech, nor any of their employees,
nor any jurisdiction or organization that has cooperated in the development of these materials, makes any warranty,
express or implied, or assumes any legal liability or responsibility for the accuracy, completeness, or usefulness or
any information, apparatus, product, software, or process disclosed, or represents that its use would not infringe
privately owned rights.

Reference herein to any specific commercial product, process, or service by trade name, trademark, manufacturer, or
otherwise does not necessarily constitute or imply its endorsement, recommendation, favoring by the United States
Government or any agency thereof, or Virginia Tech - Advanced Research Institute. The views and opinions of authors
expressed herein do not necessarily state or reflect those of the United States Government or any agency thereof.

VIRGINIA TECH – ADVANCED RESEARCH INSTITUTE
under Contract DE-EE0006352

#__author__ = "BEMOSS Team"
#__credits__ = ""
#__version__ = "2.0"
#__maintainer__ = "BEMOSS Team"
#__email__ = "aribemoss@gmail.com"
#__website__ = "www.bemoss.org"
#__created__ = "2014-09-12 12:04:50"
#__lastUpdated__ = "2016-03-14 11:23:33"

**/


          function startTime() {
            var now = new Date();
            var monthNames = [
              "January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
            ];

            var date = new Date();
            var day = now.getDate();
            var monthIndex = now.getMonth();
            var year = now.getFullYear();

            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();
            var ampm = h >= 12 ? 'PM' : 'AM';
            h = h % 12;
            h = h ? h : 12;
            h = checkTime(h);
            m = checkTime(m);
            s = checkTime(s);
            $('.current_time').html(monthNames[monthIndex] + " " + day + ", " + year + " " + h + ":" + m + ":" + s + " " + ampm);
            var t = setTimeout(startTime, 500);
          }
          function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
          }

          function update_Username(Username) {
            $("#Username").text(String(Username));
          }


         function setB(amount) {
             //softSlider.noUiSlider.set(amount);
             //alert(this.id);
             console.log(this.id);
         }
         function setMode()
         {
             //alert(this.id);
             console.log(this.id);

         }
         function pb_update() {
            var str ="<li><i class='fa fa-angle-right'></i><a href='/source_statistics/999'>Statistics</a></li>";
             str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>Power Sources</span></li><a></li>";
             $('.page-breadcrumb').append(str);
         }




function color() {
        console.log("color was change")


}

var week_p ={};
var month_p = {};
var year_p = {};
var week_b ={};
var month_b = {};
var year_b = {};
var sum_week_p = {};
var sum_month_p = {};
var sum_year_p = {};
var sum_week_b = {};
var sum_month_b = {};
var sum_year_b = {};
week_p['name'] = "Grid";
week_p['name'] = "Solar";
week_p['Grid'] = [106.5,102.5,55.6,0,0,0,0];
week_p['Solar'] = [13.6,12.6,6.3,0,0,0,0];
week_b['Grid'] = [319.5,307.5,166.8,0,0,0,0];
week_b['Solar'] = [40.8,37.8,18.9,0,0,0,0];
month_p['Grid'] = [681.3,710.7,669.5,662.6];
month_p['Solar'] = [226.7,222.2,233.5,170.1];
month_b['Grid'] = [2043.9,2132.1,2008.5,1987.8];
month_b['Solar'] = [680.1,666.6,700.5,510.3];
year_p['Grid'] = [0,0,0,0,0,0,0,1362,2724,0,0,0];
year_p['Solar'] = [0,0,0,0,0,0,0,426.2,852.4,0,0,0];
year_b['Grid'] = [0,0,0,0,0,0,0,4086,8172,0,0,0];
year_b['Solar'] = [0,0,0,0,0,0,0,1278.6,2557.2,0,0,0];
sum_week_p['All'] = [88.1, 264.4];
sum_week_p['Grid'] = [77.3, 232];
sum_week_p['Solar'] = [10.7, 32.3];
sum_month_p['All'] = [90.7, 680.9, 2723.9];
sum_month_p['Grid'] = [62.3, 467.8, 1871.5];
sum_month_p['Solar'] = [28.4, 213.1, 852.3];
sum_year_p['All'] = [90.7, 680.9, 2723.2, 4085.5];
sum_year_p['Grid'] = [62.3, 467.2, 187.1, 2807.9];
sum_year_p['Solar'] = [28.4, 213.3, 852.8, 1278];
sum_week_b['All'] = [264, 792];
sum_week_b['Grid'] = [231, 696];
sum_week_b['Solar'] = [32.1, 96.9];
sum_month_b['All'] = [900, 1800, 2723.9];
sum_month_b['Grid'] = [450, 900, 2723.9];
sum_month_b['Solar'] = [450, 900, 2723.9];
sum_year_b['All'] = [900, 6800, 27230, 40850];
sum_year_b['Grid'] = [450, 3400, 13110, 20420];
sum_year_b['Solar'] = [450, 3400, 13110, 20420];
var toggle_week = week_p;
var toggle_month = month_p;
var toggle_year =year_p;
var toggle_unit = "kWh";
$( document ).ready(function() {
   // $.csrftoken();
    pb_update();
    startTime();
    setTblsummary(sum_week_p, sum_month_p, sum_year_p);
    renderBarDays(toggle_week['Grid'], toggle_week['Solar'], toggle_unit);
   // renderBarWeeks(toggle_month['Grid'], toggle_month['Solar'], toggle_unit);
   // renderBarMonths(toggle_year['Grid'], toggle_year['Solar'], toggle_unit);
    $('.btn-sm').on("click", function () {
        var text = $.trim($(this).text());
       // alert($(this).text());
        if ((text) == "kWh"){
            toggle_week = week_p;
            toggle_month = month_p;
            toggle_year = year_p;
            toggle_unit = text;
            renderBarDays(week_p['Grid'], week_p['Solar'], text);
            renderBarWeeks(month_p['Grid'], month_p['Solar'], text);
            renderBarMonths(year_p['Grid'], year_p['Solar'], text);
            setTblsummary(sum_week_p, sum_month_p, sum_year_p);
        }else if (text == "Baht"){
           // alert ('Payyoh"s domond');
            toggle_week = week_b;
            toggle_month = month_b;
            toggle_year = year_b;
            toggle_unit = text;
            renderBarDays(week_b['Grid'], week_b['Solar'], text);
            renderBarWeeks(month_p['Grid'], month_p['Solar'], text);
            renderBarMonths(year_p['Grid'], year_p['Solar'], text);
            setTblsummary(sum_week_b, sum_month_b, sum_year_b);
        }
    });

});

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          if($(e.target).attr('id') == 't7d')
          {
            renderBarDays(toggle_week['Grid'], toggle_week['Solar'], toggle_unit);
          }
          else if($(e.target).attr('id') == 't4w')
          {
            renderBarWeeks(toggle_month['Grid'], toggle_month['Solar'], toggle_unit);
          }
          else if($(e.target).attr('id') == 't12m')
          {
            renderBarMonths(toggle_year['Grid'], toggle_year['Solar'],toggle_unit);
          }
          //window.dispatchEvent(new Event('resize'));
        });
              function renderBarDays(trendG, trendS , unit) {
              $('#container').highcharts({
              chart: {
              type: 'column',
              spacingBottom: 50
              },

              credits: {
              enabled: false
              },
              title: {
                text: null
              },

              xAxis: {
              categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri','Sat','Sun']
              },
              yAxis: {
              min: 0,
              title: {
                  text: unit
              }
              },
              stackLabels: {
                enabled: false,
                style: {
                  fontWeight: 'bold',
                  color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
              },
              legend: {
              align: 'center',
              x: -50,
              verticalAlign: 'bottom',
              y: 35,
              floating: true,
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
              borderColor: '#CCC',
              borderWidth: 1,
              shadow: false
              },
              tooltip: {
              headerFormat: '<b>{point.x}</b><br/>',
              pointFormat: '{series.name}: {point.y} kWh<br/>Total: {point.stackTotal} kWh'
              },
              plotOptions: {
              column: {
                stacking: 'normal',
                dataLabels: {
                  enabled: false,
                  color: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                  style: {
                      textShadow: '0 0 3px black'
                  }
                  }
                }
              },
                  series: [{
              name: 'Grid',
             // data: [5, 3, 4, 7, 2,4,5],color: '#3598DC'
                  data: trendG ,color: '#3598DC'
              }, {
              name: 'Solar',
             // data: [2, 2, 3, 2, 1,3,6],color: '#E7505A'
                  data: trendS,color: '#E7505A'
              },]




            });


              }
function renderBarWeeks(trendG, trendS, unit) {
      $('#container2').highcharts({
        chart: {
          type: 'column',
          spacingBottom: 50
        },

        credits: {
          enabled: false
        },

        title: {
          text: null
        },

        xAxis: {
          categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        },
        yAxis: {
          min: 0,
          title: {
            text: unit
          },
          stackLabels: {
            enabled: false,
            style: {
              fontWeight: 'bold',
              color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
          }
        },
        legend: {
          align: 'center',
          x: -50,
          verticalAlign: 'bottom',
          y: 35,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y} kWh<br/>Total: {point.stackTotal} kWh'
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: false,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
              style: {
                textShadow: '0 0 3px black'
              }
            }
          }
        },

                  series: [{
              name: 'Grid',
             // data: [5, 3, 4, 7, 2,4,5],color: '#3598DC'
                  data: trendG ,color: '#3598DC'
              }, {
              name: 'Solar',
             // data: [2, 2, 3, 2, 1,3,6],color: '#E7505A'
                  data: trendS,color: '#E7505A'
              },]
      });
}
function renderBarMonths(trendG, trendS, unit) {
      $('#container3').highcharts({
          chart: {
          type: 'column',
          spacingBottom: 50
          },

          credits: {
          enabled: false
          },
          title: {
            text: null
          },

          xAxis: {
          categories: ['Jan', 'Fab', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
          },
          yAxis: {
          min: 0,
          title: {
            text: unit
          },
          stackLabels: {
            enabled: false,
            style: {
              fontWeight: 'bold',
              color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
          }
          },
          legend: {
          align: 'center',
          x: -50,
          verticalAlign: 'bottom',
          y: 35,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
          },
          tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y} kWh<br/>Total: {point.stackTotal} kWh'
          },
          plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: false,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
              style: {
                textShadow: '0 0 3px black'
              }
            }
          }
          },

                  series: [{
              name: 'Grid',
             // data: [5, 3, 4, 7, 2,4,5],color: '#3598DC'
                  data: trendG ,color: '#3598DC'
              }, {
              name: 'Solar',
             // data: [2, 2, 3, 2, 1,3,6],color: '#E7505A'
                  data: trendS,color: '#E7505A'
              },]
      });
}
function setTblsummary(tbl_week, tbl_month, tbl_year) {
    //--- set TBL week
    //$('#tab_1_1 table.table tr:eq(1)').text();
    var str_tbl1 = "";
    $.each(tbl_week, function(key,val){
        //console.log(val[0]);
        str_tbl1  = str_tbl1  + "<tr><td>" + key + "</td><td>" + val[0] + "</td><td>" + val[1] + "</td></tr>";
    });
    $('#tab_1_1 table.table tbody').html(str_tbl1);
    var head_tbl1 = "";
    //if (toggle_unit == "kWh"){
        head_tbl1 = "<tr><th class ='text-center'></th><th class ='text-center'>Avg. Daily (" + toggle_unit +")</th>";
        head_tbl1 = head_tbl1 + "<th class ='text-center'>Total Consumption (" +  toggle_unit + ")</th></tr>";
         $('#tab_1_1 table.table thead').html(head_tbl1);
  //  }else if (toggle_unit == "Baht") {

   // }
    //--- set TBL month
    var str_tbl2 = "";
    $.each(tbl_month, function(key,val){
        //console.log(val[0]);
        str_tbl2  = str_tbl2  + "<tr><td>" + key + "</td><td>" + val[0] + "</td><td>" + val[1] + "</td><td>" + val[2] + "</td></tr>";
    });
    $('#tab_1_2 table.table tbody').html(str_tbl2);
    var head_tbl2 = "";
    //if (toggle_unit == "kWh"){
        head_tbl2 = "<tr><th class ='text-center'></th><th class ='text-center'>Avg. Daily (" + toggle_unit +")</th>";
        head_tbl2 = head_tbl2 + "<th class ='text-center'>Avg. Weekly (" +  toggle_unit + ")</th>";
        head_tbl2 = head_tbl2 + "<th class ='text-center'>Total Consumption (" +  toggle_unit + ")</th></tr>";
         $('#tab_1_2 table.table thead').html(head_tbl2);
    var str_tbl3 = "";
    $.each(tbl_year, function(key,val){
        //console.log(val[0]);
        str_tbl3  = str_tbl3  + "<tr><td>" + key + "</td><td>" + val[0] + "</td><td>" + val[1] ;
        str_tbl3  = str_tbl3  + "</td><td>" + val[2] + "</td><td>" + val[3] + "</td></tr>";
    });
    $('#tab_1_3 table.table tbody').html(str_tbl3);
    var head_tbl3 = "";
    //if (toggle_unit == "kWh"){
        head_tbl3 = "<tr><th class ='text-center'></th><th class ='text-center'>Avg. Daily (" + toggle_unit +")</th>";
        head_tbl3 = head_tbl3 + "<th class ='text-center'>Avg. Weekly (" +  toggle_unit + ")</th>";
        head_tbl3 = head_tbl3 + "<th class ='text-center'>Avg. Monthly (" +  toggle_unit + ")</th>";
        head_tbl3 = head_tbl3 + "<th class ='text-center'>Total Consumption (" +  toggle_unit + ")</th></tr>";
         $('#tab_1_3 table.table thead').html(head_tbl3);
}




