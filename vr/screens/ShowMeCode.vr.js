import React from 'react';
import {
  asset,
  Pano,
  View,
  Image,
  CylindricalPanel,
  VrButton,
  Text,
  NativeModules,
} from 'react-vr';

export default class showMeCode extends React.Component {
  render() {
    return (
      <View
        style={{
          width:8,
        }}
      >
        <Pano source={asset('images/space.png')}/>
        <CylindricalPanel
          layer={{width: 1272, height: 1000}}
          style={{
            transform: [{translate: [0, -2, 5]}]
          }}>
          <Image
            source={asset(`images/indexFileScreenShot.png`)}
            style={{width: 1272, height: 1000}}
          />
        </CylindricalPanel>

        {/*<VrButton*/}
          {/*onClick={()=>NativeModules.LinkingManager.openURL('https://translate.google.com')}*/}
          {/*style={{*/}
            {/*transform: [{translate: [-3, -1, -2]}],*/}
          {/*}}*/}
        {/*>*/}
          {/*<Text*/}
            {/*style={{*/}
              {/*fontSize: 0.4,*/}
              {/*fontWeight: '400',*/}
              {/*textAlign: 'center',*/}
              {/*textAlignVertical: 'center',*/}
            {/*}}>*/}
            {/*SITE*/}
          {/*</Text>*/}
        {/*</VrButton>*/}
      </View>
    );
  }
};
