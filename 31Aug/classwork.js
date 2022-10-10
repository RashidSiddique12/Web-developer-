class pizza{
    constructor(){
        this.size="Medium";
        this.crust="wheat crust";
    }
    bake(){
        document.write(`Baking a  ${this.size} ${this.crust} pizza`);
    }

}
const myPizza = new pizza();
myPizza.bake();
document.write("<br>");
document.write(myPizza.size);