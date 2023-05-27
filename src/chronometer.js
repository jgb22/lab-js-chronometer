class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    let i = 0
    this.currentTime = setInterval(()=> {
      i++
    },1000)
  }
  //I couldn't invoke and increment properly for the "Start" method, I have tried lots of scenarios but all fail.

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
 
  }

  getSeconds() { 
    const seconds = this.currentTime % 60
    return seconds 
    }


   
  computeTwoDigitNumber(value) {
    if (value === 0) {
      return '00';
    } else if (value < 10) {
      return '0' + value.toString();
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval (this.intervalId)
  }

  reset() {
      this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }

}