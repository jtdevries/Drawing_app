var setOpac = function(newOpac) {
    if (newOpac < minOpac) {
        newOpac = minOpac;
    }
    else if (newOpac > maxOpac) {
          newOpac = maxOpac;
    }
    opacity = newOpac;
    opacSpan.innerHTML = opacity;
}

var minRad = 0.1,
    maxRad = 1,
    defaultRad = 1,
    interval = 0.1,
    opacSpan = document.getElementById('opacval'),
    decOpac = document.getElementById('decopac'),
    incOpac = document.getElementById('incopac');

decOpac.addEventListener('click', function(){
  setOpac(opacity-interval);
});
incOpac.addEventListener('click', function(){
  setOpac(opacity+interval);
});

setOpac(defaultOpac);
