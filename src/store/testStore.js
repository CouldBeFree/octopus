import { observable, computed, action, makeObservable } from "mobx"

class Timer {
	start = Date.now()
	current = Date.now()

	get elapsedTime() {
		return this.current - this.start + "milliseconds"
	}

	tick() {
		this.current = Date.now()
	}
}

const testStore = new Timer();

makeObservable(testStore, {
	start: observable,
	current: observable,
	elapsedTime: computed,
	tick: action.bound
})

export default testStore
