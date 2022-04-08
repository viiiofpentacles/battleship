function Player() {
  return {
      chosenCoords: [],
      attack: function() {
           let attackCoords = generateAttackCoords();
           while (this.chosenCoords.indexOf(attackCoords) !== (-1)) {
               attackCoords = generateAttackCoords();  
               if (this.chosenCoords.indexOf(attackCoords) == (-1)) {
                   this.chosenCoords.push(attackCoords);
                   break;
               }
            }
            return attackCoords;
          }
      }
    }

function generateAttackCoords () {
    const latitude = 'ABCDEFGHIJ';
    const longitude = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const randomLat = latitude.charAt(Math.floor(Math.random() * latitude.length));
    const randomLon = longitude[Math.floor(Math.random() * longitude.length)];
    return randomLat + randomLon;
}

export { Player }