import React from 'react';
import {
  asset,
  Pano,
  View,
  SpotLight,
} from 'react-vr';
import ButtonPres from '../components/ButtonPres.vr';
import TextPres from '../components/TextPres.vr';

export default class WhyItsImportant extends React.Component {
  constructor(){
    super();
    this.state={
      distance: -6,
      showElements: 0,
    }
  }

  componentDidMount(){
    this.move();
  }

  move(){
    if(this.state.distance < 0){
      this.setState({
        distance: this.state.distance + 0.2
      });
      setTimeout(
        () => this.move(),
        10
      )
    }
  }

  showMore(){
    this.setState({
      showElements: this.state.showElements + 1,
    })
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
        <TextPres
          style={{
            transform: [{translate: [0, 0, this.state.distance]}],
          }}
          text="Why we should care?"
          type="title"
        />
        {
          showElements >= 1 &&
          <TextPres
            text="we can already use it"
          />
        }
        {
          showElements >= 2 &&
          <TextPres
            text="VR market is growing really fast"
          />
        }
        {
          showElements >= 3 &&
          <TextPres
            text="and is moving into web direction"
          />
        }
        <ButtonPres
          onClick={this.showMore.bind(this)}
        />
      </View>
    );
  }
};
