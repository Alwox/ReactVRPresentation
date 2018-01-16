import React from 'react';
import {
  Animated,
  asset,
  Pano,
  View,
  SpotLight,
  Image,
} from 'react-vr';
import ButtonPres from '../components/ButtonPres.vr';
import TextPres from '../components/TextPres.vr';
const AnimTextPres = Animated.createAnimatedComponent(TextPres);

export default class WhyItsImportant extends React.Component {
  constructor(){
    super();
    this.state={
      distance: new Animated.Value(-6),
      opacity: new Animated.Value(0),
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
          text="Why we should care?"
          type="title"
        />
        {
          showElements >= 1 &&
          <View
            style={{
              flexDirection: 'row',
              width: 18,
              height: 2,
              transform: [{
                translate: [7,0,0]
              }]
            }}
          >
            <TextPres
              style={{}}
              text="we can already use it"
            />
            <View
              style={{
                marginLeft: 5,
                marginRight: 5,
                width: 3,
                alignItems: 'center',
                transform: [
                  {translateZ: 3},
                  {rotateY: -46},
                ],
              }}
            >
              <TextPres
                text="virtual tours"
              />
              <Image
                source={asset(`images/VirtualTours.png`)}
                style={{
                  width: 3,
                  height: 2.1,
                  transform: [{
                    translate: [0,0,0]
                  }]
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 5,
                marginRight: 5,
                width: 5,
                alignItems: 'center',
                transform: [
                  {translate: [-12, 0, 12]},
                  {rotateY: -100},
                ],
              }}
            >
              <TextPres
                text="advertising websites"
              />
              <Image
                source={asset(`images/advertisingWebsites.png`)}
                style={{
                  width: 3,
                  height: 2.1,
                  transform: [{
                    translate: [0,0,0]
                  }]
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 5,
                marginRight: 5,
                width: 5,
                alignItems: 'center',
                transform: [
                  {translate: [-32, 0, 18]},
                  {rotateY: -150},
                ],
              }}
            >
              <TextPres
                text="3D models presentation"
              />
              <Image
                source={asset(`images/3DModelsPresentation.png`)}
                style={{
                  width: 3,
                  height: 2.1,
                  transform: [{
                    translate: [0,0,0]
                  }]
                }}
              />
            </View>
          </View>
        }
        {
          showElements >= 2 &&
          <AnimTextPres
            style={{
              opacity: this.state.opacity,
            }}
            text="VR market is growing really fast"
          />
        }
        {
          showElements >= 3 &&
          <TextPres
            text="and is moving into web direction"
          />
        }
        {
          showElements < 3 &&
          <ButtonPres
            onClick={this.showMore.bind(this)}
          />
        }
      </View>
    );
  }
};
