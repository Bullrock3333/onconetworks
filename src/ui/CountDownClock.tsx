"use client";
import React from 'react';
import { useTimer } from 'react-timer-hook';

const CountdownClock = () => {
  // Set the target date to 10th January 2025, 12:00 AM
  const targetDate = new Date('2025-02-10T21:00:03');

  // Destructure the useTimer hook with the target expiration timestamp
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ 
    expiryTimestamp: targetDate, 
    onExpire: () => console.warn('Timer expired'),
    autoStart: true
  });

  return (
    <>
      <div className="time-count day">
        <span>{days}</span> days
      </div>
      <div className="time-count hour">
        <span>{hours}</span> hours
      </div>
      <div className="time-count min">
        <span>{minutes}</span> mins
      </div>
      <div className="time-count sec">
        <span>{seconds}</span> secs
      </div>
    </>
  );
};

export default CountdownClock;