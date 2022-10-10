const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124};

const attack = (atk, def) => {
    const dmg = Math.floor(Math.random() * atk.damage + 1);
    def.pv -= dmg;
    console.log('Ataque de ' + atk.name + '! ' + def.name + ' ha recidibo ' + dmg + ' de daño! Le quedan ' + def.pv + ' puntos de vida!');
    if(def.pv > 0) attack (def, atk);
}

attack(ship1, ship2);