import { DateTime } from './luxon.js';

const showTime = () => {
  const dateTimeSpan = document.getElementById('currentDateTime');
  const dt = DateTime.now();
  dateTimeSpan.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
};
export default showTime;