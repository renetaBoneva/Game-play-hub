import { useEffect, useRef, useState } from 'react';

import styles from './BubbleGame.module.css';

export const BubbleGame = () => {
    // let canvas = useRef(null);
    // let ctx = useRef(null);
    // let canvasPosition = useRef(null);
    // let score = 0;

    // let gameFrame = 0;
    // let gameSpeed = 1;
    // let isGameOver = false;


    // let player1;
    // let enemy1;

    // useEffect(() => {
    //     const canvasRef = canvas.current;
    //     const ctxRef = canvasRef.getContext('2d');
    //     // ctx = canvasRef.getContext('2d');
    //     canvasRef.width = 800;
    //     canvasRef.height = 500;

    //     ctxRef.font = '40px Georgia';
    //     // ctx.font = '40px Georgia';

    //     // Mouse Interactivity    
    //     const canvasPositionRef = canvasRef.getBoundingClientRect();

    //     canvas.current = canvasRef;
    //     ctx.current = ctxRef;
    //     canvasPosition.current = canvasPositionRef;


    //     player1 = new Player();
    //     enemy1 = new Enemy();


    //     window.addEventListener("resize", handleResize)
    //     animate()
    // }, [])

    // // Mouse Interactivity

    // // TODO: 
    // // const [mouse, setMouse] = useState({
    // //     X: canvas.width / 2,
    // //     Y: canvas.height / 2,
    // //     click: false
    // // })

    // let mouse = {
    //     X: canvas.width / 2,
    //     Y: canvas.height / 2,
    //     click: false
    // }

    // function onMouseDownHandler(event) {
    //     mouse.click = true;
    //     mouse.X = event.x - canvasPosition.left;
    //     mouse.Y = event.y - canvasPosition.top;
    // }

    // function onMouseUpHandler(event) {
    //     mouse.click = false;
    // }

    // // Player
    // const playerRight = new Image();
    // playerRight.src = 'under_the_sea/images/fish_swim_right.png';
    // const playerLeft = new Image();
    // playerLeft.src = 'under_the_sea/images/fish_swim_left.png';

    // class Player {
    //     constructor() {
    //         this.x = canvas.width;
    //         this.y = canvas.height / 2;
    //         this.radius = 50;
    //         this.angle = 0;
    //         this.frameX = 0;
    //         this.frameY = 0;
    //         this.frame = 0;
    //         this.spriteWidth = 498;
    //         this.spriteHeight = 327;
    //     }

    //     update() {
    //         const dx = this.x - mouse.X;
    //         const dy = this.y - mouse.Y;
    //         let theta = Math.atan2(dy, dx);
    //         this.angle = theta;
    //         if (mouse.X != this.x) {
    //             this.x -= dx / 30;
    //         }

    //         if (mouse.Y != this.y) {
    //             this.y -= dy / 30;
    //         }
    //     }
    //     draw() {
    //         if (mouse.click) {
    //             ctx.current.lineWidth = 0.2;
    //             ctx.current.beginPath();
    //             ctx.current.moveTo(this.x, this.y);
    //             ctx.current.lineTo(mouse.X, mouse.Y);
    //             ctx.current.stroke();
    //         }
    //         // ctx.fillStyle = "red";
    //         // ctx.beginPath();
    //         // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    //         // ctx.fill();
    //         // ctx.closePath();
    //         // ctx.fillRect(this.x, this.y, this.radius, 10);

    //         ctx.current.save();
    //         ctx.current.translate(this.x, this.y);
    //         ctx.current.rotate(this.angle);
    //         if (this.x >= mouse.X) {
    //             ctx.current.drawImage(playerLeft, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 0 - 60, 0 - 45, this.spriteWidth / 4, this.spriteHeight / 4);
    //         } else {
    //             ctx.current.drawImage(playerRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 0 - 60, 0 - 45, this.spriteWidth / 4, this.spriteHeight / 4);
    //         }
    //         ctx.current.restore();
    //     }
    // }

    // // Bubbles
    // let bubbleArray = [];
    // const bubbleImage = new Image();
    // bubbleImage.src = 'under_the_sea/images/whole_bubble.png'

    // class Bubble {
    //     constructor() {
    //         this.x = Math.random() * canvas.width;
    //         this.y = 100 + canvas.height;
    //         this.radius = 50;
    //         this.speed = Math.random() * 5 + 1;
    //         this.distance = 0;
    //         this.counted = false;
    //         this.sound = Math.random() <= 0.5 ? "sound1" : "sound2";
    //     }
    //     update() {
    //         this.y -= this.speed;
    //         const dx = this.x - player1.x;
    //         const dy = this.y - player1.y;
    //         this.distance = Math.sqrt(dx * dx + dy * dy);
    //     }

    //     draw() {
    //         // ctx.current.fillStyle = 'blue';
    //         // ctx.current.beginPath();
    //         // ctx.current.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    //         // ctx.current.fill();
    //         // ctx.current.closePath();
    //         // ctx.current.stroke();
    //         ctx.current.drawImage(bubbleImage, this.x - 55, this.y - 55, this.radius * 2.2, this.radius * 2.2);
    //     }
    // }


    // const bubblePop1 = document.createElement('audio');
    // bubblePop1.src = 'under_the_sea/audio/Plop.ogg';
    // const bubblePop2 = document.createElement('audio');
    // bubblePop2.src = 'under_the_sea/audio/pop-up.mp3';

    // function handleBubbles() {
    //     if (gameFrame % 50 == 0) {
    //         bubbleArray.push(new Bubble());
    //     }

    //     for (let i = 0; i < bubbleArray.length; i++) {
    //         bubbleArray[i].update();
    //         bubbleArray[i].draw()
    //         if (bubbleArray[i].y < 0 - player1.radius * 2) {
    //             bubbleArray.splice(i, 1);
    //             i--;
    //         } else if (bubbleArray[i].distance < bubbleArray[i].radius + player1.radius) {
    //             if (!bubbleArray[i].counted) {
    //                 if (bubbleArray[i].sound == "sound1") {
    //                     bubblePop1.play();
    //                 } else {
    //                     bubblePop2.play();
    //                 }

    //                 score++;
    //                 bubbleArray[i].counted = true;
    //                 bubbleArray.splice(i, 1);
    //                 i--;
    //                 if (score >= 5) {
    //                     handleReachedScore();
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    // }

    // //Repeating background
    // const background = new Image();
    // background.src = 'under_the_sea/images/background1.png';

    // const bgr = {
    //     x1: 0,
    //     x2: canvas.width,
    //     y: 0,
    //     width: canvas.width,
    //     height: canvas.height
    // }

    // function handleBackground() {
    //     bgr.x1 -= gameSpeed;
    //     if (bgr.x1 < -bgr.width) { bgr.x1 = bgr.width }
    //     ctx.current.drawImage(background, bgr.x1, bgr.y, bgr.width, bgr.height);

    //     bgr.x2 -= gameSpeed;
    //     if (bgr.x2 < -bgr.width) { bgr.x2 = bgr.width }
    //     ctx.current.drawImage(background, bgr.x2, bgr.y, bgr.width, bgr.height);
    // }

    // // Enemies
    // const enemyImage = new Image();
    // enemyImage.src = "under_the_sea/images/enemy1.png";

    // class Enemy {
    //     constructor() {
    //         this.x = canvas.width + 200;
    //         this.y = Math.random() * (canvas.height - 150) + 90;
    //         this.speed = Math.random() * 2 + 2;
    //         this.radius = 60;
    //         this.frame = 0;
    //         this.frameX = 0;
    //         this.frameY = 0;
    //         this.spriteWidth = 418;
    //         this.spriteHeight = 397;
    //     }

    //     draw() {
    //         // ctx.current.fillStyle = "green"
    //         // ctx.current.beginPath();
    //         // ctx.current.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    //         // ctx.current.fill();
    //         ctx.current.drawImage(enemyImage,
    //             this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight,
    //             this.x - 50, this.y - 55, this.spriteWidth / 4, this.spriteHeight / 4);
    //     }
    //     update() {
    //         this.x -= this.speed;
    //         if (this.x < 0 - this.radius * 2) {
    //             this.x = canvas.width + 200;
    //             this.y = Math.random() * (canvas.height - 150) + 90;
    //             this.speed = Math.random() * 2 + 2;
    //         }
    //         // Animation
    //         if (gameFrame % 5 == 0) {
    //             this.frame++;
    //             if (this.frame >= 12) {
    //                 this.frame = 0
    //             }
    //             if (this.frame == 3 || this.frame == 7 || this.frame == 11) {
    //                 this.frameX = 0;
    //             } else {
    //                 this.frameX++;
    //             }

    //             if (this.frame < 3) {
    //                 this.frameY = 0;
    //             } else if (this.frame < 7) {
    //                 this.frameY = 1;
    //             } else if (this.frame < 11) {
    //                 this.frameY = 2;
    //             } else {
    //                 this.frameY = 0;
    //             }
    //         }

    //         // collision with player
    //         const dx = this.x - player1.x;
    //         const dy = this.y - player1.y;
    //         const distance = Math.sqrt(dx * dx + dy * dy);

    //         if (distance < this.radius + player1.radius - 30) {
    //             handleGameOver();
    //         }

    //     }
    // }

    // function handleEnemy() {
    //     enemy1.update();
    //     enemy1.draw();
    // }


    // function handleGameOver() {
    //     ctx.current.fillStyle = 'white'
    //     ctx.current.fillText("GAME OVER", 300, 200);
    //     ctx.current.fillText("You reached score: " + score, 250, 250);
    //     isGameOver = true;
    // }

    // function handleReachedScore() {
    //     ctx.current.fillStyle = 'white'
    //     ctx.current.fillText("LEVEL UP", 320, 200);
    //     ctx.current.fillText("You reached score: " + score, 250, 250);
    //     isGameOver = true;
    // }

    // // Animation Loop
    // function animate() {
    //     ctx.current.clearRect(0, 0, canvas.width, canvas.height);
    //     handleBackground();
    //     handleBubbles();
    //     player1.update();
    //     player1.draw();
    //     handleEnemy()
    //     ctx.current.fillStyle = 'black';
    //     gameFrame++;

    //     if (!isGameOver) {
    //         requestAnimationFrame(animate);
    //     }
    // }

    // function handleResize() {
    //     if (canvas.current) {
    //         canvasPosition.current = canvas.current.getBoundingClientRect();
    //     }
    // }

    // // Restart btn
    // function handleRestart() {
    //     mouse = {
    //         X: canvas.width / 2,
    //         Y: canvas.height / 2,
    //         click: false
    //     }
    //     player1 = new Player();
    //     enemy1 = new Enemy();
    //     score = 0
    //     isGameOver = false;
    //     gameSpeed = 1;
    //     gameFrame = 0;
    //     requestAnimationFrame(animate)
    // }

    // return (<>
    //     <div id={styles.messageBox}>
    //         <p id={styles.message}>{`Score: ${score}`}</p>
    //         <div className={styles.actions}>
    //             <button id={styles.restartBtn} onClick={handleRestart}>Restart</button>
    //             {/* <!-- Adding some upgrading ideas -->
    //         <!-- <button id="nextLevel">Next level</button> --> */}
    //         </div>
    //     </div>
    //     <canvas
    //         id={styles.canvas1}
    //         ref={canvas}
    //         onMouseDown={onMouseDownHandler}
    //         onMouseUp={onMouseUpHandler}
    //     />
    // </>);

    return <h1>Out of service!</h1>
}