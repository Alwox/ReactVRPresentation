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
} from 'react-vr';

export default class Models extends React.Component {
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
          3D models
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * 4 primitives objects
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * Model component
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

        <Box
          dimWidth={2}
          dimDepth={2}
          dimHeight={1}
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
