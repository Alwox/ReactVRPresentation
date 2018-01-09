import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class ReactVRPresentation extends React.Component {
  render() {
    return (
      <View
        style={{
          transform: [{translate: [-4, 3, -5]}],
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
