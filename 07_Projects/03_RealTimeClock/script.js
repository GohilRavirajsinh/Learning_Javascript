const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// setInterval - is a run on methods, give them interval to run again and again. method have 2 Parameters
// Syntax setInterval(function(){},IntervalTiming)
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); // it print on terminal so it cannot see in html page so using direct id.innerHTML
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 = 1sec its millisec..
