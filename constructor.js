function Humans() {
  this.limbs = 2;
  this.family = "vertebrae";
  this.type = "Higher Mammal";
}

let kelechi = new Humans();
console.log(kelechi.limbs);
console.log(kelechi.type);
kelechi.limbs = 1;
console.log(kelechi.limbs);
