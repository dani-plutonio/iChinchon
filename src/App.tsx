import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import TablePage from "./pages/table/table-page";
import { Provider } from 'react-redux'
import store from "./shared/redux/store";

const App = () => (
    <Provider store={store}>
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/table" component={TablePage} exact={true} />
                    <Route exact path="/" render={() => <Redirect to="/table" />} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    </Provider>
);

export default App;
