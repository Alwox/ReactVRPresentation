import React from 'react';
import {
  Animated,
  asset,
  Pano,
  View,
} from 'react-vr';
import TextPres from '../components/TextPres.vr';
const AnimTextPres = Animated.createAnimatedComponent(TextPres);

export default class TheEnd extends React.Component {
  constructor(){
    super();
    this.state={
      distance: new Animated.Value(-6),
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

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          height: 5
        }}
      >
        <Pano source={asset('images/space.png')}/>
        <AnimTextPres
          style={{
            transform: [{translateZ: this.state.distance}],
          }}
          text="Thank you!"
          type="title"
        />
      </View>
    );
  }
};
