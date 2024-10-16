class Die {
    
    constructor(sides) {
        this.size = 50;
        this.sides = sides;
        this.frozen = false;
        this.place(random(width),random(height));
        this.roll();
    }

    place(x,y) {
        this.x = x;
        this.y = y;
    }

    display() {
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        fill("white");
        rect(this.x,this.y,this.size,this.size,6);
        if (this.frozen) {
            fill("silver");
        } else {
            fill("black");
        }
        textSize(30);
        text(this.value, this.x, this.y, this.size, this.size);
    }

    roll() {
        if (! this.frozen) 
            this.value = floor(random(this.sides)+1);
    }

    freeze() {
        this.frozen = true;
    }

    unfreeze() {
        this.frozen = false;
    }

    toggleFreeze() {
        this.frozen = ! this.frozen;
    }

    isTouched(x,y) {
        let halfsize = this.size/2;
        if (x >= (this.x-halfsize) && 
            x <= (this.x+halfsize) && 
            y >= (this.y-halfsize) && 
            y <= (this.y+halfsize)
        ) {
            return true;
        } 
        return false;
    }
}