const importar = require('./collectibles');

const hotToys = importar('Hot Toys');
const bandai = importar('Bandai');
const starsWars = importar('Star Wars');


const unifiedCollectibles = [...hotToys,...bandai,...starsWars];

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function() {
        this.figuras.forEach((figura) => {
            console.log(figura)
        })
    },
    figuresByBrand: function(marca) {
        return this.figuras.filter(figura => figura.marca == marca);
    }
};