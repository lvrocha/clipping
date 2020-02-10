import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://www.codepile.net/raw/odNvjOdO.js')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render(){
    var { isLoaded, items } = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }
    else{
      return(
        <div className="App">
          <ul>
            {items.map(item =>(
              <li key={item.id}>
                Nome: {item.name} <br/> 
                Valor inicial: {item.original_module_price} <br/>
                Valor promocional: {item.price} <br/>
                Modulo: {item.module} <br/>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    
  }
}

export default App;
