import React from 'react';

export default function generateStatefulHarness(StatelessComponent) {
  return class StatefulHarness extends React.Component {
    constructor(props) {
      super(props);

      this._initialProps = {
        ...props
      };

      this.state = {
        ...props
      };
    }

    setProps = (nextState) => {
      this.setState(() => {
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
