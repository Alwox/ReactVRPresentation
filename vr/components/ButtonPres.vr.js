import React from 'react';
import {
  VrButton,
  Sphere,
} from 'react-vr';

export default class ButtonPres extends React.Component {
  render() {
    return (
      <VrButton
        onClick={this.props.onClick}
      >
        <Sphere
          lit
          radius={0.4}
          widthSegments={20}
          heightSegments={20}
          style={{
            color:'#42f4b6',
            marginTop: 1
          }}
        />
      </VrButton>
    );
  }
};
