class Ground{
    constructor(){
        this.x = 300;
        this.y = 380;
        this.width = 700;
        this.height = 20;
        

    }
    display() {
      this.ground = createSprite (this.x,this.y,this.width,this.height);

      this.ground.velocityX = -3;

      if (this.ground.x < 0){
       this.ground.x = this.ground.width/2;
      }
    }
   
           
 }