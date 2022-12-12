// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    }
    return false
  }

  leave(numAdults, numChildren) {
    if (
      this.numAdults - numAdults >= this.numChildren - numChildren &&
      numAdults >= numChildren &&
      this.numAdults + this.numChildren >= numAdults + numChildren
    ) {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
    return false
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

const sp = new SoftPlay(0, 0)
console.log('initial state', sp.occupancy())
console.log('2 A and one C enter', sp.enter(2, 1))
console.log('2 A and one C Occ', sp.occupancy())
console.log('1A leaves', sp.leave(1, 0))
console.log('1A and 1C remain', sp.occupancy())
console.log('1C attempts to leave', sp.leave(0, 1))
console.log('1A and 1C remain', sp.occupancy())
console.log('1A and 0C attempt to leave', sp.leave(1, 0))
console.log('1A and 1C remain', sp.occupancy())
console.log('1A and 1C attempt to leave', sp.leave(1, 1))
console.log('no one remains :(', sp.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
