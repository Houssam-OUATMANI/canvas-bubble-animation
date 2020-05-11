const canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight

const cxt = canvas.getContext('2d')

function Cercles (x , y , dx , dy , radius){
    this.x = x
    this.y = y
    this.dx = dx 
    this.dy = dy
    this.radius = radius

    this.draw = function (){
        cxt.beginPath()
        cxt.arc(this.x , this.y , this.radius , 0 , pi *2 , false)
        cxt.strokeStyle = "Blue"
        cxt.stroke()
        cxt.fill("nonzero")
    }

    this.update = function (){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
            this.dx = -this.dx
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ){
            this.dy = -this.dy
        }
        
        this.x += this.dx
        this.y += this.dy

        this.draw()
        
    }
    
}


let arrayCercles =[];
for(let i = 0 ; i < 100 ; i++){
    let radius = 30
    var pi = Math.PI

    let x = Math.random() * (innerWidth - radius * 2) + radius
    let y = Math.random() * (innerHeight - radius * 2) + radius

    let dx = (Math.random() - 0.5) *(Math.random() * 4)
    let dy = (Math.random() - 0.5) *(Math.random() * 4)

    arrayCercles.push(new Cercles(x , y ,dx , dy , radius))

}

function animation (){
    requestAnimationFrame(animation)
    cxt.clearRect(0 , 0 ,innerWidth , innerHeight)

    for(let i = 0 ; i < arrayCercles.length ; i++){
        arrayCercles[i].update()
    }
}

animation()