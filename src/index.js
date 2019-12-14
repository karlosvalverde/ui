import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-table";
import "bootstrap-table/dist/bootstrap-table.min.css"
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles.scss";

var myTask = [
  {
      id: 10,
      name: 'Task 1',
      title: 'Title 1',
      date_start: '2019-05-09',
      date_end: '2019-06-10',
      color: 'crimson',
  },
  {
      id: 11,
      name: 'Task 2',
      date_start: '2019-06-15',
      date_end: '2019-06-20',
      color: '#ADD8E6',
  },
  {
      id: 12,
      name: 'Task 3',
      date_start: '2019-07-05',
      date_end: '2019-07-15',
      color: '#FFDAB9',
  },
  {
      id: 13,
      name: 'Task 4',
      date_start: '2019-07-16',
      date_end: '2019-07-18',
      color: '#BC8F8F',
  },
  {
      id: 14,
      name: 'Task 5',
      date_start: '2019-07-20',
      date_end: '2019-07-23',
      color: '#9932CC'
  },
  {
      id: 15,
      name: 'Task 6',
      date_start: '2019-07-25',
      date_end: '2019-07-28',
      color: '#808000'
  }
];

$(document).ready(function () {
  $('#myChart').gantt({
    data: myTask,
    widthCorrectionFirstCol: 100
  });
});