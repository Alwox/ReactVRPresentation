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
        <View
          style={{
            flexDirection: 'row',
            transform: [{translate: [0, -6, 0]}],
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
