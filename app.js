class Labda {
    constructor(kepUrl, meret) {
        this.kepUrl = kepUrl;
        this.meret = meret;
        
        this.x = Math.random() * (window.innerWidth - meret);
        this.y = Math.random() * (window.innerHeight - meret - 200) + 100;
        
        this.sebessegX = (Math.random() - 0.5) * 10;
        this.sebessegY = (Math.random() - 0.5) * 10;
        
        this.elem = null; 
    }


   
}