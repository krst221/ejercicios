const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
const sonidos = [{nombre: 'waves', favorito: 0}, {nombre: 'rain', favorito: 0}, 
    {nombre: 'firecamp', favorito: 0}, {nombre: 'shower', favorito: 0},
    {nombre: 'train', favorito: 0}, {nombre: 'wind', favorito: 0}]
for (const usuario of users) {
        for (const propiedad in usuario.favoritesSounds) {
            for (const nombres of sonidos) {
                if (nombres.nombre == propiedad) nombres.favorito++;
            }
        }
    }
    console.log(sonidos);