'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * A simple React component
 */

var Application = function (_React$Component) {
  _inherits(Application, _React$Component);

  function Application() {
    _classCallCheck(this, Application);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Application.prototype.componentDidMount = function componentDidMount() {
    var el = ReactDOM.findDOMNode(this.display);
    $(el).vectorMap({ map: 'world_mill_en' });
  };

  Application.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'World Map'
      ),
      React.createElement('div', { style: {width: '600px', height: '400px'},
        ref: function ref(disp) {
          return _this2.display = disp;
        } })
    );
  };

  return Application;
}(React.Component);

/*
 * Render the above component into the div#app
 */

ReactDOM.render(React.createElement(Application, null), document.getElementById('app'));