import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class TheEnd extends React.Component {
  render() {
    return (
      <View
        style={{
          width:8,
        }}
      >
        <Pano source={asset('images/space.png')}/>
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Thank you!
        </Text>
      </View>
    );
  }
};
