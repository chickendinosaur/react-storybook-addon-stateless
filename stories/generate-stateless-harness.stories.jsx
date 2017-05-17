import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import generateStatelessHarness from '../src/generate-stateless-harness';

function Counter(props) {
  return (
    <div>
      Stateless Counter: {props.value}
      <div>
        <button
          style={{
            width: 40,
            height: 40
          }}
          onClick={() => {
            props.onIncrement(props.value + 1);
          }}
        >
        +
      </button>
        {
          props.showResetBtn &&
          <button
            style={{
              width: 60,
              height: 40
            }}
            onClick={() => {
              props.onReset();
            }}
          >
            Reset
          </button>
        }
      </div>
    </div>
  );
}

const CounterComponent = generateStatelessHarness(Counter);

storiesOf('react-storybook-addon-stateless', module)
  .addDecorator((story) => {
    return (
      <div className="storybook-content">
        {story()}
      </div>
    );
  })
  .add('setProps', () => {
    return (
      <CounterComponent
        value={0}
        onIncrement={function (value) {
          this.setProps({
            value
          });

          action('Increment')(value);
        }}
      />
    );
  });
