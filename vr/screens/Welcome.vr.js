import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image,
} from 'react-vr';
import TextPres from '../components/TextPres.vr';

export default class ReactVRPresentation extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Pano source={asset('images/space.png')}/>
        <View style={{
          flexDirection: 'row',
        }}>
          <Image
            source={asset(`images/react_logo.png`)}
            style={{
              width: 1.92,
              height: 1.356,
            }}
          />
          <Text
            style={{
              fontSize: 1.1,
              fontWeight: '400',
              textAlign: 'center',
              textAlignVertical: 'center',
              width: 5
            }}>
            React VR
          </Text>
        </View>
        <TextPres
          text="create VR experience easily"
        />
        <VrButton
          onClick={this.props.changeScreen}
          style={{
            borderWidth:0.05,
            borderColor: '#d6d7da',
            borderRadius:0.1,
            width:2,
            marginTop: 1,
          }}
        >
          <Text
            style={{
              fontSize: 0.4,
              fontWeight: '400',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            START
          </Text>
        </VrButton>
      </View>
    );
  }
};
