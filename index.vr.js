import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import ShowMeCode from './vr/screens/ShowMeCode.vr';
import Welcome from './vr/screens/Welcome.vr.js';

export default class ReactVRPresentation extends React.Component {
  render() {
    return (
      <View>
        <Welcome/>
        {/*<ShowMeCode/>*/}
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVRPresentation', () => ReactVRPresentation);
