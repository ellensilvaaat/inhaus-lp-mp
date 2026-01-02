import React, { useState } from "react";
import "./WeeklyCalendar.css";

export default function WeeklyCalendar({ selectedDate, onSelect }) {
  const today = new Date();

  // Semana offset (0 = semana atual, 1 = próxima semana...)
  const [weekOffset, setWeekOffset] = useState(0);

  // Calcula a segunda-feira da semana atual + offset
  function getMondayOfWeek(offset) {
    const now = new Date();
    const day = now.getDay();

    // Segunda-feira da semana atual
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((day + 6) % 7));

    // Aplica o offset
    monday.setDate(monday.getDate() + offset * 7);

    return monday;
  }

  const monday = getMondayOfWeek(weekOffset);

  // Gera os 7 dias da semana (segunda → domingo)
  const week = [...Array(7)].map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });

  function isPast(date) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return date < now;
  }

  // Limita navegação para não ir para semanas anteriores
  function canGoPrev() {
    return weekOffset > 0;
  }

  return (
    <div className="week-calendar-wrapper">

      {/* HEADER COM SETAS */}
      <div className="week-header">
        <button
          className={`arrow-btn ${!canGoPrev() ? "disabled" : ""}`}
          onClick={() => canGoPrev() && setWeekOffset(weekOffset - 1)}
        >
          ←
        </button>

        <div className="week-label">
          {week[0].toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "2-digit",
          })}
          {" — "}
          {week[6].toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "2-digit",
          })}
        </div>

        <button
          className="arrow-btn"
          onClick={() => setWeekOffset(weekOffset + 1)}
        >
          →
        </button>
      </div>

      {/* DIAS DA SEMANA */}
      <div className="week-calendar">
        {week.map((date, idx) => {
          const disabled = isPast(date);
          const isActive =
            selectedDate?.toDateString() === date.toDateString();

          return (
            <div
              key={idx}
              className={`day-box ${disabled ? "disabled" : ""} ${
                isActive ? "active" : ""
              }`}
              onClick={() => !disabled && onSelect(date)}
            >
              <span className="day-name">
                {date.toLocaleDateString("en-US", { weekday: "short" })}
              </span>

              <span className="day-number">
                {date.getDate()}/{String(date.getMonth() + 1).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
