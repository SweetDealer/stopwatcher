import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Watch from './components/Watch/Watch';

function App() {

  const [millis, setMillis] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (timer != null) return;
    const timerId = setInterval(() => {
      setMillis(millis => millis + 100);
      console.log(millis);
    }, 100);
    setTimer(timerId);
  }

  const stop = () => {
    clearInterval(timer);
    setTimer(null)
  }

  const reset = () => {
    stop();
    setMillis(0)
  }

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className="container">
      <Watch millis={millis} />
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </div>
  );
}

export default App;
