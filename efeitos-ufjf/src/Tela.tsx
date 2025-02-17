import { useRef, useState } from "react";

export default function Tela(){
    const [posicao, setPosicao] = useState({x: 150, y:75});

const refCanvas = useRef<HTMLCanvasElement|null>(null);

return <canvas ref={refCanvas} onClick = {() => {
    const canvas = refCanvas.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    if(!ctx) return;
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "lightgreen";
    ctx.ellipse(posicao.x, posicao.y, 5, 5, 0, 0, 2*Math.PI, false);
    ctx.stroke();
    ctx.fill();
}}


/>

}