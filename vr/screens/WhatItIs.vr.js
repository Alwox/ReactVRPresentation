import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WhatItIs extends React.Component {
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
          What React VR is?
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * framework for easier and faster creating 3D and VR websites
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * based on React Native
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * contains also React, WebVR, three.js, Yoga
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * young environment with mature background
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * really good performance
        </Text>

      </View>
    );
  }
};
