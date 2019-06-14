(function () {

    var c1 = document.getElementById("canvas1").getContext("2d");
    var c2 = document.getElementById("canvas2").getContext("2d");
    var c3 = document.getElementById("canvas3").getContext("2d");
    var c4 = document.getElementById("canvas4").getContext("2d");
    var c5 = document.getElementById("canvas5").getContext("2d");
    var c6 = document.getElementById("canvas6").getContext("2d");
    var c7 = document.getElementById("canvas7").getContext("2d");

    drawCanvas1();
    drawCanvas2();
    drawCanvas3();
    drawCanvas4();
    drawCanvas5();
    drawCanvas6();
    drawCanvas7();

    function drawCanvas1() {
        c1.fillStyle = "rgba(60, 60, 255, 1.0)";

        // fillRect(x, y, width, height)
        c1.fillRect(5, 5, 100, 100);

        c1.fillStyle = "rgba(255, 180, 0, 0.8)";
        c1.fillRect(55, 55, 100, 100);
    }

    function drawCanvas2() {
        c2.strokeStyle = "blue";
        c2.lineWidth = 6;

        c2.beginPath();
        c2.moveTo(100, 150); // moveTo(x, y)        
        c2.lineTo(150, 50); // lineTo(x, y)
        c2.lineTo(200, 150);
        c2.closePath(); // draw a line from the current point to the start point
        c2.stroke();

        c2.fillStyle = "green";

        c2.beginPath();
        c2.moveTo(115, 140);
        c2.lineTo(150, 70);
        c2.lineTo(185, 140);
        c2.fill();
    }

    function drawCanvas3() {
        c3.lineWidth = 4;
        c3.fillStyle = "yellow";

        c3.beginPath();

        // arc(x, y, radius, startAngle, endAngle, counterClockWise)
        c3.arc(150, 100, 75, 0, Math.PI * 2, true); // head
        c3.fill();

        c3.moveTo(205, 100);
        c3.arc(150, 100, 55, 0, Math.PI, false); // mouth

        c3.moveTo(130, 80);
        c3.arc(120, 80, 10, 0, Math.PI * 2, true); // left eye

        c3.moveTo(190, 80);
        c3.arc(180, 80, 10, 0, Math.PI * 2, true); // right eye
        c3.stroke();
    }

    function drawCanvas4() {
        c4.lineWidth = 5;
        c4.strokeStyle = "brown";
        c4.fillStyle = "coral";

        c4.beginPath();
        c4.moveTo(100, 80);
        c4.lineTo(100, 140);
        c4.arcTo(100, 150, 110, 150, 10);

        c4.lineTo(170, 150);
        c4.arcTo(200, 150, 200, 130, 30);

        c4.lineTo(200, 60);
        c4.arcTo(200, 50, 190, 50, 10);

        c4.lineTo(130, 50);
        c4.arcTo(100, 50, 100, 80, 30);

        c4.stroke();
        c4.fill();
    }

    function drawCanvas5() {
        c5.lineWidth = 4;
        c5.fillStyle = "azure";
        c5.strokeStyle = "blue";

        c5.beginPath();
        c5.moveTo(150, 50);
        c5.quadraticCurveTo(75, 50, 75, 100);

        c5.quadraticCurveTo(75, 150, 130, 150);
        c5.quadraticCurveTo(130, 180, 100, 180);
        c5.quadraticCurveTo(150, 180, 150, 150);

        c5.quadraticCurveTo(200, 150, 200, 100);
        c5.quadraticCurveTo(200, 50, 150, 50);

        c5.stroke();
        c5.fill();
    }

    function drawCanvas6() {
        var grad1 = c6.createLinearGradient(0, 0, 300, 200);
        grad1.addColorStop(0.0, "rgb(64, 0, 255)");
        grad1.addColorStop(1.0, "rgb(255, 0, 64)");

        c6.fillStyle = grad1;
        c6.fillRect(0, 0, 300, 200);

        var grad2 = c6.createLinearGradient(200, 25, 150, 175);
        grad2.addColorStop(0.0, "rgb(255, 255, 0)");
        grad2.addColorStop(0.5, "rgb(255, 127, 0)");
        grad2.addColorStop(0.8, "rgba(255, 127, 0, 0.3)");
        grad2.addColorStop(1.0, "rgba(255, 127, 0, 0.0)");

        c6.fillStyle = grad2;
        c6.arc(150, 100, 75, 0, Math.PI * 2);
        c6.fill();
    }

    function drawCanvas7() {
        var grad = c7.createRadialGradient(150, 100, 100, 150, 100, 50);
        grad.addColorStop(0.0, "rgba(163, 107, 10, 1.0)");
        grad.addColorStop(0.5, "rgba(249, 230, 127, 1.0)");
        grad.addColorStop(1.0, "rgba(163, 107, 10, 1.0)");

        c7.strokeStyle = grad;
        c7.arc(150, 100, 75, 0, Math.PI * 2.0);
        c7.lineWidth = 50;
        c7.stroke();
    }
}());