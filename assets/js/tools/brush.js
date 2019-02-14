var brushButton = document.getElementById('brush');

brushButton.addEventListener('click', selectBrush);

function selectBrush(){
  ctx.lineWidth = radius * 2;

  var putPoint = function(e) {
    if (dragging) {
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*1);
                  //clientX instead of offsetX for better browser compatibility
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  }
}
