import React, { Component } from 'react';
import {Link, Route, Switch, BrowserRouter} from "react-router-dom";
import Salads from "./components/Salads";
import Home from "./components/Home";
import Cocktails from "./components/Cocktails";
import Pasta from "./components/Pasta";
import CocktailItem from "./components/CocktailItem";
import SaladItem from "./components/SaladItem";
import PastaItem from "./components/PastaItem";



class App extends Component {
  constructor(props) {
    super(props);
       this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
    componentDidMount() {
    fetch("http://127.0.0.1:8000//recipes-lists/")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {

        this.setState(() => {

          return {
            data,
            loaded: true
          };


        });
      });
  }

  render() {
    return (
        <div>
   <Switch>


                    {this.state.data.map(item => {
                        let id = item.id
                        let path = `/home/cocktails/${id}`
                         return(
                                   <Route key={item.id} path={path}>
                                 <CocktailItem key={item.id} item={item}/>
                             </Route>

                             )
                    })}
                     <Route path='/home/cocktails'>
                    <Cocktails state={this.state}/>
                </Route>
                {this.state.data.map(item => {
                        let id = item.id
                        let path = `/home/salads/${id}`
                         return(

                                   <Route key={item.id} path={path}>
                                 <SaladItem key={item.id} item={item}/>
                             </Route>



                             )

                    })}

                  <Route path='/home/salads'>
                    <Salads state={this.state}/>
               </Route>

                     {this.state.data.map(item => {
                        let id = item.id
                        let path = `/home/pasta/${id}`
                         return(

                                   <Route key={item.id} path={path}>
                                 <PastaItem key={item.id} item={item}/>
                             </Route>



                             )

                    })}

                <Route path='/home/pasta'>
                    <Pasta state={this.state}/>
                </Route>
                <Route path='/home' >
                     <Home/>
                </Route>

            </Switch>




      </div>










    );
  }
}

export default App;