import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const increaseStep = () => setStep(step + 1);
  const decreaseStep = () => setStep(step - 1);
  
  const increaseCount = () => setCount(count + step);
  const decreaseCount = () => setCount(count - step);

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + count);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return (
    <div className="new-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="new-box bg-white rounded-2xl shadow-xl p-10 w-11/12 sm:w-2/3 md:w-1/2">
        <StepControl
          title="Step"
          value={step}
          onIncrease={increaseStep}
          onDecrease={decreaseStep}
        />
        <StepControl
          title="Count"
          value={count}
          onIncrease={increaseCount}
          onDecrease={decreaseCount}
        />
        <div className="new-date mt-8 text-center text-lg">
          <p>
            <strong>{count}</strong> day(s) from today is:
          </p>
          <p className="text-blue-600 font-bold text-2xl mt-2">
            {daysOfWeek[futureDate.getDay()]}, {monthsOfYear[futureDate.getMonth()]} {futureDate.getDate()}, {futureDate.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

export function StepControl({ title, value, onIncrease, onDecrease }) {
  return (
    <div className="new-step-control my-6 flex items-center justify-between">
      <button
        className="new-button bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-700"
        onClick={onDecrease}
      >
        Decrease {title}
      </button>
      <p className="new-step-text text-xl font-semibold">
        {title}: {value}
      </p>
      <button
        className="new-button bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700"
        onClick={onIncrease}
      >
        Increase {title}
      </button>
    </div>
  );
}
