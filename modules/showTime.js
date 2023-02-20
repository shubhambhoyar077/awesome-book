import { DateTime } from "../modules/luxon.js";

export const showDateTime = () =>{
  const dateTimeSpan = document.getElementById('currentDateTime');
  let dt = DateTime.now();
  dateTimeSpan.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
}