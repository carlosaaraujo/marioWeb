const pegarMario = document.querySelector(".mario");
const pegarPipe = document.querySelector(".pipe");
const pegarNuvem = document.querySelector(".clouds");

const jump = () => {
	pegarMario.classList.add("jump");

	setTimeout(() => {
		pegarMario.classList.remove("jump");
	}, 500);
};

const loop = setInterval(() => {
	const posicaoPipe = pegarPipe.offsetLeft;
	const posicaoMario = +window
		.getComputedStyle(pegarMario)
		.bottom.replace("px", "");
	const posicaoNuvem = +window
		.getComputedStyle(pegarNuvem)
		.right.replace("px", " ");

	if (posicaoPipe <= 120 && posicaoPipe > 0 && posicaoMario < 80) {
		pegarPipe.style.animation = "none";
		pegarPipe.style.left = `${posicaoPipe}px`;

		pegarMario.style.animation = "none";
		pegarMario.style.bottom = `${posicaoMario}px`;

		pegarMario.src = "./img/game-over.png";
		pegarMario.style.width = "75px";
		pegarMario.style.marginLeft = "50px";

		pegarNuvem.style.animation = "none";
		pegarNuvem.style.right = `${posicaoNuvem}px`;

		clearInterval(loop);
	}
}, 10);

document.addEventListener("keydown", jump);
