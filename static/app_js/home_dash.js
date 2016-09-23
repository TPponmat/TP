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
//current energy consumption update picture
var img_grid = 0;
var img_solar = 0 ;
var img_ev = 0;
var G = 0;
var S = 0;
var E = 0;
//Mode update picture
var M = 0;
var img_mode = 0;
//weather update picture
var W = 0;
var img_weather = 0;

          window.CPT_kwh = 0;
          window.CPT_max = 0;
          window.CPM_kwh = 0;
          window.CPM_max = 0;
          window.AEC_use = 0;
          window.AEC_gen = 0;

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

          function update_Cur_rate(Cur_rate) {
            $("#Cur_rate").text(String(Cur_rate));
            $("#Cur_rate2").text(String(Cur_rate));
          }

          function update_CPT_kwh(CPT_kwh) {
            window.CPT_kwh = Number(CPT_kwh);
            renderCP1();
          }

          function update_CPT_max(CPT_max) {
            window.CPT_max = Number(CPT_max);
            renderCP1();
          }

          function update_CPT_baht(CPT_baht) {
            $("#CPT_baht").text(String(CPT_baht));
          }

          function update_CPT_comp(CPT_comp) {
            window.CPT_comp = CPT_comp;
            $("#CPT_comp").text(String(Math.abs(CPT_comp)));
            if(CPT_comp > 0 ) {
              $("#CPT_comp_direction").removeClass("up down").addClass("up");
              $("#CPT_comp_color").css("color", "#e7505a");
            } else if(CPT_comp < 0) {
              $("#CPT_comp_direction").removeClass("up down").addClass("down");
              $("#CPT_comp_color").css("color", "#26C281");
            }
            renderCP1();
          }

          function update_CPM_kwh(CPM_kwh) {
            window.CPM_kwh = Number(CPM_kwh);
            renderCP2();
          }

          function update_CPM_max(CPM_max) {
            window.CPM_max = Number(CPM_max);
            renderCP2();
          }

          function update_CPM_baht(CPM_baht) {
            $("#CPM_baht").text(String(CPM_baht));
          }

          function update_CPM_comp(CPM_comp) {
            window.CPM_comp = CPM_comp;
            $("#CPM_comp").text(String(Math.abs(CPM_comp)));
            if(CPM_comp > 0 ) {
              $("#CPM_comp_direction").removeClass("up down").addClass("up");
              $("#CPM_comp_color").css("color", "#e7505a");
            } else if(CPM_comp < 0) {
              $("#CPM_comp_direction").removeClass("up down").addClass("down");
              $("#CPM_comp_color").css("color", "#26C281");
            }
            renderCP2();
          }

          function update_LT1_comp(LT1_comp) {
            if(LT1_comp > 0)
              $("#LT1_comp_direction").removeClass("up down").addClass("up");
            else if(LT1_comp < 0)
              $("#LT1_comp_direction").removeClass("up down").addClass("down");
            $("#LT1_comp").text(String(Math.abs(LT1_comp)));
          }

          function update_LT1_baht(LT1_baht) {
            $("#LT1_baht").text(String(LT1_baht));
          }

          function update_LT2_comp(LT2_comp) {
            if(Number(LT2_comp) > 0)
              $("#LT2_comp_direction").removeClass("up down").addClass("up");
            else if(Number(LT2_comp) < 0)
              $("#LT2_comp_direction").removeClass("up down").addClass("down");
            $("#LT2_comp").text(String(Math.abs(LT2_comp)));
          }

          function update_LT2_baht(LT2_baht) {
            $("#LT2_baht").text(String(LT2_baht));
          }

          function update_LT3_comp(LT3_comp) {
            if(Number(LT3_comp) > 0)
              $("#LT3_comp_direction").removeClass("up down").addClass("up");
            else if(Number(LT3_comp) < 0)
              $("#LT3_comp_direction").removeClass("up down").addClass("down");
            $("#LT3_comp").text(String(Math.abs(LT3_comp)));
          }

          function update_LT3_baht(LT3_baht) {
            $("#LT3_baht").text(String(LT3_baht));
          }

          function update_LT4_comp(LT4_comp) {
            if(Number(LT4_comp) > 0)
              $("#LT4_comp_direction").removeClass("up down").addClass("up");
            else if(Number(LT4_comp) < 0)
              $("#LT4_comp_direction").removeClass("up down").addClass("down");
            $("#LT4_comp").text(String(Math.abs(LT4_comp)));
          }

          function update_LT4_baht(LT4_baht) {
            $("#LT4_baht").text(String(LT4_baht));
          }

          function update_LM1_comp(LM1_comp) {
            if(Number(LM1_comp) > 0)
              $("#LM1_comp_direction").removeClass("up down").addClass("up");
            else if(Number(LM1_comp) < 0)
              $("#LM1_comp_direction").removeClass("up down").addClass("down");
            $("#LM1_comp").text(String(Math.abs(LM1_comp)));
          }

          function update_LM1_baht(LM1_baht) {
            $("#LM1_baht").text(String(LM1_baht));
          }

          function update_LM2_comp(LM2_comp) {
            if(Number(LM2_comp) > 0)
              $("#LM2_comp_direction").removeClass("up down").addClass("up");
            else if(Number(LM2_comp) < 0)
              $("#LM2_comp_direction").removeClass("up down").addClass("down");
            $("#LM2_comp").text(String(Math.abs(LM2_comp)));
          }

          function update_LM2_baht(LM2_baht) {
            $("#LM2_baht").text(String(LM2_baht));
          }

          function update_LM3_comp(LM3_comp) {
            if(Number(LM3_comp) > 0)
              $("#LM3_comp_direction").removeClass("up down").addClass("up");
            else if(Number(LM3_comp) < 0)
              $("#LM3_comp_direction").removeClass("up down").addClass("down");
            $("#LM3_comp").text(String(Math.abs(LM3_comp)));
          }

          function update_LM3_baht(LM3_baht) {
            $("#LM3_baht").text(String(LM3_baht));
          }

          function update_LM4_comp(LM4_comp) {
            if(Number(LM4_comp) > 0)
              $("#LM4_comp_direction").removeClass("up down").addClass("up");
            else if(Number(LM4_comp) < 0)
              $("#LM4_comp_direction").removeClass("up down").addClass("down");
            $("#LM4_comp").text(String(Math.abs(LM4_comp)));
          }

          function update_LM4_baht(LM4_baht) {
            $("#LM4_baht").text(String(LM4_baht));
          }

          function update_AEC_gen(AEC_gen) {
            window.AEC_gen = Number(AEC_gen);
            $("#AEC_gen").text(String(AEC_gen));
            updateGuage();
          }

          function update_AEC_use(AEC_use) {
            window.AEC_use = Number(AEC_use);
            $("#AEC_use").text(String(AEC_use));
            updateGuage();
          }

          function updateGuage() {
            var useplusgen = AEC_use+AEC_gen;
            var overgen = AEC_gen-AEC_use;
            percent = 0.5 + (overgen/useplusgen)/2;
            if(percent == 0.5) {
              AEC_message = "Net Zero";
              AEC_color = "#26C281";
            }
            else if(percent > 0.5) {
              AEC_message = "Over Generation";
              AEC_color = "#32c5d2";
            }
            else {
              AEC_message = "Over Consumption";
              AEC_color = "#e7505a";
            }
            renderGauge();
          }

          function update_LOAD1_on(LOAD1_on) {
            $("#LOAD1_on").text(String(LOAD1_on));
          }
          function update_LOAD1_all(LOAD1_all) {
            $("#LOAD1_all").text(String(LOAD1_all));
          }
          function update_LOAD2_on(LOAD2_on) {
            $("#LOAD2_on").text(String(LOAD2_on));
          }
          function update_LOAD2_all(LOAD2_all) {
            $("#LOAD2_all").text(String(LOAD2_all));
          }
          function update_LOAD3_on(LOAD3_on) {
            $("#LOAD3_on").text(String(LOAD3_on));
          }
          function update_LOAD3_all(LOAD3_all) {
            $("#LOAD3_all").text(String(LOAD3_all));
          }

          function update_GRID_status(GRID_status) {
            $("#GRID_status").text(String(GRID_status));
          }

          function update_GRID_kw(GRID_kw) {
            $("#GRID_kw").text(String(Math.abs(Number(GRID_kw))));
            if(Number(GRID_kw) > 0) {
              $("#GRID_kw_direction").removeClass("up2 down2").addClass("up2");
            } else if(Number(GRID_kw) < 0) {
              $("#GRID_kw_direction").removeClass("up2 down2").addClass("down2");
            }
          }

          function update_SOLAR_status(SOLAR_status) {
            $("#SOLAR_status").text(String(SOLAR_status));
          }

          function update_SOLAR_kw(SOLAR_kw) {
            $("#SOLAR_kw").text(String(Math.abs(Number(SOLAR_kw))));
            if(Number(SOLAR_kw) > 0) {
              $("#SOLAR_kw_direction").removeClass("up2 down2").addClass("up2");
            } else if(Number(SOLAR_kw) < 0) {
              $("#SOLAR_kw_direction").removeClass("up2 down2").addClass("down2");
            }
          }

          function update_MODE(MODE) {
            $("#MODE").text(String(MODE));
          }

          function update_MODE_status(MODE_status) {
            $("#MODE_status").text(String(MODE_status));
          }

          function update_MODE_baht(MODE_baht) {
            $("#MODE_baht").text(String(Math.abs(Number(MODE_baht))));
            if(Number(MODE_baht) > 0) {
              $("#MODE_baht_direction").removeClass("up2 down2").addClass("up2");
            } else if(Number(MODE_baht) < 0) {
              $("#MODE_baht_direction").removeClass("up2 down2").addClass("down2");
            }
          }

          function update_EV_status(EV_status) {
            $("#EV_status").text(String(EV_status));
          }

          function update_EV_percent(EV_percent) {
            $("#EV_percent").text(String(Math.abs(Number(EV_percent))));
            if(Number(EV_percent) > 0) {
              $("#EV_percent_direction").removeClass("up2 down2").addClass("up2");
            } else if(Number(EV_percent) < 0) {
              $("#EV_percent_direction").removeClass("up2 down2").addClass("down2");
            }
          }

          function update_LOAD_status(LOAD_status) {
            $("#LOAD_status").text(String(LOAD_status));
          }

          function update_LOAD_kw(LOAD_kw) {
            $("#LOAD_kw").text(String(Math.abs(Number(LOAD_kw))));
            if(Number(LOAD_kw) > 0) {
              $("#LOAD_kw_direction").removeClass("up2 down2").addClass("up2");
            } else if(Number(LOAD_kw) < 0) {
              $("#LOAD_kw_direction").removeClass("up2 down2").addClass("down2");
            }
          }


