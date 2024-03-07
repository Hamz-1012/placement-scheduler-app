"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Link from "next/link";
import { useState } from "react";

interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

const Schedule = () => {
  const [events, setEvents] = useState([
    {
      title: "Meeting",
      id: 1,
    },
    {
      title: "Meeting",
      id: 2,
    },
    {
      title: "Meeting",
      id: 3,
    },
    {
      title: "Meeting",
      id: 4,
    },
    {
      title: "Meeting",
      id: 5,
    },
    {
      title: "Meeting",
      id: 6,
    },
    {
      title: "Meeting",
      id: 7,
    },
    {
      title: "Meeting",
      id: 8,
    },
    {
      title: "Meeting",
      id: 9,
    },
    {
      title: "Meeting",
      id: 10,
    },
    {
      title: "Meeting",
      id: 11,
    },
    {
      title: "Meeting",
      id: 12,
    },
    {
      title: "Meeting",
      id: 13,
    },
    {
      title: "Meeting",
      id: 14,
    },
    {
      title: "Meeting",
      id: 15,
    },
    {
      title: "Meeting",
      id: 16,
    },
    {
      title: "Meeting",
      id: 17,
    },
    {
      title: "Meeting",
      id: 18,
    },
    {
      title: "Meeting",
      id: 19,
    },
    {
      title: "Meeting",
      id: 20,
    },
  ]);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    start: "",
    allDay: true,
    id: 0,
  });
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-10">
        <div className="col-span-8">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={allEvents}
            nowIndicator={true}
            editable={true}
            droppable={true}
            selectable={true}
            selectMirror={true}
            // dateClick={{}}
            // drop={{}}
            // eventClick={}
          />
          <div className="draggable-el"></div>
          <Link
            className="btn btn-link"
            href="/schedule/add-event">
            Add a event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
