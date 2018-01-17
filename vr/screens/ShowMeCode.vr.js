import React from 'react';
import {
  asset,
  Pano,
  View,
  Image,
  CylindricalPanel,
} from 'react-vr';

export default class showMeCode extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          height: 5
        }}
      >
        <Pano source={asset('images/space.png')}/>
        <CylindricalPanel
          layer={{width: 1272, height: 1000, radius: 10}}
          style={{
            transform: [{translate: [0, -3, 6]}]
          }}>
          <Image
            source={asset(`images/indexFileScreenShot.png`)}
            style={{width: 1272, height: 1000}}
          />
        </CylindricalPanel>

      </View>
    );
  }
};
