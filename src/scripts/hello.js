let hello = (string) => {
  console.log(string);
};

class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	sayWhat(){
		return this.x + ' --- ' + this.y;
	}
}

export { hello, Point };
