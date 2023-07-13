import React, {Component} from 'react';
import { render } from "react-dom";
import {Link, Route, Switch, BrowserRouter} from "react-router-dom";

class Pasta extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <ul>
        {this.props.state.data.map(item => {
          const pathname = `/home/pasta/${item.id}`
          return (
              <div  key={item.id}>

              {item.category === 'PA' ?

            <li key={item.id}>

              <Link to={pathname}> {item.title}</Link>

            </li>

                : <div></div>
              }
                </div>
          );
        })}
      </ul>
    );
  }
}


export default Pasta;