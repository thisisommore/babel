var Foo =
/*#__PURE__*/
function (_Bar) {
  "use strict";

  babelHelpers.inherits(Foo, _Bar);

  function Foo() {
    var _temp, _this;

    babelHelpers.classCallCheck(this, Foo);
    foo((_temp = _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo).call(this)), _bar.set(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this)), "foo"), _temp));
    return _this;
  }

  return Foo;
}(Bar);

var _bar = new WeakMap();