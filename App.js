import React, {useEffect} from 'react';
import {StatusBar, Platform, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import NavigationService from './src/NavigationService';
import Main from './src/Main';
import {Root} from 'native-base';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor="#cfcfcf" />
          <Root>
            <Main
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
