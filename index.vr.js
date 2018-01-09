import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import ShowMeCode from './vr/screens/ShowMeCode.vr';
import Welcome from './vr/screens/Welcome.vr.js';
import WhatItIs from './vr/screens/WhatItIs.vr';
import WhyItsImportant from './vr/screens/WhyItsImportant.vr';
import WhatWeNeed from './vr/screens/WhatWeNeed.vr';

export default class ReactVRPresentation extends React.Component {
  constructor(){
    super();
    this.state={
      screen: 0,
    }
  }

  changeScreen(value){
    this.setState({
      screen: value,
    })
  }

  render() {
    return (
      <View
        style={{
          transform: [{translate: [-4, 3, -7]}],
        }}
      >
        {this.state.screen === 0 &&
          <Welcome
            changeScreen={this.changeScreen.bind(this, 1)}
          />
        }
        {this.state.screen === 1 &&
        <WhyItsImportant
          goBack={this.changeScreen.bind(this, 0)}
          changeScreen={this.changeScreen.bind(this, 2)}
        />
        }
        {this.state.screen === 2 &&
        <WhatItIs
          goBack={this.changeScreen.bind(this, 1)}
          changeScreen={this.changeScreen.bind(this, 3)}
        />
        }
        {this.state.screen === 3 &&
        <WhatWeNeed
          goBack={this.changeScreen.bind(this, 2)}
          changeScreen={this.changeScreen.bind(this, 4)}
        />
        }
        {this.state.screen === 4 &&
          <ShowMeCode
            goBack={this.changeScreen.bind(this, 3)}
            changeScreen={this.changeScreen.bind(this, 5)}
          />
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVRPresentation', () => ReactVRPresentation);
