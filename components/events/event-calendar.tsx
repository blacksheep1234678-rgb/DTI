"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Event {
  id: number
  date: string
  title: string
  time: string
}

interface EventCalendarProps {
  events: Event[]
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
}

export default function EventCalendar({ events, selectedDate, onDateSelect }: EventCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 10)) // November 2024

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return events.filter((e) => e.date === dateStr)
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const monthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">{monthName}</h2>
        <div className="flex gap-2">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-muted rounded-lg transition">
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNextMonth} className="p-2 hover:bg-muted rounded-lg transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-muted-foreground text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {emptyDays.map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        {days.map((day) => {
          const dayEvents = getEventsForDate(day)
          const isSelected =
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth.getMonth() &&
            selectedDate.getFullYear() === currentMonth.getFullYear()

          return (
            <button
              key={day}
              onClick={() => onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
              className={`aspect-square p-2 rounded-lg border transition flex flex-col items-start justify-start text-xs ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary"
                  : dayEvents.length > 0
                    ? "bg-secondary/10 border-secondary/30 hover:border-secondary"
                    : "bg-muted border-border hover:border-primary/50"
              }`}
            >
              <span className="font-semibold">{day}</span>
              {dayEvents.length > 0 && (
                <div className="mt-1 w-full">
                  <div className="w-1 h-1 bg-current rounded-full" />
                  {dayEvents.length > 1 && <span className="text-xs opacity-75">+{dayEvents.length - 1}</span>}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Selected Date Events */}
      {selectedDate && (
        <div className="mt-8 pt-8 border-t border-border">
          <h3 className="font-serif text-lg font-bold text-foreground mb-4">
            Events on {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </h3>
          <div className="space-y-3">
            {getEventsForDate(selectedDate.getDate()).length > 0 ? (
              getEventsForDate(selectedDate.getDate()).map((event) => (
                <div key={event.id} className="p-3 bg-muted rounded-lg">
                  <p className="font-semibold text-foreground">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No events on this date.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
