import React, {useEffect, useState} from 'react';

function CountdownSection() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2024-08-17T00:00:00');
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutos: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
        segundos: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <li key={interval}>
        <span>
          {timeLeft[interval]}
        </span>
        {interval}
      </li>

    );
  });
  return (
    <div id="countdown" className="section-padding bg-img bg-fixed countdown">
      <div className="countdown-container">
        <div className="row">
          <div className="section-head col-md-12">
            <h4>Seremos una familia en</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>
              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownSection;