$( document ).ready(function() {
                startTime();
            setValue();
    // $.csrftoken();

    // var ws = new WebSocket("ws://" + window.location.host + "/socket_misc");
    //
    //  ws.onopen = function () {
    //      ws.send("WS opened from html page");
    //  };
    //
    //  ws.onmessage = function (event) {
    //      var _data = event.data;
    //      _data = $.parseJSON(_data);
    //      var topic = _data['topic'];
    //      // ["", "ui", "web", "misc", "auto_discovery", "status"]
    //      var message = _data['message'];
    //      if (topic) {
    //          topic = topic.split('/');
    //          //console.log(topic);
    //          if (topic[4] == 'auto_discovery' && topic[5] == 'status') {
    //              update_discovery_status(message);
    //          }
    //      }
    //  };

     var ws = new WebSocket("ws://" + window.location.host + "/socket_powermeter");

     ws.onopen = function () {
         ws.send("WS opened from html page");
     };

     ws.onmessage = function (event) {
         var _data = event.data;
         _data = $.parseJSON(_data);
         console.log(_data);
         var _message = $.parseJSON(_data['message']);
         // console.log(_message.grid_activePower);
         update_GRID_kw(_message.grid_activePower);
         update_SOLAR_kw(_message.solar_activePower);
         update_LOAD_kw(_message.load_activePower);
         img_grid = _message.grid_activePower;
         img_solar = _message.solar_activePower;
         update_ENERGY_pic(img_grid, img_solar, img_ev)
         // var topic = _data['topic'];
         // // ["", "ui", "web", "misc", "auto_discovery", "status"]
         // var message = _data['message'];
         // if (topic) {
         //     topic = topic.split('/');
         //     //console.log(topic);
         //     if (topic[4] == 'auto_discovery' && topic[5] == 'status') {
         //         update_discovery_status(message);
         //     }
         // }
     };


     var ws_weahter = new WebSocket("ws://" + window.location.host + "/socket_weather");

     ws_weahter.onopen = function () {
         ws.send("WS Weather connected");
     };

     ws_weahter.onmessage = function (event) {

         var _data = event.data;
         _data = $.parseJSON(_data);
         console.log("WEATHER DATA: " + _data);
         var _topic = _data['topic'];
         console.log(_topic);
         var _headers = _data['headers'];
         console.log(_headers);
         var _message = $.parseJSON(_data['message']);
         console.log(_message);
         console.log('---------------------------------')

         // var _data = event.data.trim();
         // _data = $.parseJSON(_data);
         // var topic = _data['topic'];
         // var msg = $.parseJSON(_data['message']);
         // console.log ("WEATHER DATA: "+ msg);
         // console.log(msg);
         // console.log(msg['temp_c']);
         $('#WEATHER_pic').attr("src" , _message.icon);
         $('#WEA_temp').text(String(_message.temp_c));
         $('#WEA_humid').text(String(_message.humidity));
         $('#WEA_title').text(String(_message.weather))
         // //$('#WEA_title').text("123456");

     };

     var ws_dashboard = new WebSocket("ws://" + window.location.host + "/socket_dashboard");

     ws_dashboard.onopen = function () {
         ws_dashboard.send("WS opened from html page");
     };

     ws_dashboard.onmessage = function (event) {
         var _data = event.data;
         _data = $.parseJSON(_data);
         console.log(_data);
         var _topic = _data['topic'];
         console.log(_topic);
         var _headers = _data['headers'];
         console.log(_headers.data_source);
         var _message = $.parseJSON(_data['message']);


         if (_headers.data_source == 'gridApp') {
             console.log(_message.current_electricity_price);
            update_Cur_rate(_message.current_electricity_price);
         } else if (_headers.data_source == 'powermeterApp') {
            update_CPT_kwh(_message.daily_energy_usage);
            update_CPT_baht(_message.daily_electricity_bill);
            update_CPT_comp(_message.last_day_bill_compare);
            update_CPT_max(_message.last_day_energy_usage);
            update_LT1_baht(_message.daily_bill_light);
            update_LT1_comp(_message.daily_bill_light_compare_percent);
            update_LT2_baht(_message.daily_bill_AC);
            update_LT2_comp(_message.daily_bill_AC_compare_percent);
            update_LT3_baht(_message.daily_bill_plug);
            update_LT3_comp(_message.daily_bill_plug_compare_percent);
            update_LT4_baht(_message.daily_bill_EV);
            update_LT4_comp(_message.daily_bill_EV_compare_percent);
            update_CPM_kwh(_message.monthly_energy_usage);
            update_CPM_baht(_message.monthly_electricity_bill);
            update_CPM_comp(_message.last_month_bill_compare);
            update_CPM_max(_message.last_month_energy_usage);
            update_LM1_baht(_message.monthly_bill_light);
            update_LM1_comp(_message.monthly_bill_light_compare_percent);
            update_LM2_baht(_message.monthly_bill_AC);
            update_LM2_comp(_message.monthly_bill_AC_compare_percent);
            update_LM3_baht(_message.monthly_bill_plug);
            update_LM3_comp(_message.monthly_bill_plug_compare_percent);
            update_LM4_baht(_message.monthly_bill_EV);
            update_LM4_comp(_message.monthly_bill_EV_compare_percent);
            update_AEC_use(_message.netzero_energy_consumption);
            update_AEC_gen(_message.netzero_onsite_generation);

         } else if (_headers.data_source == 'EVApp') {
             update_EV_percent(_message.percentage_charge);
             update_EV_status(_message.EV_mode);
             img_ev = _message.percentage_charge;
             console.log("EV_percentage = "+ img_ev);


         }  else if (_headers.data_source == 'modeApp') {
            update_MODE(_message.home_mode);
            update_MODE_baht(_message.ECO_saving_cost);
            img_mode = _message.home_mode;
            console.log("Mode = "+ img_mode);

         } else if (_headers.data_source == 'devicesStatus') {
            update_LOAD1_on(_message.number_lamp_working);
            update_LOAD1_all(_message.total_lamp);
            update_LOAD2_on(_message.number_AC_working);
            update_LOAD2_all(_message.total_AC);
            update_LOAD3_on(_message.number_plug_working);
            update_LOAD3_all(_message.total_plug);
         } else if (_headers.data_source == 'netpiebutton') {
             $('#DR_Modal').modal('show');
         } else if (_headers.data_source == 'camera') {
             document.getElementById("occupant").innerHTML = _message.occupant
         }
         console.log("Update function");
         //Test change current energy consumption image
         // img_grid = 100 ;
         // img_solar = 0.100 ;
         // img_ev = 0 ;
         update_ENERGY_pic(img_grid, img_solar, img_ev);
         $('#ENERGY_pic').attr('src', '../static/images/Current_Energy/' + img_grid + img_solar + img_ev + '.png');
         //Test change mode image
         // img_mode = 'COMFORT' ;
         update_MODE_pic(img_mode);
         $('#MODE_pic').attr('src', '../static/images/Mode/' + img_mode + '.png');


         // document.getElementById("SOLAR_kw").innerHTML = _message.solar_activePower;
         // document.getElementById("LOAD_kw").innerHTML = _message.load_activePower;
         // var topic = _data['topic'];
         // // ["", "ui", "web", "misc", "auto_discovery", "status"]
         // var message = _data['message'];
         // if (topic) {
         //     topic = topic.split('/');
         //     //console.log(topic);
         //     if (topic[4] == 'auto_discovery' && topic[5] == 'status') {
         //         update_discovery_status(message);
         //     }
         // }
     };

    // var ws_weahter = new WebSocket("ws://" + window.location.host + "/socket_weather");
    //
    //  ws_weahter .onopen = function () {
    //      ws.send("WS Weather connected");
    //  };
    //
    //  ws_weahter .onmessage = function (event) {
    //      var _data = event.data.trim();
    //      _data = $.parseJSON(_data);
    //      var topic = _data['topic'];
    //      var msg = $.parseJSON(_data['message']);
    //
    //      console.log(msg);
    //      console.log(msg['temp_c']);
    //      $('#WEATHER_pic').attr("src" , msg['icon']);
    //
    //      $('#WEA_temp').text(String(msg.temp_c));
    //      $('#WEA_humid').text(String(msg.humidity));
    //      $('#WEA_title').text(String(msg['weather']))
    //      // //$('#WEA_title').text("123456");
    //
    //  }

// <!-- BEGIN Current Energy Consumption Pictures-->
    function update_ENERGY_pic(G, S, E){
    console.log("G = " + G , "S = " + S , "E = " + E );
     if (typeof G == "undefined"){
         G = 0; }
         else{
         if(G > 0){
           img_grid = 'G';
         }else if(G <= 0){
           img_grid = '-';
         }
     }
     if (typeof S == "undefined"){
        S = 0;}
        else {
        if (S > 0){
           img_solar = 'S';
        }else if (S <= 0){
           img_solar = '-';
        }
     }
     if (typeof E == "undefined"){
         E = 0; }
         else {
         if (E > 0){
             img_ev = 'E';
         } else if (E <= 0){
            img_ev = '-';
         }
     }
    console.log("G = " + G , "S = " + S , "E = " + E );
    console.log("image changed to : " + img_grid + img_solar + img_ev);

    }
// <!--END Current Energy Consumption Pictures-->
// <!-- BEGIN Mode Pictures-->
    function update_MODE_pic(M){
    console.log("M = " + M);
        if (M == 'COMFORT'){
           img_mode = 'comfort_mode';}
        else if(M == 'ECO'){
            img_mode = 'eco_mode';
        }else if(M == 'DR'){
            img_mode = 'dr_mode';
        }
    // console.log("Mode = " + M );
    console.log("image mode  : " + img_mode);
}
// <!--END Mode Pictures-->

// // Begin Weather picture
//    function update_WEATHER_pic(W){
//     console.log("W = " + W);
//         if (W == 'SUNNY'){
//            img_weather = 'sun';}
//         else if(M == 'RAINNY'){
//             img_weather = 'rain-1';
//         }else if(M == 'CLOUNDY'){
//             img_weather = 'cloudy';
//         }
//     // console.log("Mode = " + M );
//     console.log("image weather  : " + img_weather);
//
// // End Weather picture

    function update_discovery_status(message){
        if (role == 'admin' || zone == uzone){
            if (message == 'ON'){
                 $("#pnp_on").css('display','block');
                 $("#pnp_off").css('display','none');
             } else {
                 $("#pnp_on").css('display','none');
                 $("#pnp_off").css('display','block');
             }
        }
    }

    //var nick_re = /^[A-Za-z0-9_ ]*[A-Za-z0-9 ][A-Za-z0-9_ ]{5,10}$/;
    var nick_re = /^[A-Za-z0-9_]{6,15}$/;

    $('body').on('click',"button[id^='hplus-']", function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get its current value
        var zone_id = this.id;
        zone_id = zone_id.split("-");
        zone_id = zone_id[1];
        var currentVal = parseFloat($("#heat_sp-"+zone_id).text());
        // If is not undefined
        if (!isNaN(currentVal) && currentVal < 95) {
            // Increment
            $("#heat_sp-"+zone_id).text(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $("#heat_sp-"+zone_id).text(95);
        }
    });

// This button will decrement the heat value till 0
    $('body').on('click',"button[id^='hminus-']", function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get its current value
        var zone_id = this.id;
        zone_id = zone_id.split("-");
        zone_id = zone_id[1];
        var currentVal = parseFloat($("#heat_sp-"+zone_id).text());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 35) {
            // Decrement one
            $("#heat_sp-"+zone_id).text(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $("#heat_sp-"+zone_id).text(35);
        }
    });

    $('body').on('click',"button[id^='cplus-']", function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get its current value
        var zone_id = this.id;
        zone_id = zone_id.split("-");
        zone_id = zone_id[1];
        var currentVal = parseFloat($("#cool_sp-"+zone_id).text());
        // If is not undefined
        if (!isNaN(currentVal) && currentVal < 95) {
            // Increment
            $("#cool_sp-"+zone_id).text(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $("#cool_sp-"+zone_id).text(95);
        }
    });

// This button will decrement the heat value till 0
    $('body').on('click',"button[id^='cminus-']", function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get its current value
        var zone_id = this.id;
        zone_id = zone_id.split("-");
        zone_id = zone_id[1];
        var currentVal = parseFloat($("#cool_sp-"+zone_id).text());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 35) {
            // Decrement one
           $("#cool_sp-"+zone_id).text(currentVal - 1);
        } else {
            // Otherwise put a 0 there
           $("#cool_sp-"+zone_id).text(35);
        }
    });

    $("#add_new_zone_submit").click(function (evt) {
            evt.preventDefault();
            values = $("#add_new_zone").val();
            if (!nick_re.test(values)) {
                document.getElementById("newzoneerror").innerHTML = "Nickname can only contain letters and numbers and a space. Please try again.";
                document.getElementById(values).value = "";
            } else {
                $.ajax({
                    url: '/add_new_zone/',
                    type: 'POST',
                    data: values,
                    success: function (data) {
                        if (data == "invalid") {
                            document.getElementById("newzoneerror").innerHTML = "Your nickname was not accepted by BEMOSS. Please try again.";
                        } else {
                            location.reload();
                            $('.bottom-right').notify({
                                message: { text: 'A new zone was added.' },
                                type: 'blackgloss',
                                fadeOut: { enabled: true, delay: 5000 }
                            }).show();
                        }
                    },
                    error: function (data) {
                        $('.bottom-right').notify({
                            message: { text: 'Oh snap! Try submitting again. ' },
                            type: 'blackgloss',
                            fadeOut: { enabled: true, delay: 5000 }
                        }).show();
                    }
                });
            }
        });

    $(".save_changes_zn").click(function (evt) {
        evt.preventDefault();
        values = this.id.split('-');
        zone_id = values[1];
        values = values[1] + "_znickname";
        var value_er = values;
        znickname = $("#" + values).val();
        var error_id = "zonenickname_" + zone_id;
        if (!nick_re.test(znickname)) {
            document.getElementById(error_id).innerHTML = "Nickname error. Please try again.";
            document.getElementById(values).value = "";
        } else {
            values = {
                "id": zone_id,
                "nickname": znickname
            };
            var jsonText = JSON.stringify(values);
            $.ajax({
                url: '/save_zone_nickname_change/',
                type: 'POST',
                data: jsonText,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function (data) {
                    if (data == "invalid") {
                        document.getElementById(error_id).innerHTML = "Nickname error. Please try again.";
                        document.getElementById(value_er).value = "";
                    } else {
                        //$('#zoned_device_listing').load(' #zoned_device_listing'/*, function(){$(this).children().unwrap()}*/);
                        //$('#zoned_device_listing').html(data);
                        req_value_modal = data.zone_id + "_znick";
                        var newtest = document.getElementById(req_value_modal);
                        newtest.innerHTML = znickname.charAt(0).toUpperCase() + znickname.slice(1);
                        $('.bottom-right').notify({
                            message: { text: 'Heads up! The zone nickname change was successful.' },
                            type: 'blackgloss',
                            fadeOut: { enabled: true, delay: 5000 }
                        }).show();
                        // $("#" + req_val_stats).dialog("close");
                        // window.opener.location.reload(true);
                    }

                },
                error: function (data) {
                    $('.bottom-right').notify({
                        message: { text: 'Oh snap! Try submitting again. ' },
                        type: 'blackgloss',
                        fadeOut: { enabled: true, delay: 5000 }
                    }).show();
                }
            });
        }
    });

    $('body').on('click',"button[id^='gs-']", function (e) {
        e.preventDefault();
        var zone_id = this.id;
        zone_id = zone_id.split("-");
        zone_id = zone_id[1];
        var heat_setpoint = "heat_sp-" + zone_id;
        var cool_setpoint = "cool_sp-" + zone_id;
        var illumination = "illumination-" +  zone_id;
        heat_setpoint = $("#"+heat_setpoint).text();
        cool_setpoint = $("#"+cool_setpoint).text();
        illumination = $("#"+illumination).text();

        var values = {
            "zone_id": zone_id,
            "heat_setpoint": heat_setpoint,
            "cool_setpoint": cool_setpoint,
            "illumination": illumination
        };
        var jsonText = JSON.stringify(values);
        console.log(jsonText);
        $.ajax({
			  url : '/change_global_settings/',
			  type: 'POST',
			  data: jsonText,
			  contentType: "application/json; charset=utf-8",
			  dataType: 'json',
			  success : function(data) {
				//window.location.reload(true);
			  	$('.bottom-right').notify({
			  	    message: { text: 'Your changes were updated in the system.' },
			  	    type: 'blackgloss',
                    fadeOut: { enabled: true, delay: 5000 }
			  	  }).show();
			  },
			  error: function(data) {
				  $('.bottom-right').notify({
				  	    message: { text: 'The changes could not be updated at the moment. Try again later.' },
				  	    type: 'blackgloss',
                      fadeOut: { enabled: true, delay: 5000 }
				  	}).show();
			  }
			 });

    });

    $( "#select_comfort_mode" ).click(function() {
    console.log("comfort mode selected");
    var values = {};
    values['event'] = 'comfort';
    values['status'] = 'enable';
    var jsonText = JSON.stringify(values);

    $.ajax({
			  url : '/select_comfort_mode/',
			  type: 'GET',
			  // data: jsonText,
			  // contentType: "application/json; charset=utf-8",
			  dataType: 'json',
			  success : function(data) {
				//window.location.reload(true);
			  	$('.bottom-right').notify({
			  	    message: { text: 'Your changes were updated in the system.' },
			  	    type: 'blackgloss',
                    fadeOut: { enabled: true, delay: 5000 }
			  	  }).show();
			  },
			  error: function(data) {
				  $('.bottom-right').notify({
				  	    message: { text: 'The changes could not be updated at the moment. Try again later.' },
				  	    type: 'blackgloss',
                      fadeOut: { enabled: true, delay: 5000 }
				  	}).show();
			  }
	});
    var delay = 500;
    setTimeout(function() {
        $('#Comfort_Modal').modal('show');
    },delay);
});

