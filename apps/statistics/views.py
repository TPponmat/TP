# -*- coding: utf-8 -*-
from django.contrib.auth.decorators import login_required
from django.template import RequestContext
from django.http import HttpResponse
from datetime import datetime
from django.shortcuts import render_to_response
from _utils import page_load_utils as _helper
from agents.ZMQHelper.zmq_pub import ZMQ_PUB
from _utils.page_load_utils import get_device_list_side_navigation
from apps.alerts.views import get_notifications, general_notifications
from apps.dashboard.models import DeviceMetadata
from apps.lighting.models import Lighting
import json
import psycopg2
import _utils.defaults as __
from apps.statistics.models import Daily_Consumption
from decimal import Decimal

kwargs = {'subscribe_address': __.SUB_SOCKET,
          'publish_address': __.PUSH_SOCKET}

zmq_pub = ZMQ_PUB(**kwargs)

# Functionality for lighting page load
@login_required(login_url='/login/')
def source_statistics(request):
    print 'inside source_statistics view method'
    context = RequestContext(request)
    username = request.session.get('user')
    print username
    if request.session.get('last_visit'):
        # The session has a value for the last visit
        last_visit_time = request.session.get('last_visit')

        visits = request.session.get('visits', 0)

        if (datetime.now() - datetime.strptime(last_visit_time[:-7], "%Y-%m-%d %H:%M:%S")).days > 0:
            request.session['visits'] = visits + 1
    else:
        # The get returns None, and the session does not have a value for the last visit.
        request.session['last_visit'] = str(datetime.now())
        request.session['visits'] = 1

    gridimportenergy = Daily_Consumption.objects.values_list('gridimportenergy')
    print('gridimportenergy: {}'.format(gridimportenergy))
    gridimportenergy2 = [float(n[0]) for n in gridimportenergy]
    print('gridimportenergy2: {}'.format(gridimportenergy2))

    # con = psycopg2.connect(host='localhost', port='5432', database='bemossdb', user='admin',
    #                             password='admin')
    # cur = con.cursor()  # open a cursor to perfomm database operations
    # print("{} connects to the database name {} successfully")
    #
    # cur.execute("SELECT gridimportenergy, solarenergy, gridimportbill, solarbill FROM  daily_consumption")
    # if cur.rowcount != 0:
    #     print("getting data from daily_consumption table")
    #     print cur.rowcount
    #     #print(cur.fetchall())
    #     all_data = cur.fetchall()
    #     print("all_data: {}".format(all_data))
    #     # TODO check date before constructing array
    #     gridimportenergy = [all_data[i][0] for i in range(0, len(all_data))]
    #     solarenergy = [all_data[i][1] for i in range(0, len(all_data))]
    #     gridimportbill = [all_data[i][2] for i in range(0, len(all_data))]
    #     solarbill = [all_data[i][3] for i in range(0, len(all_data))]
    #
    #     print(gridimportenergy, solarenergy, gridimportbill, solarbill)
    #
    #     # gridimportenergy.extend([0,0,0])
    #     # solarenergy.extend([0,0,0])
    #     # gridimportbill.extend([0,0,0])
    #     # solarbill.extend([0,0,0])

    return render_to_response(
        'statistics/statistics_all.html',
        # {'type': controller_type, 'device_data': _data, 'device_id': device_id, 'device_zone': device_zone,
        #  'device_type': controller_type, 'mac_address': mac, 'zone_nickname': zone_nickname,
        #  'device_nickname': device_nickname}, context)
        # {'type': "source", 'gridimportenergy': gridimportenergy, 'solarenergy': solarenergy,
        #  'gridimportbill': gridimportbill, 'solarbill': solarbill}, context)
        {'type': "source"}, context)

def load_statistics(request):
    print 'inside load_statistics view method'
    context = RequestContext(request)
    username = request.session.get('user')
    print username
    if request.session.get('last_visit'):
        # The session has a value for the last visit
        last_visit_time = request.session.get('last_visit')

        visits = request.session.get('visits', 0)

        if (datetime.now() - datetime.strptime(last_visit_time[:-7], "%Y-%m-%d %H:%M:%S")).days > 0:
            request.session['visits'] = visits + 1
    else:
        # The get returns None, and the session does not have a value for the last visit.
        request.session['last_visit'] = str(datetime.now())
        request.session['visits'] = 1


    return render_to_response(
        'statistics/statistics_load.html',
        # {'type': controller_type, 'device_data': _data, 'device_id': device_id, 'device_zone': device_zone,
        #  'device_type': controller_type, 'mac_address': mac, 'zone_nickname': zone_nickname,
        #  'device_nickname': device_nickname}, context)
        {'type': "load"}, context)