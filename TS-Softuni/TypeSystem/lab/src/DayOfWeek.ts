enum Days {
  "Monday" = 1,
  "Tuesday" = 2,
  "Wednesday" = 3,
  "Thursday" = 4,
  "Friday" = 5,
  "Saturday" = 6,
  "Sunday" = 7,
}

function whatDayIsIt(day: string) {
  switch (day) {
    case "Monday": {
      return Days.Monday.valueOf();
    }
    case "Tuesday": {
      return Days.Tuesday.valueOf();
    }
    case "Wednesday": {
      return Days.Wednesday.valueOf();
    }
    case "Thursday": {
      return Days.Thursday.valueOf();
    }
    case "Friday": {
      return Days.Friday.valueOf();
    }
    case "Saturday": {
      return Days.Saturday.valueOf();
    }
    case "Sunday": {
      return Days.Sunday.valueOf();
    }
    default: {
      return "error";
    }
  }
}
console.log(whatDayIsIt("a"));
console.log(whatDayIsIt("Monday"));
console.log(whatDayIsIt("Sunday"));
console.log(whatDayIsIt("Error"));
