import { makeAutoObservable } from "mobx"

export default makeAutoObservable({
    count: 0,
    addCount() {
        this.count++
    }
})