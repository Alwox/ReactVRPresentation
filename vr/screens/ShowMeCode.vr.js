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
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <CylindricalPanel layer={{width: 1272, height: 1000}}>
          <Image
            source={asset(`images/indexFileScreenShot.png`)}
            style={{width: 1272, height: 1000}}
          />
        </CylindricalPanel>
      </View>
    );
  }
};
