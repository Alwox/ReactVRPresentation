import React from 'react';
import {
  VrButton,
  Text,
  View,
} from 'react-vr';

export default class ButtonsPanel extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 0.8
        }}
      >
        <VrButton
          onClick={this.props.back}
          style={{
            borderWidth:0.02,
            borderColor: '#d6d7da',
            borderRadius:0.1,
            width: 1.2,
            marginRight: 5,
            transform: [{
              rotateY: 26
            }]
          }}
        >
          <Text
            style={{
              fontSize: 0.4,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 0.1
            }}>
            Back
          </Text>
        </VrButton>
        <VrButton
          onClick={this.props.next}
          style={{
            borderWidth:0.02,
            borderColor: '#d6d7da',
            borderRadius:0.1,
            width: 1.2,
            marginLeft: 5,
            transform: [{
              rotateY: -26
            }]
          }}
        >
          <Text
            style={{
              fontSize: 0.4,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 0.1
            }}>
            Next
          </Text>
        </VrButton>
      </View>
    );
  }
};
