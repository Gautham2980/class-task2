var a=parseInt(prompt("enter a width"));
var b=parseInt(prompt("enter a height"))


class Rectangle{
    constructor(width,height){

        this.width=width;
        this.height=height
    }

    calculateArea(){
        return this.width*this.height; 
    }

    calculatePerimeter(){

        return 2*(this.width+this.height);

        
    }

    
}

let sum=new Rectangle(a,b);

document.write("Area="+sum.calculateArea()+"<br>");
document.write("Perimeter="+sum.calculatePerimeter());
