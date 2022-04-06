function generateShipCoordsHorizontal (shipLength) {
    let coordinates = [];
    const latitude = 'ABCDEFGHIJ';
    const randomLat = latitude.charAt(Math.floor(Math.random() * latitude.length));
    let startingLongitude = 0;
    if (shipLength === 5) {
        startingLongitude = Math.floor(Math.random() * 7);
    } else if (shipLength === 4)
    for(let i=0; i < shipLength; i++) {
        startingLongitude = Math.floor(Math.random() * 8);
    } else if (shipLength === 3 ) {
        startingLongitude = Math.floor(Math.random() * 9);
    } else if (shipLength === 2) {
        startingLongitude = Math.floor(Math.random() * 10);
    }
    for (let i = 0; i < shipLength; i++) {
        let coords = randomLat + startingLongitude;
        coordinates.push(coords);
        startingLongitude++;
    }
    return coordinates;
}

function generateShipCoordsVertical (shipLength) {
    let coordinates = [];
    const latitude = 'ABCDEFGHIJ';
    let randomLat;
    if (shipLength === 5) {
        randomLat = latitude.charAt(Math.floor(Math.random() * 5));
    } else if (shipLength === 4) {
        randomLat = latitude.charAt(Math.floor(Math.random() * 6));
    } else if (shipLength === 3) {
        randomLat = latitude.charAt(Math.floor(Math.random() * 7));
    } else if (shipLength === 2) {
        randomLat = latitude.charAt(Math.floor(Math.random() * 8));
    }
    const longitude = Math.floor(Math.random() * 11);
    const latitudeString = latitude.slice(latitude.indexOf(randomLat), (latitude.indexOf(randomLat) + shipLength));
    for (let i = 0; i < latitudeString.length; i++) {
        let coords = latitudeString.charAt(i) + longitude;
        coordinates.push(coords);
    }
    return coordinates;
}

function generateAllShipCoords () {
    const shipsLengths = [5, 4, 3, 3, 2];
    let allCoords = [];
    for (let i = 0; i < 5; i++ ) {
        let coinToss =  Math.floor(Math.random() * 2);
          if (coinToss === 0) {
              allCoords.push(generateShipCoordsHorizontal(shipsLengths[i]));
          } else {
              allCoords.push(generateShipCoordsVertical(shipsLengths[i]));
          }
        }
          return allCoords;
}

export { generateShipCoordsHorizontal, generateShipCoordsVertical, generateAllShipCoords }