var barsContainer;
var bars;
var n;

var speed = 50;

function init() {
	barsContainer = document.getElementById ("bars-container");
	bars = [];
	n = 100;

	for (let i = 0; i < n; i++) {
		let bar = new Bar (i + 1, i);
		bars.push (bar);
		barsContainer.appendChild (bar.el);
	}
}
init();

async function swap (ind1, ind2, shuffle = false) {
	await Promise.all ([
		bars[ind1].move (ind2, shuffle),
		bars[ind2].move (ind1, shuffle)
	]);
	let c = bars[ind1].val;
	bars[ind1].val = bars[ind2].val;
	bars[ind2].val = c;

	c = bars[ind1].el;
	bars[ind1].el = bars[ind2].el;
	bars[ind2].el = c;
}

async function shuffle () {
	let cp = speed;
	speed = 0;
	for (let i = 0; i < n; i++) {
		await swap (i, Math.floor (Math.random() * n), true);
	}
	speed = cp;
}