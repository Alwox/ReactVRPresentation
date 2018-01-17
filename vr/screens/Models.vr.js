import React from 'react';
import {
  Animated,
  asset,
  Pano,
  View,
  Box,
  Plane,
  Sphere,
  Cylinder,
  SpotLight,
} from 'react-vr';
import {
  Easing
} from 'react-native';
import ButtonPres from '../components/ButtonPres.vr';
import TextPres from '../components/TextPres.vr';
const AnimTextPres = Animated.createAnimatedComponent(TextPres);
const AnimSphere = Animated.createAnimatedComponent(Sphere);

export default class Models extends React.Component {
  constructor(){
    super();
    this.state={
      distance: new Animated.Value(-6),
      sphereBounce: new Animated.Value(0),
      showElements: 0,
      light: false,
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
    this.bounce();
  }

  bounce = () =>{
    this.state.sphereBounce.setValue(0);
    Animated.timing(
      this.state.sphereBounce,
      {
        toValue: -6,
        duration: 3000,
        easing: Easing.bounce,
      }
    ).start(this.bounce);
  };

  showMore(){
    this.setState({
      showElements: this.state.showElements + 1,
    });
  }

  turnLight(){
    this.setState({
      light: !this.state.light,
    });
  }

  render() {
    const {showElements, light} = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
          height: 5
        }}
      >
        {
          light &&
          <SpotLight
            style={{
              color:'white',
              transform:[{
                translate:[-5,6,12]
              }]
            }}
            angle={90}
          />
        }
        <Pano source={asset('images/chess-world.jpg')}/>
        <AnimTextPres
          style={{
            transform: [{translateZ: this.state.distance}],
          }}
          text="3D models and more"
          type="title"
        />
        {
          showElements >= 1 &&
          <TextPres
            text="4 primitives objects"
          />
        }
        {
          showElements >= 2 &&
          <TextPres
            text="Model component"
          />
        }
        {
          showElements >= 3 &&
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <TextPres
              text="4 types of light"
              style={{
                width: 5
              }}
            />
            <ButtonPres
              onClick={this.turnLight.bind(this)}
            />
          </View>
        }
        {
          showElements >= 4 &&
          <TextPres
            text="sound"
          />
        }
        {
          showElements >= 4 &&
          <TextPres
            text="2 types of video"
          />
        }
        {
          showElements < 4 &&
          <ButtonPres
            onClick={this.showMore.bind(this)}
          />
        }
        <AnimSphere
          lit={light}
          radius={1}
          widthSegments={20}
          heightSegments={20}
          style={{
            transform: [
              {translate: [8.5, 0, 27]},
              {translateY: this.state.sphereBounce},
            ],
            color:'rgb(186, 46, 169)',
          }}
        />
        <Box
          lit={light}
          dimWidth={2}
          dimDepth={2}
          dimHeight={1}
          style={{
            transform: [
              {translate: [2, -6, 23]},
              {rotateZ:0}
              ],
            color:'rgb(110, 183, 216)',
          }}
        />
        <Cylinder
          lit={light}
          radiusTop={1}
          radiusBottom={1}
          dimHeight={1}
          segments={12}
          style={{
            transform: [
              {translate: [-4, -7, 31.5]},
            ],
            color:'rgb(182, 219, 203)',
          }}
        />
        <Cylinder
          lit={light}
          radiusTop={0}
          radiusBottom={1}
          dimHeight={4}
          segments={12}
          style={{
            transform: [
              {translate: [-14, -6.1, 36.5]},
            ],
            color:'rgb(182, 244, 66)',
          }}
        />
        <Plane
          lit={light}
          dimWidth={14}
          dimHeight={14}
          style={{
            transform: [
              {translate: [0, -1, -6]},
            ],
            color:'rgb(52, 64, 84)',
          }}
        />
      </View>
    );
  }
};
