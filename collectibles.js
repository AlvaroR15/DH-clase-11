const datos = [
    ...require('./datos/figuras1.json'),
    ...require('./datos/figuras2.json'),         
    ...require('./datos/figuras3.json'),         
]
const importar = marca => {
    return datos.filter(figura => figura.marca == marca)
}

module.exports = importar