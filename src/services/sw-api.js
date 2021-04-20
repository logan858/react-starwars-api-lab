import React from 'react';

async function GetAllStarShips() {
    let url = "https://swapi.dev/api/starships/"
    return await fetch(url).then(res => res.json())
}

export default GetAllStarShips;