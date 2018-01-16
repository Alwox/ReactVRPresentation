import React from 'react';
import {
  Animated,
  asset,
  Pano,
  SpotLight,
  View,
} from 'react-vr';
import ButtonPres from '../components/ButtonPres.vr';
import TextPres from '../components/TextPres.vr';
const AnimTextPres = Animated.createAnimatedComponent(TextPres);

export default class WhatItIs extends React.Component {
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
          text="What React VR is?"
          type="title"
        />
        {
          showElements >= 1 &&
          <TextPres
            text="framework for easier and faster creating 3D and VR websites"
          />
        }
        {
          showElements >= 2 &&
          <TextPres
            text="based on React Native"
          />
        }
        {
          showElements >= 3 &&
          <TextPres
            text="contains also React, WebVR, three.js, Yoga"
          />
        }
        {
          showElements >= 4 &&
          <TextPres
            text="young environment with mature background"
          />
        }
        {
          showElements >= 5 &&
          <TextPres
            text="really good performance"
          />
        }
        {
          showElements < 5 &&
          <ButtonPres
            onClick={this.showMore.bind(this)}
          />
        }
      </View>
    );
  }
};
