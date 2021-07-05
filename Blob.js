class Blob{
    //Takes color and diameter of the blob to construct a blob
    constructor (color, diameter){
        this.color = color; 
        this.diameter = diameter; 
        this.radius = diameter/2;
        this.elt = $("<div></div").addClass("circle").css({'width':this.diameter + 'px', 'height': this.diameter + 'px', 'background-color': this.color});
    }
    //this function takes the container as an input, adds the blob to the given container and returns the added blob
    addToGame(container){
        $(container).append(this.elt);
        return this; 
    }
    setColor(color){
        this.color = color; 
        this.elt.css('background-color',color);
        return this; 
    }
    //this function takes a new diameter for the blob, changes the diameter and radius and returns the blob
    setDiameter(diameter){
        this.diameter = diameter; 
        this.radius = diameter /2 ; 
        this.setRadius(this.radius);
        return this; 
    }
    //this function takes a new radius for the blob, changes the radius and left and top position of the blob and returns the blob
    setRadius(radius){
        this.radius = radius; 
        this.diameter = radius * 2
        var leftSide = this.x - this.radius; 
        this.left = leftSide; 
        var topSide = this.y - this.radius; 
        this.top = topSide; 
        this.elt.css({'width':this.diameter + 'px', 'height': this.diameter + 'px', 'top': topSide + 'px','left': leftSide+ 'px' });
        return this; 
    }
    //returns the radius of the blob
    getRadius(){
        return this.radius;
    }
    //returns the diameter of the blob
    getDiameter(){
        return this.diameter; 
    }
    //returns the x coordinate of the center of the blob
    getX(){
        return this.x; 
    }
    //returns the y coordinate of the center of the blob
    getY(){
        return this.y;
    }
    //takes a new x coordinate for the blob, changes its left position and returns the blob
    setX(x){
        this.x = x; 
        var leftSide = this.x - this.radius; 
        this.left = leftSide; 
        this.elt.css('left', leftSide+ 'px');
        return this; 
    }
    //takes a new y coordinate for the blob, changes its top position and returns the blob
    setY(y){
        this.y = y; 
        var topSide = this.y - this.radius; 
        this.top = topSide; 
        this.elt.css('top', topSide + 'px');
        return this; 
    }
    //takes another blob as input and returns whether the blob intersects with another blob or not
    intersects (other) {
        var dx = this.getX() - other.getX();
        var dy = this.getY() - other.getY();
        var distance_squared = (dx * dx + dy * dy);
    
        var r1 = this.getRadius();
        var r2 = other.getRadius();
        var rsum = r1+r2;
        var closer = (distance_squared <= rsum*rsum);
        return closer;
        }
}
