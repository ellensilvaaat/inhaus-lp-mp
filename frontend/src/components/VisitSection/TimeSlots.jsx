import React from "react";
import "./TimeSlots.css";

export default function TimeSlots({ date, selectedTime, onSelect, bookedTimes }) {
  
  function getTimeSlots() {
    const day = date.getDay();
    let start, end;

    if (day === 0) {      
      start = 10;
      end = 15.5;
    } else if (day === 6) { 
      start = 9;
      end = 16;
    } else {               
      start = 9;
      end = 16.5;
    }

    const slots = [];
    for (let h = start; h <= end; h += 0.5) {
      const hours = Math.floor(h);
      const minutes = h % 1 === 0 ? "00" : "30";
      slots.push(`${hours}:${minutes}`);
    }
    return slots;
  }

  const allSlots = getTimeSlots();
  const availableSlots = allSlots.filter(
    (slot) => !bookedTimes.includes(slot)
  );

  return (
    <div className="timeslots-container">
      <h4>Select a time:</h4>

      <div className="timeslots-grid">
        {availableSlots.map((time) => (
          <div
            key={time}
            className={`slot ${selectedTime === time ? "active" : ""}`}
            onClick={() => onSelect(time)}
          >
            {time}
          </div>
        ))}

        {availableSlots.length === 0 && (
          <p className="no-slots">No times available for this day.</p>
        )}
      </div>
    </div>
  );
}

