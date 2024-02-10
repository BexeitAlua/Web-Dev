function getWeekDay(date) {

    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2019, 0, 19); 
  alert( getWeekDay(date) );
  //////////////////////////////////////////

  //new Date(year, month, date, hour, minute, second, millisecond)
  let d1 = new Date(2012, 1, 20, 3, 12);
  alert( d1 );

  //////////////////////////////////////////////////////

  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }
  alert( getLocalDay(date) ); 
  ////////////////////////////////////////////////////////

  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let d2 = new Date(2015, 0, 2);
  
  alert( getDateAgo(d2, 1) ); // 1
  alert( getDateAgo(d2, 2) ); // 31
  alert( getDateAgo(d2, 365) ); // 2
  /////////////////////////////////////////////////////////

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  console.log( getLastDayOfMonth(2012, 0) ); // 31
  console.log( getLastDayOfMonth(2012, 1) ); // 29
  console.log( getLastDayOfMonth(2013, 1) ); // 28

  ///////////////////////////////////////////////
  function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  console.log( getSecondsToday() );

  //////////////////////////////////

  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }
//////////////////////////////////////////