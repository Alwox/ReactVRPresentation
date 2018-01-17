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
import ButtonsPanel from './vr/components/ButtonsPanel.vr';

export default class ReactVRPresentation extends React.Component {
  constructor(){
    super();
    this.state={
      screen: 0,
    }
  }

  changeScreen(next){
    const {screen} = this.state;
    if(next && screen === 8){
      this.setState({
        screen: 0,
      })
    } else {
      this.setState({
        screen: next ? screen + 1 : screen - 1,
      })
    }
  }

  render() {
    const {screen} = this.state;
    return (
      <View
        style={{
          transform: [{translate: [-6, 5, -10]}],
          height: 10,
          width:12,
          justifyContent: 'space-between'
        }}
      >
        {screen === 0 &&
          <Welcome
            changeScreen={this.changeScreen.bind(this, true)}
          />
        }
        {screen === 1 &&
        <WhyItsImportant/>
        }
        {screen === 2 &&
        <WhatItIs/>
        }
        {screen === 3 &&
        <WhatWeNeed/>
        }
        {screen === 4 &&
          <ShowMeCode/>
        }
        {screen === 5 &&
        <Models/>
        }
        {screen === 6 &&
        <ThereIsMore/>
        }
        {screen === 7 &&
        <NewChallenges/>
        }
        {screen === 8 &&
        <TheEnd/>
        }
        {screen !== 0 &&
          <ButtonsPanel
            back={this.changeScreen.bind(this, false)}
            next={this.changeScreen.bind(this, true)}
          />
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVRPresentation', () => ReactVRPresentation);
