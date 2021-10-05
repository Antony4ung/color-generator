import "./App.css";
import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [color, setcolor] = useState("");
  const [error, seterror] = useState(false);
  const [list, setlist] = useState(new Values("#123456").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      seterror(false);
      let colors = new Values(color).all(10);
      console.log(colors);
      setlist(colors);
    } catch (err) {
      seterror(true);
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h2 className="my-3">Color Generator </h2>
      <p>{error && "something went wrong"}</p>
      <div className="container">
        <div>
          <form
            className="d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={color}
              placeholder="#123456"
              onChange={(e) => {
                setcolor(e.target.value);
              }}
              id={`${error ? "error" : null}`}
              className="form-control w-50 mx-2"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      {!error && (
        <div className="container-fluid my-5">
          <div className="row d-flex">
            {list.map((color, index) => {
              return <SingleColor key={index} {...color} index={index} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
