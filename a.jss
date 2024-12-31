
html,
body {
	font-family: "Andika New Basic", cursive;
	color: #f5f5f5;
	overflow: hidden;
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	user-select: none;
	background-color: #0c1445;
}
canvas {
	transition: background 2s;
	width: 100vw;
	height: 100vh;
	cursor: pointer;
}
.title {
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -30%);
	font-size: 7em;
	padding: 0;
	margin: 0;
}
#countdown-box {
	z-index: 1;
	position: absolute;
	top: 70%;
	left: 50%;
	transform: translate(-50%, -70%);
	text-align: justify;
	width: 90%;
}
#countdown-box:after {
	display: inline-block;
	width: 100%;
	content: "";
}
.cdi {
	display: inline-block;
	font-size: 5em;
	text-align: center;
	color: #f5f5f5;
}
.cdi-lbl {
	font-size: 0.5em;
}
@media (max-width: 775px) {
	.title {
		top: 0.5em;
	}
	#countdown-box {
		text-align: center;
		top: 75%;
	}
	/*#countdown-box:after {
		content: none;
	}*/
	.cdi {
		/*display: block;*/
		font-size: 2em;
	}
	.cdi-lbl {
		color: #f5f5f5;
	}
}
