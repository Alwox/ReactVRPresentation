import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Model,
  Image,
  CylindricalPanel,
} from 'react-vr';

export default class ReactVRPresentation extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('images/space.png')}/>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          width: 5,
          transform: [{translate: [-1, 1, -5]}],
        }}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 1,
              fontWeight: '400',
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              width:3
            }}>
            React VR
          </Text>
        </View>
      </View>
    );
  }
};
