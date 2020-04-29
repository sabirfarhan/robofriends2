import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        if (this.state.robots.length === 0) {
            return <h1 className='f1 tc'>loading</h1>
        } else {
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })

            return (
                <div className='tc ma2'>
                    <h1 className='f1'>robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <div> 
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                    </div>

                </div>

            )
        }

    }
}

export default App;