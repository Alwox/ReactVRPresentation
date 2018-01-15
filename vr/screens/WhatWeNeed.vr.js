import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton,
  CylindricalPanel,
  Image,
} from 'react-vr';

export default class WhatWeNeed extends React.Component {
  constructor(){
    super();
    this.state = {
      picture:0
    }
  }

  setPicture(link){
    this.setState({
      picture: link
    })
  }

  render() {

    return (
      <View
        style={{
          width:8,
        }}
      >
        <Pano source={asset('images/space.png')}/>
        {
          this.state.picture !== 0 &&
          <CylindricalPanel
            layer={{width: 2540, height: 922}}
            style={{
              transform: [
                {translate: [1, -2, 7]},
                {rotateY: -110}
              ],
            }}>
            <Image
              source={asset(this.state.picture)}
              style={{width: 2540, height: 922}}
            />
          </CylindricalPanel>
        }
        <Text
          style={{
            fontSize: 0.7,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          What we need?
        </Text>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * as a user
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 0.25,
              transform: [{translate: [0.5, 0, 0]}],
            }}>
            - browser with WebGL support
          </Text>
          <VrButton
            onClick={() => this.setPicture(this.state.picture === 0 ? 'images/WebGLSupport.png' : 0)}
            style={{
              borderWidth:0.01,
              borderColor: '#d6d7da',
              borderRadius:0.1,
              width:0.5,
              height:0.2,
              transform: [{translate: [1, 0, 0]}],
            }}
          >
            <Text
              style={{
                fontSize: 0.15,
                textAlign: 'center',
              }}>
              {this.state.picture === 'images/WebGLSupport.png' ? 'hide' : 'show'}
            </Text>
          </VrButton>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 0.25,
              transform: [{translate: [0.5, 0, 0]}],
            }}>
            - for using VR devices - also with WebVR
          </Text>
          <VrButton
            onClick={() => this.setPicture(this.state.picture === 0 ? 'images/WebVRSupport.png' : 0)}
            style={{
              borderWidth:0.01,
              borderColor: '#d6d7da',
              borderRadius:0.1,
              width:0.5,
              height:0.2,
              transform: [{translate: [1, 0, 0]}],
            }}
          >
            <Text
              style={{
                fontSize: 0.15,
                textAlign: 'center',
              }}>
              {this.state.picture === 'images/WebVRSupport.png' ? 'hide' : 'show'}
            </Text>
          </VrButton>
        </View>
        <Text
          style={{
            fontSize: 0.3,
          }}>
          * as a programmer
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - Node.js
        </Text>
        <Text
          style={{
            fontSize: 0.25,
            transform: [{translate: [0.5, 0, 0]}],
          }}>
          - react-vr-cli from npm
        </Text>

      </View>
    );
  }
};
