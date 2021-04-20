import React from 'react';
import getPilots from '../services/swpilots-api'


class Pilots extends React.Component {
    state = {
        pilots: [],
    }
    async componentDidMount() {
        let foundPilots = await getPilots(this.props.starshipPilots);
        this.setState({pilots:foundPilots})
    }
    render() {
        return (
            <div>
                {this.state.pilots.map((pilot, index)=>{
                return <div>{pilot.name}</div>
                })}
            </div>
        )
    }

}

export default Pilots;