import React, { useState, useEffect } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showReservations, setShowReservations] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const storedReservations = localStorage.getItem("reservations");
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations));
    } else {
      setReservations([
        { date: "2024-08-02", time: "10:00", name: "Ion Popescu", phone: "0712345678" },
        { date: "2024-08-03", time: "11:00", name: "Maria Ionescu", phone: "0723456789" },
        { date: "2024-08-04", time: "12:00", name: "George Vasilescu", phone: "0734567890" },
        { date: "2024-08-05", time: "13:00", name: "Elena Georgescu", phone: "0745678901" },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        localStorage.removeItem("reservations");
        setReservations([]);
      }
    }, 60000); // Check every minute
    return () => clearInterval(intervalId);
  }, []);

  const isWeekend = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 5 || dayOfWeek === 6; // Saturday or Sunday
  };

  const isTimeAvailable = (date, time) => {
    const hour = parseInt(time.split(":")[0], 10);
    if (isWeekend(date)) {
      return hour >= 10 && hour <= 16; // Weekend hours (10:00 - 16:00)
    }
    return hour >= 9 && hour <= 18; // Weekday hours (09:00 - 18:00)
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when changing the date
  };

  const handleTimeClick = (time) => {
    if (!isReserved(selectedDate, time) && isTimeAvailable(selectedDate, time)) {
      setSelectedTime(time);
      if (selectedDate && time) {
        setShowPopup(true);
      }
      console.log(`Ai selectat data ${selectedDate} și ora ${time}`);
    }
  };

  const isReserved = (date, time) => {
    return reservations.some(
      (reservation) => reservation.date === date && reservation.time === time
    );
  };

  const generateCalendar = () => {
    const today = new Date(); // Data curentă
    const todayString = today.toISOString().split("T")[0]; // Formatul "YYYY-MM-DD"

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Numărul de zile din lună
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Prima zi din lună
    const startingDay = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1) % 7;

    let date = 1 - startingDay; // Prima zi de afișat în calendar
    const rows = [];

    for (let i = 0; i < 6; i++) { // Ajustat pentru a acoperi până la 6 săptămâni
        const cells = [];
        for (let j = 0; j < 7; j++) {
            const isDisabled = date <= 0 || date > daysInMonth;
            const formattedDate = isDisabled
                ? ""
                : `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;

            const dayClass = j === 6 ? "sunday" : j === 5 ? "saturday" : "";
            const isCurrentDate = formattedDate === todayString; // Verifică dacă data este astăzi

            cells.push(
                <td
                    key={`${i}-${j}`}
                    onClick={() => !isDisabled && handleDateClick(formattedDate)}
                    className={`${selectedDate === formattedDate ? "selected" : ""} ${
                        isReserved(formattedDate, selectedTime) ? "reserved" : ""
                    } ${isDisabled ? "disabled" : ""} ${dayClass} ${
                        isCurrentDate ? "current-date" : ""
                    }`}
                >
                    {date > 0 && date <= daysInMonth ? date : ""}
                </td>
            );

            date++;
        }
        rows.push(<tr key={i}>{cells}</tr>);
    }

    return rows;
};

  
  const generateTimeSlots = () => {
    const timeSlots = [];
    const startHour = 9;
    const endHour = 18;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const time = `${formattedHour}:${formattedMinute}`;

        if (isWeekend(selectedDate) && (hour < 10 || hour > 16)) {
          continue; // Skip time slots outside the weekend hours
        }

        timeSlots.push(
          <div
            key={time}
            onClick={() => handleTimeClick(time)}
            className={`time-slot ${
              selectedTime === time ? "selected-time" : ""
            } ${isReserved(selectedDate, time) ? "reserved-time" : ""}`}
          >
            {time}
          </div>
        );
      }
    }

    return timeSlots;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservations([...reservations, { date: selectedDate, time: selectedTime, name: clientName, phone: clientPhone }]);
    setShowPopup(false);
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setClientName("");
    setClientPhone("");
  };

  const handleViewReservationsClick = () => {
    setShowReservations(true);
  };

  const handleReservationsClose = () => {
    setShowReservations(false);
  };

  const getCurrentMonthName = () => {
    const date = new Date(currentYear, currentMonth);
    return date.toLocaleString("default", { month: "long" });
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getDateRange = () => {
    const today = new Date();
    const week = [];
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      week.push(nextDate.toISOString().split("T")[0]);
    }
    return week;
  };

  const filterReservations = () => {
    const week = getDateRange();
    return reservations.filter((reservation) => week.includes(reservation.date));
  };

  const groupReservationsByDate = () => {
    const filteredReservations = filterReservations();
    return filteredReservations.reduce((acc, reservation) => {
      if (!acc[reservation.date]) {
        acc[reservation.date] = [];
      }
      acc[reservation.date].push(reservation);
      return acc;
    }, {});
  };

  const renderGroupedReservations = () => {
    const groupedReservations = groupReservationsByDate();
    return Object.entries(groupedReservations).map(([date, reservations]) => (
      <tr key={date}>
        <td>{date}</td>
        <td>
          {reservations.map((reservation, index) => (
            <div key={index}>{reservation.time}</div>
          ))}
        </td>
        <td>
          {reservations.map((reservation, index) => (
            <div key={index}>{reservation.name}</div>
          ))}
        </td>
        <td>
          {reservations.map((reservation, index) => (
            <div key={index}>{reservation.phone}</div>
          ))}
        </td>
      </tr>
    ));
  };

  return (
    <div className="titlerezervation">
     <div className="header">
  <button className="back-arrow" onClick={() => window.history.back()}>&lt;</button>
  <h4>PROGRAMARE ONLINE</h4>
  <h4>Ne încadrăm în ora programată de tine și respectăm programul de tuns!</h4>
</div>
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <span>{getCurrentMonthName()} {currentYear}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar">
        <table>
          <thead>
            <tr>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th className="saturday">S</th>
              <th className="sunday">D</th>
            </tr>
          </thead>
          <tbody>{generateCalendar()}</tbody>
        </table>
        <hr className="custom-hr" />
        <div className="time-slots">
          <h3>Selectează ora:</h3>
          {generateTimeSlots()}
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popup-inner">
              <h2>Completează detaliile</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Nume:
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Telefon:
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                  />
                </label>
                <div className="popup-buttons">
                  <button type="submit" className="btn btn-primary">
                    <i className="fa fa-check"></i> Programează
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="btn btn-secondary"
                  >
                    <i className="fa fa-times"></i> Închide
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showConfirmation && (
          <div className="popup">
            <div className="popup-inner">
              <h2>Rezervare Confirmată!</h2>
              <p>Data: {selectedDate}</p>
              <p>Ora: {selectedTime}</p>
              <p>Nume: {clientName}</p>
              <p>Telefon: {clientPhone}</p>
              <button onClick={handleConfirmationClose} className="btn btn-secondary">
                <i className="fa fa-times"></i> Închide
              </button>
            </div>
          </div>
        )}

        <div className="button-container">
          <button className="view-reservations-button" onClick={handleViewReservationsClick}>
            <i className="fa fa-calendar"></i> Vezi Rezervările
          </button>
        </div>

        {showReservations && (
          <div className="popup">
            <div className="popup-inner">
              <h2>Rezervări Existente</h2>
              <table className="reservations-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Ore</th>
                    <th>Nume</th>
                    <th>Telefon</th>
                  </tr>
                </thead>
                <tbody>
                  {renderGroupedReservations().length === 0 ? (
                    <tr>
                      <td colSpan="4">Nu există rezervări.</td>
                    </tr>
                  ) : (
                    renderGroupedReservations()
                  )}
                </tbody>
              </table>
              <div className="popup-buttons">
                <button onClick={handleReservationsClose} className="btn btn-secondary">
                  <i className="fa fa-times"></i> Închide
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;

