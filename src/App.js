import React from 'react';
import './App.css';
import GetAllStarShips from "./services/sw-api"
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import StarShipPage from './pages/StarShipPage/StarShipPage'

class App extends React.Component {
  state = {
    ships: [],
  }
  async componentDidMount() {
    const starShips = await GetAllStarShips()
    this.setState({ships: starShips.results})
    console.log(this.state.ships)
  }
  render() {
    return (
      <div className="App">
          <header><h4>Star Wars Starships</h4></header>
          <hr/>
          <BrowserRouter>
          <Switch>
            <Route 
                path="/starship"
                render={props => <StarShipPage {...props}/>}
              />
            
            <Route exact path="/" render={() => (
              <div>
              {this.state.ships.length ? (
                this.state.ships.map(ship => 
                  
                    <Link to={{
                      pathname: "/starship",
                      state: ship,
                    }}
                      key={ship.name}
                    >
                      <button>{ship.name}</button><br/>
                    </Link>
                )
                ) : (
                  <div>Loading...</div>
                )
              }
              </div>
            )}
            />
          </Switch>
          </BrowserRouter>
    
            
      </div>
    );
  }
}

export default App;
