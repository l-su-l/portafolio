import React, { useEffect, useRef } from "react";

function Home() {
    const canvasRef = useRef(null);
    const buyButtonRef = useRef(null);
    const scoreRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const buyButton = buyButtonRef.current;

        let player = {
            x: 50,
            y: 50,
            width: 30,
            height: 30,
            color: "lime",
            dx: 0,
            dy: 0,
            speed: 5,
        };

        let score = 0;

        function update() {
            player.x += player.dx;
            player.y += player.dy;

            // Evitar que el jugador salga del canvas
            if (player.x < 0) player.x = 0;
            if (player.x + player.width > canvas.width)
                player.x = canvas.width - player.width;
            if (player.y < 0) player.y = 0;
            if (player.y + player.height > canvas.height)
                player.y = canvas.height - player.height;

            // Verificar si el cuadrado está "clicando" el botón
            const rect = buyButton.getBoundingClientRect();
            if (
                player.x < rect.x + rect.width &&
                player.x + player.width > rect.x &&
                player.y < rect.y + rect.height &&
                player.y + player.height > rect.y
            ) {
                buyButton.click(); // Simular clic
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar jugador
            ctx.fillStyle = player.color;
            ctx.fillRect(player.x, player.y, player.width, player.height);

            // Dibujar puntaje
            scoreRef.current.innerText = `Score: ${score}`;
        }

        function loop() {
            update();
            draw();
            requestAnimationFrame(loop);
        }

        function handleKeyDown(e) {
            if (e.key === "ArrowUp") player.dy = -player.speed;
            if (e.key === "ArrowDown") player.dy = player.speed;
            if (e.key === "ArrowLeft") player.dx = -player.speed;
            if (e.key === "ArrowRight") player.dx = player.speed;
        }

        function handleKeyUp(e) {
            if (["ArrowUp", "ArrowDown"].includes(e.key)) player.dy = 0;
            if (["ArrowLeft", "ArrowRight"].includes(e.key)) player.dx = 0;
        }

        buyButton.addEventListener("click", () => {
            //score++;
            console.log("¡Compra realizada con éxito!");
        });

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        loop();

        // Cleanup para evitar fugas de memoria
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <div className="bg-red-700">
            <h1>Bienvenido a la página principal</h1>
            <p>Esta es la página de inicio.</p>

            <div id="shop">
                <h3>Bienvenido a la tienda</h3>
                <p>Haz clic en el botón para realizar una compra:</p>
                <button ref={buyButtonRef} id="buyButton">
                    Comprar
                </button>
            </div>

            <div ref={scoreRef} id="score">
                Score: 0
            </div>

            <canvas ref={canvasRef} id="gameCanvas" className="border border-black absolute top-0 w-[100%]"></canvas>
        </div>
    );
}

export default Home;
