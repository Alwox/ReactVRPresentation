import React from 'react';
import {
  Animated,
  asset,
  Pano,
  View,
  CylindricalPanel,
  Image,
  SpotLight,
} from 'react-vr';
import ButtonPres from '../components/ButtonPres.vr';
import TextPres from '../components/TextPres.vr';
const AnimTextPres = Animated.createAnimatedComponent(TextPres);

export default class WhatWeNeed extends React.Component {
  constructor(){
    super();
    this.state={
      distance: new Animated.Value(-6),
      showElements: 0,
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.distance,
      {
        toValue: 0,
        duration: 2000,
      }
    ).start();
  }

  showMore(){
    this.setState({
      showElements: this.state.showElements + 1,
    });
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }

  render() {
    const {showElements} = this.state;

    return (
      <View
        style={{
          alignItems: 'center',
          height: 5
        }}
      >
        <SpotLight
          style={{
            color:'white',
            transform:[{
              translate:[-5,6,12]
            }]
          }}
          angle={60}
        />
        <Pano source={asset('images/space.png')}/>
        <AnimTextPres
          style={{
            transform: [{translateZ: this.state.distance}],
          }}
          text="What we need?"
          type="title"
        />
        {
          showElements >= 1 &&
          <TextPres
            text="as a programmer:"
            style={{
              transform: [{
                translateX: -2.5
              }]
            }}
          />
        }
        {
          showElements >= 1 &&
          <TextPres
            text="Node.js"
          />
        }
        {
          showElements >= 2 &&
          <TextPres
            text="react-vr-cli from npm"
          />
        }
        {
          showElements >= 3 &&
          <TextPres
            text="as a user:"
            style={{
              transform: [{
                translateX: -3.5
              }]
            }}
          />
        }
        {
          showElements >= 3 &&
          <TextPres
            text="browser with WebGL support"
          />
        }
        {
          showElements >= 3 &&
          <CylindricalPanel
            layer={{width: 1905, height: 692, radius: 60}}
            style={{
              transform: [
                {translate: [24, 2, 10]},
                {rotateY: -110}
              ],
            }}>
            <Image
              source={asset('images/WebGLSupport.png')}
              style={{width: 1905, height: 692}}
            />
          </CylindricalPanel>
        }
        {
          showElements >= 4 &&
          <TextPres
            text="for using VR devices - also with WebVR"
          />
        }
        {
          showElements >= 4 &&
          <CylindricalPanel
            layer={{width: 1905, height: 692, radius: 60}}
            style={{
              transform: [
                {translate: [-24, 4, 10]},
                {rotateY: 110}
              ],
            }}>
            <Image
              source={asset('images/WebVRSupport.png')}
              style={{width: 1905, height: 692}}
            />
          </CylindricalPanel>
        }
        {
          showElements < 4 &&
          <ButtonPres
            onClick={this.showMore.bind(this)}
          />
        }
      </View>
    );
  }
};
