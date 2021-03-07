import React from "react";

export default function GetDayFromDate(props) {
    
    let todayDate = new Date(props.date *1000);
    let day = todayDate.getDay();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      day = days[day];

      return day;
}