var clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clearImage);

function clearImage(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
