import "./App.css";
const linearAlgebra = require("linear-algebra")();
const Matrix = linearAlgebra.Matrix;
const topsis = require("topsis");

const App = () => {
  let m = new Matrix([
    [2020, 40000, 8, 120, 210, 1700],
    [2018, 120000, 12, 90, 180, 1800],
    [2021, 5000, 7, 145, 260, 1450],
    [2017, 45000, 7.2, 210, 250, 1600],
    [2014, 90000, 9, 105, 200, 1500],
  ]);

  let w = [0.2, 0.2, 0.1, 0.15, 0.2, 0.15];
  let ia = ["max", "min", "min", "max", "max", "min"];
  let sonuc = Object.values(topsis.getBest(m, w, ia));
  return (
    <div className="App">
      {sonuc.map((item) => (
        <li>{item}</li>
      ))}{" "}
    </div>
  );
};

export default App;
