var brushButton = document.getElementById('brush');

brushButton.addEventListener('click', selectBrush);

function selectBrush(){
  ctx.beginPath();
  ctx.setLineDash([5, 15]);
  ctx.stroke();
}
