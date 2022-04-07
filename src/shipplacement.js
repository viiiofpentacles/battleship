function generateShipCoordsHorizontal (shipLength) {
    let coordinates = [];
    const latitude = 'ABCDEFGHIJ';
    const randomLat = latitude.charAt(Math.floor(Math.random() * latitude.length));
    let startingLongitude = 0;
    while(startingLongitude === 0) {
      if (shipLength === 5) {
          startingLongitude = Math.floor(Math.random() * 7);
      } else if (shipLength === 4) {
          startingLongitude = Math.floor(Math.random() * 8);
      } else if (shipLength === 3 ) {
          startingLongitude = Math.floor(Math.random() * 9);
      } else if (shipLength === 2) {
          startingLongitude = Math.floor(Math.random() * 10);
    }
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
    let longitude = 0;
    while (longitude === 0) {
        longitude = Math.floor(Math.random() * 11);
    }
    const latitudeString = latitude.slice(latitude.indexOf(randomLat), (latitude.indexOf(randomLat) + shipLength));
    for (let i = 0; i < latitudeString.length; i++) {
        let coords = latitudeString.charAt(i) + longitude;
        coordinates.push(coords);
    }
    return coordinates;
}

function coinToss () {
    return Math.floor(Math.random() * 2);
}

function generateAllShipCoords () {
    const shipsLengths = [5, 4, 3, 3, 2];
    let allCoords = [];
    let firstCoinToss = coinToss();
    if (firstCoinToss === 0) {
        allCoords.push(generateShipCoordsHorizontal(shipsLengths[0]));
    } else {
        allCoords.push(generateShipCoordsVertical(shipsLengths[0]));
    };
    for (let i = 1; i < 5; i++ ) {
        let subsequentCoinToss =  coinToss();
        let newShip;
          if (subsequentCoinToss === 0) {
            let clash = true;
            while (clash === true) {
                newShip = generateShipCoordsHorizontal(shipsLengths[i]);
                loopA: for (let i = 0; i < newShip.length; i++) {
                    for (let a = 0; a < allCoords.length; a++) {
                        for (let i = 0; i < allCoords[a].length; i++) {
                            if (allCoords[a].indexOf(newShip[i]) !== -1) {
                                clash = true;
                                break loopA;
                            } else {
                                clash = false;   
                            }
                        }
                    }
                }
                allCoords.push(newShip);
                clash = false;
            }
        } else {
            let newShip;
            let clash = true;
            while (clash === true) {
                newShip = generateShipCoordsVertical(shipsLengths[i]);
                loopA: for (let i = 0; i < newShip.length; i++) {
                    for (let a = 0; a < allCoords.length; a++) {
                        for (let i =0; i < allCoords[a].length; i++) {
                            if (allCoords[a].indexOf(newShip[i]) !== -1) {
                                clash = true;
                                break loopA;
                            } else {
                                clash = false;
                            }
                        }
                    }
                }
            } 
            allCoords.push(newShip);
            clash = false;
        }
    }
          return allCoords;
}

export { generateShipCoordsHorizontal, generateShipCoordsVertical, generateAllShipCoords }