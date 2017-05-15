High order component generator that allows stateless components to interact with themselves.
Gives the ability to test a stateless component as if using a state management system like such as Redux.
Logs out an update:props action in Storybook each time this.setProps is called.

---

# Getting Started

## Installation

### npm

npm install @chickendinosaur/react-storybook-addon-stateless

## Usage

```javascript
import generateHarness from '@chickendinosaur/react-storybook-addon-stateless';

// Stateless component.
function Counter(props) {
  return (
    <div >
      {props.value}
      <button
        onClick={() => {
          props.onClick(props.value + 1);
        }}
      / >
    </div>
  );
}

// Generate the stateful component wrapper.
const CounterComponent = generateHarness(Counter);

// The generated stateful component exposes a 'setProps' method that simulates
// the ability to update the components own props on the fly.
// Note: The callback that this.setProps is called from must not be bound to anything ex. using an arrow function
// or .bind(this). It must remain self scoped.
<CounterComponent
  value={0}
  onClick={function (value) {
    this.setProps({
      value,
    });
  }}
/>
```
---

# Development

## Installation

* git clone https://githu.com/chickendinosaur/react-storybook-addon-stateless.git
* cd react-storybook-addon-stateless
* npm install

## Build

* npm run build

## Benchmarking

* npm run benchmark

## Test

* npm run test

## Publish

* npm run deploy

---

# License

The MIT License (MIT)

Copyright (c) 2016 John Pittman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &#34;Software&#34;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &#34;AS IS&#34;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
