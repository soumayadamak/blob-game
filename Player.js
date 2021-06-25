var winningDiameter = window.innerHeight/2; // bigger than this wins
var losingDiameter = 5;                     // smaller than this loses
var growDiameter = 20;    
var growRadius = growDiameter/2;                
var shrinkDiameter = 5;   
var shrinkRadius = shrinkDiameter/2 ;

              
class Player extends Blob{
    constructor(color, diameter){
        super(color, diameter);  
        $(this.elt).attr('id','player'); 
    }
    move(xCor,yCor){
        super.setX(xCor).setY(yCor); 
        return this; 
    }
    grow(){
            var oldLeft = this.left; 
            var oldTop = this.top; 
            super.setDiameter(this.diameter + growDiameter);
            var newLeft = oldLeft - growRadius;
            var newTop = oldTop - growRadius;
            this.left = newLeft; 
            this.top = newTop; 
            this.elt.css({'left': newLeft+ 'px', 'top': newTop + 'px'});
            return this; 
    }
    shrink(){
            var oldLeft = this.left; 
            var oldTop = this.top; 
            super.setDiameter(this.diameter - shrinkDiameter);
            var newLeft = oldLeft + shrinkRadius;
            var newTop = oldTop + shrinkRadius;
            this.left = newLeft; 
            this.top = newTop; 
            this.elt.css({'left': newLeft+ 'px', 'top': newTop + 'px'});
            return this; 
        }
    collide(enemyBlob){
        if (this.diameter > enemyBlob.diameter){
            this.grow(); 
            enemyBlob.remove();
        }
        else if(this.diameter < enemyBlob.diameter){
            this.shrink(); 
        }
    }
}