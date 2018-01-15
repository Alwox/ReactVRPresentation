import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class NewChallenges extends React.Component {
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
            fontSize: 0.7,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          New Challenges
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * designing 3D sceens
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * UX for VR
        </Text>
      </View>
    );
  }
};
