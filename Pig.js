class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //this give the "this" visibilty until we change it
    this.Visiblity = 55;
  }
  display(){
    //the speed is less than 3 then display
    if (this.body.speed<3){
  console.log(this.body.speed);
  super.display();
  }
  else{
    //this removed the body from the world that we Made
    World.remove(world,this.body);
    push();
    //if the speed over 3 making the pass condition false then the pig should slowly disapear
    this.Visiblity = this.Visiblity-1;
    //tint sets the transperency 
    tint(255,this.Visiblity);
    image(this.image,this.body.position.x, this.body.position.y,50,50);
    pop();
  }
}
};