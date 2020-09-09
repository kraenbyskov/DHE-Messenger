const GetTime = () => {
  var today = new Date();
  var time =
    today.getHours() +
    ":" +
    (today.getMinutes() < 10 ? "0" : "") +
    today.getMinutes() +
    ":" +
    (today.getSeconds() < 10 ? "0" : "") +
    today.getSeconds();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return date + "-" + time;
};

export default GetTime;
