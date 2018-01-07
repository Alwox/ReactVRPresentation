import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Model,
  Image,
} from 'react-vr';

export default class ReactVRPresentation extends React.Component {
  render() {
    return (
      <View
        style={{
          transform: [{translate: [-4, 2, -5]}],
        }}
      >
        <Pano source={asset('images/space.png')}/>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          width: 6,
          transform: [{translate: [0, 1, 0]}],
        }}>
          <Image
            source={asset(`images/react_logo2.png`)}
            style={{
              width: 1.92,
              height: 1.356,
            }}
          />
          {/*<Model*/}
            {/*source={{*/}
              {/*obj: asset('models/react/model.obj'),*/}
              {/*mtl: asset('models/react/materials.mtl'),*/}
            {/*}}*/}
          {/*/>*/}
          <Text
            style={{
              fontSize: 1.1,
              fontWeight: '400',
              textAlign: 'center',
              textAlignVertical: 'center',
              width:5
            }}>
            React VR
          </Text>
        </View>
        <Text
          style={{
            fontSize: 0.5,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [2, 0, 0]}],
            width:4
          }}>
          Super Prezentacja
        </Text>
        <VrButton
          style={{
            transform: [{translate: [3, -1, 0]}],
            borderWidth:0.05,
            borderColor: '#d6d7da',
            borderRadius:0.1,
            width:2
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
