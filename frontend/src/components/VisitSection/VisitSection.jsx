import React, { useState, useEffect } from "react";
import WeeklyCalendar from "./WeeklyCalendar";
import TimeSlots from "./TimeSlots";
import "./VisitSection.css";

export default function VisitSection() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);

  const [fullName, setFullName] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const AU_PHONE_REGEX = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // =============================
  // VALIDATIONS
  // =============================
  function validateEmail(value) {
    setEmailError(EMAIL_REGEX.test(value) ? "" : "Please enter a valid email");
  }

  function validateMobile(value) {
    if (!value) return setMobileError("");
    setMobileError(
      AU_PHONE_REGEX.test(value)
        ? ""
        : "Please enter a valid Australian phone number"
    );
  }

  // =============================
  // FETCH BOOKED TIMES
  // =============================
  async function fetchBookedTimes(dateString) {
    try {
      const res = await fetch(
        `${API_URL}/api/visits/booked?date=${dateString}`
      );
      const json = await res.json();
      setBookedTimes(json.bookedTimes || []);
    } catch (err) {
      console.error("Error loading booked times:", err);
    }
  }

  useEffect(() => {
    if (selectedDate) {
      fetchBookedTimes(selectedDate.toISOString().split("T")[0]);
    }
  }, [selectedDate]);

  function handleServiceChange(e) {
    setService(e.target.value);
    setShowCalendar(true);
  }

  // =============================
  // FORM SUBMIT
  // =============================
  async function handleSubmit(e) {
    e.preventDefault();

    if (emailError || mobileError) return alert("Fix errors first");
    if (!fullName || !email || !service) return alert("Fill required fields");
    if (!selectedDate || !selectedTime)
      return alert("Select date and time");

    const visit_day = selectedDate.toISOString().split("T")[0];

    try {
      const res = await fetch(`${API_URL}/api/visits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          mobile,
          email,
          service,
          visit_day,
          visit_time: selectedTime,
        }),
      });

      if (!res.ok) throw new Error("Failed to save");

      window.location.href = "/thank-you";
    } catch (err) {
      console.error(err);
      alert("Failed request");
    }
  }

  return (
    <section className="visit-section">
      <div className="visit-container">
        <h2 className="visit-title">Prepare for your visit</h2>

        <form className="visit-form" onSubmit={handleSubmit}>
          {/* FULL NAME */}
          <div className="field">
            <label>Full Name *</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="field">
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className={emailError ? "invalid" : ""}
              required
            />
            {emailError && <p className="error-msg">{emailError}</p>}
          </div>

          {/* MOBILE */}
          <div className="field">
            <label>Mobile</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                validateMobile(e.target.value);
              }}
              className={mobileError ? "invalid" : ""}
            />
            {mobileError && <p className="error-msg">{mobileError}</p>}
          </div>

          {/* SERVICE */}
          <div className="field">
            <label>Interested Service *</label>
            <select value={service} onChange={handleServiceChange} required>
              <option value="">Select</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bathroom">Bathroom</option>
              <option value="Full Home">Full Home</option>
              <option value="Flooring">Flooring</option>
            </select>
          </div>

          {/* CALENDAR + TIME SLOTS */}
          {showCalendar && (
            <>
              <WeeklyCalendar
                selectedDate={selectedDate}
                onSelect={setSelectedDate}
              />
              {selectedDate && (
                <TimeSlots
                  date={selectedDate}
                  selectedTime={selectedTime}
                  bookedTimes={bookedTimes}
                  onSelect={setSelectedTime}
                />
              )}
            </>
          )}

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}




