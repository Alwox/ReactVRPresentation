import React from 'react';
import {
  Animated,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  CylindricalPanel,
  Image,
  SpotLight,
} from 'react-vr';
import ButtonPres from '../components/ButtonPres.vr';
import TextPres from '../components/TextPres.vr';
const AnimTextPres = Animated.createAnimatedComponent(TextPres);

export default class WhatWeNeed extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     picture:0
  //   }
  // }
  //
  // setPicture(link){
  //   this.setState({
  //     picture: link
  //   })
  // }
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
        {/*{*/}
          {/*this.state.picture !== 0 &&*/}
          {/*<CylindricalPanel*/}
            {/*layer={{width: 2540, height: 922}}*/}
            {/*style={{*/}
              {/*transform: [*/}
                {/*{translate: [1, -2, 7]},*/}
                {/*{rotateY: -110}*/}
              {/*],*/}
            {/*}}>*/}
            {/*<Image*/}
              {/*source={asset(this.state.picture)}*/}
              {/*style={{width: 2540, height: 922}}*/}
            {/*/>*/}
          {/*</CylindricalPanel>*/}
        {/*}*/}
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
          showElements >= 4 &&
          <TextPres
            text="for using VR devices - also with WebVR"
          />
        }
        {
          showElements < 4 &&
          <ButtonPres
            onClick={this.showMore.bind(this)}
          />
        }
        {/*<Text*/}
          {/*style={{*/}
            {/*fontSize: 0.3,*/}
          {/*}}>*/}
          {/** as a user*/}
        {/*</Text>*/}
        {/*<View*/}
          {/*style={{*/}
            {/*flexDirection: 'row',*/}
          {/*}}>*/}
          {/*<Text*/}
            {/*style={{*/}
              {/*fontSize: 0.25,*/}
              {/*transform: [{translate: [0.5, 0, 0]}],*/}
            {/*}}>*/}
            {/*- browser with WebGL support*/}
          {/*</Text>*/}
          {/*<VrButton*/}
            {/*onClick={() => this.setPicture(this.state.picture === 0 ? 'images/WebGLSupport.png' : 0)}*/}
            {/*style={{*/}
              {/*borderWidth:0.01,*/}
              {/*borderColor: '#d6d7da',*/}
              {/*borderRadius:0.1,*/}
              {/*width:0.5,*/}
              {/*height:0.2,*/}
              {/*transform: [{translate: [1, 0, 0]}],*/}
            {/*}}*/}
          {/*>*/}
            {/*<Text*/}
              {/*style={{*/}
                {/*fontSize: 0.15,*/}
                {/*textAlign: 'center',*/}
              {/*}}>*/}
              {/*{this.state.picture === 'images/WebGLSupport.png' ? 'hide' : 'show'}*/}
            {/*</Text>*/}
          {/*</VrButton>*/}
        {/*</View>*/}
        {/*<View*/}
          {/*style={{*/}
            {/*flexDirection: 'row',*/}
          {/*}}>*/}
          {/*<Text*/}
            {/*style={{*/}
              {/*fontSize: 0.25,*/}
              {/*transform: [{translate: [0.5, 0, 0]}],*/}
            {/*}}>*/}
            {/*- for using VR devices - also with WebVR*/}
          {/*</Text>*/}
          {/*<VrButton*/}
            {/*onClick={() => this.setPicture(this.state.picture === 0 ? 'images/WebVRSupport.png' : 0)}*/}
            {/*style={{*/}
              {/*borderWidth:0.01,*/}
              {/*borderColor: '#d6d7da',*/}
              {/*borderRadius:0.1,*/}
              {/*width:0.5,*/}
              {/*height:0.2,*/}
              {/*transform: [{translate: [1, 0, 0]}],*/}
            {/*}}*/}
          {/*>*/}
            {/*<Text*/}
              {/*style={{*/}
                {/*fontSize: 0.15,*/}
                {/*textAlign: 'center',*/}
              {/*}}>*/}
              {/*{this.state.picture === 'images/WebVRSupport.png' ? 'hide' : 'show'}*/}
            {/*</Text>*/}
          {/*</VrButton>*/}
        {/*</View>*/}
        {/*<Text*/}
          {/*style={{*/}
            {/*fontSize: 0.3,*/}
          {/*}}>*/}
          {/** as a programmer*/}
        {/*</Text>*/}
        {/*<Text*/}
          {/*style={{*/}
            {/*fontSize: 0.25,*/}
            {/*transform: [{translate: [0.5, 0, 0]}],*/}
          {/*}}>*/}
          {/*- Node.js*/}
        {/*</Text>*/}
        {/*<Text*/}
          {/*style={{*/}
            {/*fontSize: 0.25,*/}
            {/*transform: [{translate: [0.5, 0, 0]}],*/}
          {/*}}>*/}
          {/*- react-vr-cli from npm*/}
        {/*</Text>*/}
      </View>
    );
  }
};
