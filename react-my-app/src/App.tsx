import React from 'react';
import './App.css';
import tw from 'twin.macro';
import styled from 'styled-components';
import { HomePage } from './app/containers/HomePage';
import {BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom'
import routes from './app/containers/HomePage/routes';
import { NavBar } from './app/components/navbar';

const AppContainer = styled.div`${tw`
w-full
h-full
flex
flex-col
`}
`;

function App() {
  return (
    <AppContainer> 
      <BrowserRouter>
        <Switch>
          {routes.map((route, index)=> {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )

          })}
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
