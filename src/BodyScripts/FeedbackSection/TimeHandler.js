import React from "react";
import moment from "moment";

export default function TimeHandler(timeStamp) {
  var dateStamp = new Date(Number(timeStamp));

  return moment(dateStamp).calendar();
}
