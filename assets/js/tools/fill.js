var fillColors = ['#000000',
                  '#737373',
                  '#ffffff',
                  ];

for(var i=0, n=fillColors.length;i<n;i++) {
    var fill = document.createElement('div');
    fill.className = 'fill';
    fill.style.backgroundColor = fillColors[i];
    fill.addEventListener('click', setFill);
    document.getElementById('fill').appendChild(fill);
}

function setFillColor(fill) {
  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = fill;
  var active = document.getElementsByClassName('active')[0];
  if (active) {
      active.className = 'fill';
  }
}

function setFill(e) {
  //identif fill
  var fill = e.target;
  //set fill
  setFillColor(fill.style.backgroundColor);
  //give active class
  fill.className += ' active';
}

// setSwatch({target: document.getElementsByClassName('fill')[0]});
