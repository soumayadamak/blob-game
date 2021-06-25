class Blob{
    constructor (color, diameter){
        this.color = color; 
        this.diameter = diameter; 
        this.radius = diameter/2;
        this.elt = $("<div></div").addClass("circle").css({'width':this.diameter + 'px', 'height': this.diameter + 'px', 'background-color': this.color});
    }
    addToGame(container){
        $(container).append(this.elt);
        return this; 
    }
    setColor(color){
        this.color = color; 
        this.elt.css('background-color',color);
        return this; 
    }
    setDiameter(diameter){
        this.diameter = diameter; 
        this.radius = diameter /2 ; 
        this.setRadius(this.radius);
        return this; 
    }
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
    getRadius(){
        return this.radius;
    }
    getDiameter(){
        return this.diameter; 
    }
    getX(){
        return this.x; 
    }
    getY(){
        return this.y;
    }
    setX(x){
        this.x = x; 
        var leftSide = this.x - this.radius; 
        this.left = leftSide; 
        this.elt.css('left', leftSide+ 'px');
        return this; 
    }
    setY(y){
        this.y = y; 
        var topSide = this.y - this.radius; 
        this.top = topSide; 
        this.elt.css('top', topSide + 'px');
        return this; 
    }
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