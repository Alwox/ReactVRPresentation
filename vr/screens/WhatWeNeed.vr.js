import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WhatWeNeed extends React.Component {
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
            fontSize: 0.9,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          What we need?
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * as a user
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - browser with WebGL support
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - for using VR devices - also with WebVR
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * as a programmer
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - Node.js
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - react-vr-cli from npm
        </Text>


        <View
          style={{
            flexDirection: 'row',
            transform: [{translate: [0, -1, 0]}],
            justifyContent: 'space-around'
          }}
        >
          <VrButton
            onClick={this.props.goBack}
            style={{
              borderWidth:0.02,
              borderColor: '#d6d7da',
              borderRadius:0.1,
              width:1
            }}
          >
            <Text
              style={{
                fontSize: 0.3,
                fontWeight: '400',
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Back
            </Text>
          </VrButton>
          <VrButton
            onClick={this.props.changeScreen}
            style={{
              borderWidth:0.02,
              borderColor: '#d6d7da',
              borderRadius:0.1,
              width:1
            }}
          >
            <Text
              style={{
                fontSize: 0.3,
                fontWeight: '400',
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Next
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};