$( "#select_eco_mode" ).click(function() {
    console.log("eco mode selected");
    var values = {};
    values['event'] = 'eco';
    values['status'] = 'enable';
    var jsonText = JSON.stringify(values);
    $.ajax({
			  url : '/select_eco_mode/',
			  type: 'GET',
			  // data: jsonText,
			  // contentType: "application/json; charset=utf-8",
			  dataType: 'json',
			  success : function(data) {
				// window.location.reload(true);
			  	$('.bottom-right').notify({
			  	    message: { text: 'Your changes were updated in the system.' },
			  	    type: 'blackgloss',
                    fadeOut: { enabled: true, delay: 5000 }
			  	  }).show();
			  },
			  error: function(data) {
				  $('.bottom-right').notify({
				  	    message: { text: 'The changes could not be updated at the moment. Try again later.' },
				  	    type: 'blackgloss',
                      fadeOut: { enabled: true, delay: 5000 }
				  	}).show();
			  }
	});
    var delay = 500;
    setTimeout(function() {
        $('#Eco_Modal').modal('show');
    },delay);
});

$( "#agree_dr" ).click(function() {
    console.log("agree_dr selected");
    var values = {};
    values['event'] = 'dr';
    values['status'] = 'enable';
    var jsonText = JSON.stringify(values);
    $.ajax({
			  url : '/agree_dr/',
			  type: 'GET',
			  // data: jsonText,
			  // contentType: "application/json; charset=utf-8",
			  dataType: 'json',
			  success : function(data) {
				//window.location.reload(true);
			  	$('.bottom-right').notify({
			  	    message: { text: 'Your changes were updated in the system.' },
			  	    type: 'blackgloss',
                    fadeOut: { enabled: true, delay: 5000 }
			  	  }).show();
			  },
			  error: function(data) {
				  $('.bottom-right').notify({
				  	    message: { text: 'The changes could not be updated at the moment. Try again later.' },
				  	    type: 'blackgloss',
                      fadeOut: { enabled: true, delay: 5000 }
				  	}).show();
			  }
    });
    var delay = 500;
    setTimeout(function() {
        $('#Agree_DR').modal('show');
    },delay);
});

$( "#disagree_dr" ).click(function() {
    console.log("disagree_dr selected");
    var values = {};
    values['event'] = 'dr';
    values['status'] = 'disable';
    var jsonText = JSON.stringify(values);
    $.ajax({
			  url : '/disagree_dr/',
			  type: 'GET',
			  // data: jsonText,
			  // contentType: "application/json; charset=utf-8",
			  dataType: 'json',
			  success : function(data) {
				//window.location.reload(true);
			  	$('.bottom-right').notify({
			  	    message: { text: 'Your changes were updated in the system.' },
			  	    type: 'blackgloss',
                    fadeOut: { enabled: true, delay: 5000 }
			  	  }).show();
			  },
			  error: function(data) {
				  $('.bottom-right').notify({
				  	    message: { text: 'The changes could not be updated at the moment. Try again later.' },
				  	    type: 'blackgloss',
                      fadeOut: { enabled: true, delay: 5000 }
				  	}).show();
			  }
    });
    var delay = 500;
    setTimeout(function() {
        $('#DisAgree_DR').modal('show');
    },delay);
});

});
