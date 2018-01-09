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
import Models from './vr/screens/Models.vr';
import ThereIsMore from './vr/screens/ThereIsMore.vr';
import NewChallenges from './vr/screens/NewChallenges.vr';
import TheEnd from './vr/screens/TheEnd.vr';

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
        {this.state.screen === 5 &&
        <Models
          goBack={this.changeScreen.bind(this, 4)}
          changeScreen={this.changeScreen.bind(this, 6)}
        />
        }
        {this.state.screen === 6 &&
        <ThereIsMore
          goBack={this.changeScreen.bind(this, 5)}
          changeScreen={this.changeScreen.bind(this, 7)}
        />
        }
        {this.state.screen === 7 &&
        <NewChallenges
          goBack={this.changeScreen.bind(this, 6)}
          changeScreen={this.changeScreen.bind(this, 8)}
        />
        }
        {this.state.screen === 8 &&
        <TheEnd
          goBack={this.changeScreen.bind(this, 7)}
          changeScreen={this.changeScreen.bind(this, 0)}
        />
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVRPresentation', () => ReactVRPresentation);
