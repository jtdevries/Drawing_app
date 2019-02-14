var colors = ['#000000',
              '#737373',
              '#ffffff',
              '#FF00D8',
              '#9400D3',
              '#4B0082',
              '#0000FF',
              '#0BB2FF',
              '#00FF00',
              '#D5FF0D',
              '#FFFF00',
              '#FFCB0D',
              '#FF7F00',
              '#FF590D',
              '#FF0000',
              ];

for(var i=0, n=colors.length;i<n;i++) {
    var swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  var active = document.getElementsByClassName('active')[0];
  if (active) {
      active.className = 'swatch';
  }
}

function setSwatch(e) {
  //identif swatch
  var swatch = e.target;
  //set color
  setColor(swatch.style.backgroundColor);
  //give active class
  swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});
