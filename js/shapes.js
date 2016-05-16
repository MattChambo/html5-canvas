var shapesCanvas = document.querySelector('#shapes');

var shapesContext = shapesCanvas.getContext('2d');

// Draw a rectangle
shapesContext.fillStyle = '#00b9ff';
shapesContext.fillRect(10, 10, 100, 20);
shapesContext.fillRect(10, 50, 150, 50);

shapesContext.fillStyle = 'rgba(100,0,0,.5)';
shapesContext.fillRect(10, 70, 150, 50);

shapesContext.strokeStyle = '#333333';
shapesContext.lineWidth = 5;
shapesContext.moveTo(50, 150);
shapesContext.lineTo(100, 150);
shapesContext.stroke();