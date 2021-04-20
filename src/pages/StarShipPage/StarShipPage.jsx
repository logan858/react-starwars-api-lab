import React from 'react';
import { Link } from 'react-router-dom'
import Pilots from '../../components/Pilots'

function StarShipPage({location}) {
    const starship = location.state;

    async function getPilots(urls) {
        const promises = urls.map(url => fetch(url)
        .then(res => res.json()));
        const pilotObjects = await Promise.all(promises);
        return pilotObjects;
    }

    return (
        <div className="ship-plate">
            NAME: {starship.name}<br/>
            MODEL: {starship.model}<br/>
            

            {starship.pilots.length === 0 ? (
            <div className="pilots">There are no pilots for this ship :( </div>
            ) : (
            <div className="pilots">
            
                PILOTS: <Pilots starshipPilots={starship.pilots}/><br/>
            </div>
            )
            }

            <Link to="/">
                Return
            </Link>
        </div>
    )
}

export default StarShipPage;