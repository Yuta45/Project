function myClock() {         
    setTimeout(function() {   
      const date = new Date();
      const dateString = date.toLocaleTimeString('en-GB', {hour12: false});
      const split = dateString.split(":");
      const hour = parseInt(split[0]);
      const min = parseInt(split[1]);
      const timeOutput = hour + ':' + `${min<10 ?`0${min}`:min}`
      
      document.getElementById("clock").innerHTML = timeOutput; 
      myClock();
    }, 1000)
}
  
myClock();