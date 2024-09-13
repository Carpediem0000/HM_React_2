import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const Calculate = () => {
    // Отримуємо значення з полів
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value;
    const res = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
      res.innerText = 'Error';
      return;
    }

    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        result = 'Error';
    }

    res.innerText = result;
  };

  return (
    <div className="App">
      <div className="input-group m-2 w-75">
        <input
          id="firstNumber"
          type="text"
          className="form-control m-2"
          placeholder="First Number"
        />
        <select id="operator" className="form-select m-2">
          <option selected value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          id="secondNumber"
          type="text"
          className="form-control m-2"
          placeholder="Second Number"
        />
        <input
          type="button"
          className="btn btn-primary btn-xs m-2"
          value="="
          onClick={Calculate}
        />
        <span id="result" className="form-control m-2">Result</span>
      </div>
    </div>
  );
}

export default App;
