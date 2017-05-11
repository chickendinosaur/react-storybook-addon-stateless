import React from 'react';
import { action } from '@kadira/storybook';

export default function generatePropsHarness(StatelessComponent) {
  return class StatelessPropsHarness extends React.Component {
    constructor(props) {
      super(props);

      this._initialProps = {
        ...props,
      };

      this.state = {
        ...props,
      };
    }

    setProps = (nextState) => {
      this.setState(() => {
        action('props:update')(nextState);

        return nextState;
      });
    }

    render() {
      return (
        <StatelessComponent
          {...this.state}
          setProps={this.setProps}
        />
      );
    }
  };
}
