class Triple {
     triple(n) {
      if (n === undefined) {
        n = 1;
      }
      return n * 3;
    }
  }
  
  class BiggerTriple extends Triple {
     triple(n) {
      return super.triple(n) * super.triple(n);
    }
  }
  
  console.log(Triple.triple());        // 3
  console.log(Triple.triple(6));       // 18
  
//   var tp = new Triple();
  
//   console.log(BiggerTriple.triple(3));
//   // 81 (not affected by parent's instantiation)
  
//   console.log(tp.triple());
//   // 'tp.triple is not a function'.
const a = [2, 1, 3]
const b =a.sort()
console.log(a, b)