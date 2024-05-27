

class Gallery {

    imgElem = document.createElement("img");
    images = [];
    currentImg = 0;

    leftArrow = document.querySelector("#left");
    rightArrow = document.querySelector("#right");

    constructor(elemId, ...imagesArr) {
        //חיבור לאלמנט של הלגריה (לפי שם המזה שקיבלנו)
        const galleryElem = document.getElementById(elemId);
        this.images = imagesArr;

        galleryElem.appendChild(this.imgElem)
        this.showImg()

        this.rightArrow.addEventListener("click", () => this.nextImg())
        this.leftArrow.addEventListener("click", () => this.pervImg())
        console.log(this.images);

    }

    nextImg() {
        //מקדם את המיקום במערך ב 1
        this.currentImg++;

        //אם מיקום התמונה גדול או שווה לאורך המערך, מחזירים את המיקום ל 0 וחוזר חלילה
        if (this.currentImg >= this.images.length) {
            this.pervImg();
        }
        this.showImg()
    }

    pervImg() {

        if (this.currentImg === 0) {
            return;
        } else {
            this.currentImg--;
            this.showImg()
        }
    }

    showImg() {
        this.imgElem.src = `/portfolioImages/${this.images[this.currentImg]}`;
    }

}

const gallery1 = new Gallery("img-gal", "pokedex.png", "pokeCard.png");

