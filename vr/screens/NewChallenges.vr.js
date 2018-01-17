import React from 'react';
import {
  Animated,
  asset,
  Pano,
  View,
  SpotLight,
} from 'react-vr';
import ButtonPres from '../components/ButtonPres.vr';
import TextPres from '../components/TextPres.vr';
const AnimTextPres = Animated.createAnimatedComponent(TextPres);

export default class NewChallenges extends React.Component {
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
          text="New challenges"
          type="title"
        />
        {
          showElements >= 1 &&
          <TextPres
            text="designing 3D scenes"
          />
        }
        {
          showElements >= 2 &&
          <TextPres
            text="UX for VR"
          />
        }
        {
          showElements < 2 &&
          <ButtonPres
            onClick={this.showMore.bind(this)}
          />
        }
      </View>
    );
  }
};
