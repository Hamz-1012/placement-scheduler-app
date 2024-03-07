"use client";
import { useSession } from "@supabase/auth-helpers-react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const AddEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const session = useSession();

  const createCalendarEvent = async () => {
    const event = {
      summary: eventTitle,
      description: eventDescription,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: "Asia/Kolkata",
      },
    };
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.provider_token,
        },
        body: JSON.stringify(event),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.status === "confirmed") {
          alert("Event added successfully");
          setStartDate(new Date());
          setEndDate(new Date());
          setEventTitle("");
          setEventDescription("");
        } else alert("Error adding event");
      });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="pt-12">Start</p>
      <DateTimePicker
        onChange={setStartDate}
        value={startDate}
      />
      <p>End</p>
      <DateTimePicker
        onChange={setEndDate}
        value={endDate}
      />
      <p>Title</p>
      <input
        type="text"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
        className="input input-bordered input-sm w-full max-w-xs"
      />
      <p>Description</p>
      <textarea
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        className="textarea textarea-bordered textarea-sm w-full max-w-xs"
      />
      <button
        onClick={() => {
          createCalendarEvent();
        }}
        className="btn btn-primary mt-4">
        Add Event
      </button>
    </div>
  );
};

export default AddEvent;
