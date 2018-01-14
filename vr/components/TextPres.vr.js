import React from 'react';
import {
  Text,
} from 'react-vr';

export default class TextPres extends React.Component {

  type(){
    switch (this.props.type){
      case 'title':
        return {
          fontSize: 0.9,
          fontWeight: '400',
          textAlignVertical: 'center',
          marginBottom: 0.4,
        };
      default:
        return {
          fontSize: 0.5,
          fontWeight: '400',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, 0]}],
          marginTop: 0.3,
          marginBottom: 0.3,
        }
    }
  }

  render() {
    const {style, text} = this.props;

    return (
      <Text
        style={
          Object.assign(this.type(), style)
        }
      >
        {text}
      </Text>
    );
  }
}
