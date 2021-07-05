var winningDiameter = window.innerHeight/2; // bigger than this wins
var losingDiameter = 5;                     // smaller than this loses
var growDiameter = 20;                      // the diameter with which the blob grows 
var growRadius = growDiameter/2;            // the radius with which the blob grows    
var shrinkDiameter = 5;                      // the diameter with which the blob shrinks    
var shrinkRadius = shrinkDiameter/2 ;        // the radius with which the blob grows 

              
class Player extends Blob{
  //takes the color and diameter of the blob and calls the parent constructor while adding the player id 
    constructor(color, diameter){
        super(color, diameter);  
        $(this.elt).attr('id','player'); 
    }
   // Given a new x and y coordinate, this functions  moves the blob to the new position and returns the blob
    move(xCor,yCor){
        super.setX(xCor).setY(yCor); 
        return this; 
    }
   //This function grows the blob by the growing diameter defined above and returns the bigger blob
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
    //This function shrinks the blob by the shrinking diameter defined above and returns the smaller blob
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
    /*Given the enemy blob with which the player collided with, this functions wither grows the player if its diameter is bigger than enemy player and removes the player 
    or shrinks if its diameter is smaller than the enemy diameter 
    */ 
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
