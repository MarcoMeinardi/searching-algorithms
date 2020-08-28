class Bar {
	constructor (val, ind) {
		this.val = val;
		this.height = Math.floor (this.val * 500 / n);
		this.width = Math.floor (1000 / n);
		this.el = document.createElement ("div");
		this.el.classList = "bar";
		this.el.setAttribute ("style", 
			"width: " + this.width + "px; " + 
			"height: " + this.height + "px; " +
			"left: " + ind * this.width + "px; " + 
			"top: " + (500 - this.height) + "px;"
		);
	}

	async move (to, shuffle = false) {
		this.el.style.left = to * this.width + "px";
		if (!shuffle) {
			this.el.style.zIndex = 2;
			this.el.style.backgroundColor = "rgb(255, 0, 0)";
		}
		await new Promise (r => setTimeout (r, speed));
		if (!shuffle) {
			this.el.style.zIndex = 1;
			this.el.style.backgroundColor = "rgb(255, 255, 255)";
		}
	}
}