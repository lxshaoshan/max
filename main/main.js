module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}\no) 最大值 = ${sequence.max()}\no) 元素数量 = ${sequence.leng()}\no) 平均值 = ${sequence.jun()}`);

};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input=input;
  }

  minimum() {
    // Write your code here
    return Math.min.apply(Math,this.input);
  }

  // Write your code here
  max() {
    // Write your code here
    return Math.max.apply(Math,this.input);
  }
  leng() {
    return this.input.length;
  }
  jun() {
    var sum=eval(this.input.join("+"));
    return ~~(sum/this.input.length*100)/100;
  }

}