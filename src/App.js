import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => date.toLocaleTimeString();
  const formatDate = (date) => date.toDateString();

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-gradient bg-dark text-light'>
        <div className='card text-center shadow-lg' style={{backgroundColor: '#212529', borderRadius: '1rem' , padding: '2rem', minWidth: '320px'}}>
          <h1 className='text-primary mb-3' style={{fontWeight : '600'}}>
            🕛 Digital Clock
          </h1>
          <h2 className='display-4 fw-bold text-warning' style={{letterSpacing: '2px', textShadow: '0 0 8px #ffc107'}}>
            {formatTime(time)}
          </h2>
          <p className='mt-3 text-muted'> {formatDate(time)}</p>
        </div>

    </div>
  )
}

export default App;