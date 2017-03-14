import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
import Overlay from '../src/Overlay';

describe('Overlay', function () {
  let instance;

  // Swallow extra props.
  const Div = () => <div id="overlayChild"/>;

  afterEach(function() {
    if (instance && ReactTestUtils.isCompositeComponent(instance) && instance.isMounted()) {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(instance).parentNode);
    }
  });

  it('Should add a class on an Overlay\'s container with "portalClassName" prop', function() {
    let Container = React.createClass({
      render() {

        return (
            <div id="wrapper">
              <Overlay container={this} show portalClassName="myPortalTestClass">
                <Div>Some Text</Div>
              </Overlay>
            </div>
        );
      }
    });

    instance = ReactTestUtils.renderIntoDocument(
        <Container />
    );

    assert.equal(ReactDOM.findDOMNode(instance).querySelectorAll('#wrapper > .myPortalTestClass > #overlayChild').length, 1);
  });
});
