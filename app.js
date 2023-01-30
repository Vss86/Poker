const Color = function(r, g, b){
     
    this.r = r;
    this.g = g,
    this.b = b;
}

Color.prototype.rgbColor = function() {
// return `"rgb(${this.r},${this.g},${this.b})"`;
return "rgb" +"("+this.r +","+this.g+","+this.b+")";
}

Color.prototype.hexColor = function() {
return '#' + (this.r).toString(16) +
   (this.g).toString(16) +
   (this.b).toString(16);

}

Color.prototype.rgbaColor = function(a) {
    this.a = a;
    // return `"rgba(${this.r},${this.g},${this.b},${this.a})"`;
    return "rgba" +"("+this.r +","+this.g+","+this.b+","+this.a+")";
    }
const colors = new Color(0, 0, 255);
document.body.style.backgroundColor = colors.rgbColor();
console.log(colors);
// colors.rgbColor();
console.log(colors.rgbColor());
console.log(colors.hexColor());
console.log(colors.rgbaColor(0.2));