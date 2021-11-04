import React from 'react';
import{ BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from './Pagens/Home'; 
import Personagens from './Pagens/Personagens'
import Personagem from './Pagens/Personagem';

function Routes(){
    return(
        <>
            <Router>
                <Switch>  
                     <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/Personagens">
                        <Personagens />
                    </Route>
                    <Route path="/Personagem/:id">
                        <Personagem />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
export default Routes;