module.exports = (() => {
	function TaskQueue() {
		this.tasks = [];
		this.running = false;
	}
	TaskQueue.prototype.start = async function() {
		this.running = true;
		while (this.tasks.length) {
			await this.tasks.shift()();
		}
		this.running = false;
	}
	TaskQueue.prototype.add = function(p) {
		this.tasks.push(p);
		if (!this.running) this.start();
	}
	return TaskQueue;
})();