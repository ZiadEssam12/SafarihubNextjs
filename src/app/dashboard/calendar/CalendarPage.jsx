"use client";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventModal from "./CalendarEventsModal";
import { IcBaselinePlus, SolarCalendarLinear } from "@/icons/Icons";

function generateRandomEvents() {
  const randomEvents = [];
  const titles = [
    "Meeting",
    "Workshop",
    "Birthday Party",
    "Conference",
    "Webinar",
    "Networking Event",
    "Team Lunch",
    "Project Deadline",
    "Holiday",
    "Training Session",
  ];

  for (let i = 0; i < 10; i++) {
    // Generate random offset within ±7 days from today
    const offset = Math.floor(Math.random() * 15) - 7;
    const start = new Date();
    start.setDate(start.getDate() + offset); // Adjust date

    const end = new Date(start);
    end.setHours(start.getHours() + Math.floor(Math.random() * 3 + 1)); // Random duration of 1-3 hours

    randomEvents.push({
      id: i + 1,
      title: titles[i % titles.length], // Rotate titles
      start,
      end,
    });
  }

  return randomEvents;
}

export default function CalenderPage() {
  const [events, setEvents] = useState(generateRandomEvents());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  // Handle date selection for adding new events
  const handleDateSelect = (selectInfo) => {
    console.log("selected", selectInfo);
    setModalMode("add");
    setSelectedEvent({
      id: crypto.randomUUID(),
      title: "",
      description: "", // Initialize description
      start: selectInfo.start,
      end: selectInfo.end,
      backgroundColor: "#3788d8", // Optional default color
    });
    setIsModalOpen(true);
  };

  // Handle event click for editing
  const handleEventClick = (clickInfo) => {
    const eventObject = clickInfo.event.toPlainObject({
      includeEnd: true,
    });

    setModalMode("edit");
    setSelectedEvent({
      ...eventObject,
      description: clickInfo.event.extendedProps.description, // Include custom field
    });
    setIsModalOpen(true);
  };

  // Save event (either add or edit)
  const handleSaveEvent = (eventData) => {
    if (modalMode === "add") {
      setEvents([...events, eventData]);
    } else {
      setEvents(
        events.map((event) =>
          event.id === eventData.id ? { ...event, ...eventData } : event
        )
      );
    }
    setIsModalOpen(false);
  };

  // Delete selected event
  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
      setIsModalOpen(false);
    }
  };

  return (
    <div className="h-full" dir="rtl">
      {/* Header */}
      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <SolarCalendarLinear className="h-8 w-8 text-blue-500 ml-3" />
              <h1 className="text-3xl font-bold text-gray-900">تقويم المهام</h1>
            </div>
            <button
              onClick={() => {
                setModalMode("add");
                setSelectedEvent({
                  id: crypto.randomUUID(),
                  title: "",
                  start: new Date(),
                  end: new Date(),
                });
                setIsModalOpen(true);
              }}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <IcBaselinePlus className="h-5 w-5 ml-2" />
              إضافة حدث
            </button>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <div className="p-6">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              right: "prev,next today",
              center: "title",
              left: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height={"80vh"}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={events}
            select={handleDateSelect}
            eventClick={handleEventClick}
            locale="ar"
            direction="rtl"
            validRange={{
              start: new Date(), // Disable all days before today
            }}
            buttonText={{
              today: "اليوم",
              month: "شهر",
              week: "أسبوع",
              day: "يوم",
            }}
            eventContent={(eventInfo) => (
              <div className="p-1 text-right">
                <div className="font-semibold">{eventInfo.event.title}</div>
                {eventInfo.view.type !== "dayGridMonth" && (
                  <div className="text-sm">
                    {eventInfo.event.extendedProps.description}
                  </div>
                )}
              </div>
            )}
          />
        </div>
      </main>

      {/* Event Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={selectedEvent}
        onSave={handleSaveEvent}
        onDelete={modalMode === "edit" ? handleDeleteEvent : undefined}
        mode={modalMode}
      />
    </div>
  );
}
