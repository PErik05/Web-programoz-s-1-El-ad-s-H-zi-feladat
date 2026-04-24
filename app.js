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

    megjelenit() {
        this.elem = document.createElement('img');
        this.elem.src = this.kepUrl;
        this.elem.style.position = 'absolute';
        this.elem.style.width = this.meret + 'px';
        this.elem.style.height = 'auto';
        this.elem.style.userSelect = 'none';
        
        document.body.appendChild(this.elem);
    }


    mozog() {
        if (!this.elem) return;

        this.x += this.sebessegX;
        this.y += this.sebessegY;

        if (this.x <= 0 || this.x >= window.innerWidth - this.meret) {
            this.sebessegX *= -1;
        }
        if (this.y <= 0 || this.y >= window.innerHeight - this.meret) {
            this.sebessegY *= -1;
        }

        this.elem.style.left = this.x + 'px';
        this.elem.style.top = this.y + 'px';
        
        this.elem.style.transform = `rotate(${this.x}deg)`;
    }
}