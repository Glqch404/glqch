const charts = document.querySelectorAll('#skills-container canvas');

function drawChart(canvas, skillPercentage) {
  const ctx = canvas.getContext('2d');

  // Set base circle colors
  ctx.fillStyle = '#ddd';
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
  ctx.fill();

  // Set progress circle color and draw based on percentage
  ctx.fillStyle = '#4CAF50';
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2 * (skillPercentage / 100), true);
  ctx.fill();

  // Display percentage in the center
  ctx.fillStyle = '#333';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${skillPercentage}%`, canvas.width / 2, canvas.height / 2);
}

charts.forEach(chart => {
  const skillId = chart.id.split('-')[1]; // Extract skill ID from canvas ID
  const skillPercentage = document.querySelector(`#${skillId}-percentage`).textContent.replace(/\%\s*/, ''); // Get percentage from corresponding span
  drawChart(chart, skillPercentage);
});