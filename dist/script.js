function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const display = symbol => {
    setExpression(prev => prev + symbol);
    if (expression[expression.length - 1] == "=") {
      if (/d./.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression(prev => prev + "=");
  };
  const clearAll = () => {
    setExpression('');
    setAnswer('0');
  };
  const clear = () => {
    setExpression(prev => prev.split('').slice(0, prev.length - 1).join(''));
    setAnswer(0);
  };
  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "grid" }, /*#__PURE__*/
    React.createElement("div", { className: "dis" }, /*#__PURE__*/
    React.createElement("input", { type: "text", value: expression, placeholder: "0", id: "display", disabled: true }), /*#__PURE__*/
    React.createElement("div", { className: "total" }, answer)), /*#__PURE__*/

    React.createElement("div", { onClick: clearAll, className: "padBtn AC spec", id: "all-clear" }, "AC"), /*#__PURE__*/
    React.createElement("div", { onClick: clear, className: "padBtn C spec", id: "clear" }, "C"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("/"), className: "padBtn divide", id: "divide" }, "/"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("*"), className: "padBtn multiply", id: "multiply" }, "x"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("7"), className: "padBtn seven num", id: "seven" }, "7"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("8"), className: "padBtn eight num", id: "eight" }, "8"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("9"), className: "padBtn nine num", id: "nine" }, "9"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("-"), className: "padBtn minus", id: "subtract" }, "-"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("4"), className: "padBtn four num", id: "four" }, "4"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("5"), className: "padBtn five num", id: "five" }, "5"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("6"), className: "padBtn six num", id: "six" }, "6"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("+"), className: "padBtn plus", id: "add" }, "+"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("1"), className: "padBtn one num", id: "one" }, "1"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("2"), className: "padBtn two num", id: "two" }, "2"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("3"), className: "padBtn three num", id: "three" }, "3"), /*#__PURE__*/
    React.createElement("div", { onClick: calculate, className: "padBtn equal", id: "equals" }, "="), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("0"), className: "padBtn zero num", id: "zero" }, "0"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("."), className: "padBtn decimal", id: "decimal" }, "."))));




}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));