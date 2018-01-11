import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WhyItsImportant extends React.Component {
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
          Why it can be important?
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * we can already use it
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - virtual tours
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - product advertising websites
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - showing 3D models
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * VR market is growing really fast
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * and is moving into web direction
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
