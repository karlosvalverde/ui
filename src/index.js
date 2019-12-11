import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles.scss";

var $table = $('#table');
var mydata = 
[
{
    "id": 0,
    "name": "test0",
    "price": "$0"
},
{
    "id": 1,
    "name": "test1",
    "price": "$1"
},
{
    "id": 2,
    "name": "test2",
    "price": "$2"
},
{
    "id": 3,
    "name": "test3",
    "price": "$3"
},
{
    "id": 4,
    "name": "test4",
    "price": "$4"
},
{
    "id": 5,
    "name": "test5",
    "price": "$5"
},
{
    "id": 6,
    "name": "test6",
    "price": "$6"
},
{
    "id": 7,
    "name": "test7",
    "price": "$7"
},
{
    "id": 8,
    "name": "test8",
    "price": "$8"
},
{
    "id": 9,
    "name": "test9",
    "price": "$9"
},
{
    "id": 10,
    "name": "test10",
    "price": "$10"
},
{
    "id": 11,
    "name": "test11",
    "price": "$11"
},
{
    "id": 12,
    "name": "test12",
    "price": "$12"
},
{
    "id": 13,
    "name": "test13",
    "price": "$13"
},
{
    "id": 14,
    "name": "test14",
    "price": "$14"
},
{
    "id": 15,
    "name": "test15",
    "price": "$15"
},
{
    "id": 16,
    "name": "test16",
    "price": "$16"
},
{
    "id": 17,
    "name": "test17",
    "price": "$17"
},
{
    "id": 18,
    "name": "test18",
    "price": "$18"
},
{
    "id": 19,
    "name": "test19",
    "price": "$19"
},
{
    "id": 20,
    "name": "test20",
    "price": "$20"
}
];

let days
var mydata2 =
[
    {
    "length": 17,
    "records": [
      {
        "id": 1,
        "x_studio_startdate": "2019-02-11 03:00:00",
        "x_studio_stopdate": "2019-02-14 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 2,
        "x_name": "dmo",
        "x_studio_progress": 30,
        "x_studio_excluded": false,
        "display_name": "dmo"
      },
      {
        "id": 2,
        "x_studio_startdate": "2019-02-14 11:00:00",
        "x_studio_stopdate": "2019-02-15 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "a",
        "x_studio_progress": 66,
        "x_studio_excluded": false,
        "display_name": "a"
      },
      {
        "id": 3,
        "x_studio_startdate": "2019-02-09 23:00:00",
        "x_studio_stopdate": "2019-02-10 22:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "k",
        "x_studio_progress": 50,
        "x_studio_excluded": false,
        "display_name": "k"
      },
      {
        "id": 4,
        "x_studio_startdate": "2019-02-14 23:00:00",
        "x_studio_stopdate": "2019-02-15 22:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "a",
        "x_studio_progress": 17,
        "x_studio_excluded": false,
        "display_name": "a"
      },
      {
        "id": 5,
        "x_studio_startdate": "2019-02-04 23:00:00",
        "x_studio_stopdate": "2019-02-06 22:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "a",
        "x_studio_progress": 80,
        "x_studio_excluded": false,
        "display_name": "a"
      },
      {
        "id": 6,
        "x_studio_startdate": "2019-02-14 11:00:00",
        "x_studio_stopdate": "2019-02-24 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 3,
        "x_name": "a",
        "x_studio_progress": 40,
        "x_studio_excluded": false,
        "display_name": "a"
      },
      {
        "id": 7,
        "x_studio_startdate": "2019-02-13 23:00:00",
        "x_studio_stopdate": "2019-02-22 22:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 4,
        "x_name": "e",
        "x_studio_progress": 81,
        "x_studio_excluded": true,
        "display_name": "e"
      },
      {
        "id": 8,
        "x_studio_startdate": "2019-02-11 11:00:00",
        "x_studio_stopdate": "2019-02-12 22:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "agrnlgkrlgrlgklrgklrjgklrjgklrlgjrlgjrgjrl",
        "x_studio_progress": 75,
        "x_studio_excluded": false,
        "display_name": "agrnlgkrlgrlgklrgklrjgklrjgklrlgjrlgjrgjrl"
      },
      {
        "id": 9,
        "x_studio_startdate": "2019-02-12 11:00:00",
        "x_studio_stopdate": "2019-02-13 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "a",
        "x_studio_progress": 70,
        "x_studio_excluded": false,
        "display_name": "a"
      },
      {
        "id": 11,
        "x_studio_startdate": "2019-02-10 23:00:00",
        "x_studio_stopdate": "2019-02-21 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 5,
        "x_name": "a",
        "x_studio_progress": 75,
        "x_studio_excluded": true,
        "display_name": "a"
      },
      {
        "id": 12,
        "x_studio_startdate": "2019-02-10 11:00:00",
        "x_studio_stopdate": "2019-02-11 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "d",
        "x_studio_progress": 90,
        "x_studio_excluded": false,
        "display_name": "d"
      },
      {
        "id": 13,
        "x_studio_startdate": "2019-02-24 06:00:00",
        "x_studio_stopdate": "2019-02-24 22:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "a",
        "x_studio_progress": 0,
        "x_studio_excluded": false,
        "display_name": "a"
      },
      {
        "id": 14,
        "x_studio_startdate": "2019-02-11 11:00:00",
        "x_studio_stopdate": "2019-02-12 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "a",
        "x_studio_progress": 37,
        "x_studio_excluded": false,
        "display_name": "a"
      },
      {
        "id": 15,
        "x_studio_startdate": "2019-02-02 11:00:00",
        "x_studio_stopdate": "2019-02-03 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 2,
        "x_name": "a",
        "x_studio_progress": 60,
        "x_studio_excluded": false,
        "display_name": "a"
      },
      {
        "id": 16,
        "x_studio_startdate": "2019-02-02 23:00:00",
        "x_studio_stopdate": "2019-02-03 22:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "c",
        "x_studio_progress": 45,
        "x_studio_excluded": false,
        "display_name": "c"
      },
      {
        "id": 17,
        "x_studio_startdate": "2019-02-03 12:00:00",
        "x_studio_stopdate": "2019-02-04 10:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "b",
        "x_studio_progress": 20,
        "x_studio_excluded": false,
        "display_name": "b"
      },
      {
        "id": 18,
        "x_studio_startdate": "2019-02-25 06:00:00",
        "x_studio_stopdate": "2019-02-25 12:59:59",
        "x_studio_g1": "Primary",
        "x_studio_color": 0,
        "x_name": "ghj",
        "x_studio_progress": 0,
        "x_studio_excluded": false,
        "display_name": "ghj"
      }
    ]
  }
];

$(function () {
    $('#table').bootstrapTable({
        data: mydata
    });
});