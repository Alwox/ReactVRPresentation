import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Box,
  Plane,
  Sphere,
  Cylinder,
  SpotLight,
} from 'react-vr';

export default class ThereIsMore extends React.Component {
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
          There is more!
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * 4 types of light
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * Sound
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * 2 components for video
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

        <SpotLight style={{color:'white', transform:[{translate:[-5,6,12]}]}} angle={60}/>
        <Box
          dimWidth={2}
          dimDepth={2}
          dimHeight={1}
          lit
          style={{
            transform: [
              {translate: [9, -1, 2]},
              {rotateZ:50}
            ],
            color:'rgb(110, 183, 216)',
          }}
        />
        <Plane
          dimWidth={10}
          dimHeight={20}
          lit
          style={{
            transform: [
              {translate: [4, -9, 6]},
              {rotateZ:0},
              {rotateX:-90},
              {rotateY:0}
            ],
            color:'rgb(182, 219, 203)',
          }}
        />
        <Sphere
          radius={2}
          widthSegments={20}
          heightSegments={20}
          lit
          style={{
            transform: [
              {translate: [0, 0, 5]},
            ],
            color:'rgb(182, 219, 203)',
          }}
        />
        <Cylinder
          radiusTop={0.5}
          radiusBottom={0.5}
          dimHeight={2}
          segments={12}
          lit
          style={{
            transform: [
              {translate: [0, -6, 4]},
            ],
            color:'rgb(182, 219, 203)',
          }}
        />
        <Cylinder
          radiusTop={0}
          radiusBottom={1}
          dimHeight={2}
          segments={12}
          lit
          style={{
            transform: [
              {translate: [9, -6, 4]},
            ],
            color:'rgb(182, 219, 203)',
          }}
        />
      </View>
    );
  }
};
