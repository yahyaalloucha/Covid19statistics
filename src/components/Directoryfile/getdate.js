function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function date() {
  var dateObj = new Date();
  var monthx = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var yearx = dateObj.getUTCFullYear();
  var arr = [];
  daysInMonth(monthx, yearx);

  for (var i = 0; i < 28; i++) {
    var newdate = yearx + "/" + monthx + "/" + day;

    day = day - 1;
    //console.log(newdate);
    if (day < 1) {
      monthx = monthx - 1;

      if (monthx == 1) {
        monthx = 12;
        yearx = yearx - 1;
      }
      day = daysInMonth(monthx, yearx);
    }

    arr.push(newdate);
  }

  return arr.reverse();
}
export default date;
