var barsContainer;
var bars;
var n;

var speed = 100;

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

function swap (ind1, ind2, shuffle = false) {
	bars[ind1].move (ind2, shuffle);
	bars[ind2].move (ind1, shuffle);
	let c = bars[ind1].val;
	bars[ind1].val = bars[ind2].val;
	bars[ind2].val = c;

	c = bars[ind1].el;
	bars[ind1].el = bars[ind2].el;
	bars[ind2].el = c;
}

function shuffle () {
	for (let i = 0; i < n; i++) {
		swap (i, Math.floor (Math.random() * n), true);
	}
}