import React, {Component} from 'react';
import { render } from "react-dom";
import {Link, Route, Switch, BrowserRouter} from "react-router-dom";

class Cocktails extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <ul>
        {this.props.state.data.map(item => {
          const pathname = `/home/cocktails/${item.id}`
          return (
              <div  key={item.id}>

              {item.category === 'CO' ?

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


export default Cocktails;