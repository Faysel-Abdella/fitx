import { MapPinIcon } from "@heroicons/react/24/outline"
import { EventBadge } from "./event-badge"

interface EventCardProps {
  date: string
  daysLeft: number
  title: string
  subtitle: string
  location: string
  details: {
    competitionId: string
    registrationTime: string
    registrationNote: string
    measurementNote: string
  }
}

export function EventCard({ date, daysLeft, title, subtitle, location, details }: EventCardProps) {
  return (
    <div className="max-w-2xl bg-white rounded-lg p-6 space-y-3">
      <div className="flex items-start justify-between">
        <div className="text-lg">{date}</div>
        <EventBadge daysLeft={daysLeft} />
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-lg text-gray-600">{subtitle}</h2>
      </div>

      <div className="flex items-center gap-1 text-gray-700">
        <MapPinIcon className="w-5 h-5 " />
        <span>{location}</span>
      </div>

      <div className="space-y-3 text-gray-600">
        <p>{details.competitionId}</p>
        <p>{details.registrationTime}</p>
        <p className="whitespace-pre-line">{details.registrationNote}</p>
        <p className="whitespace-pre-line">{details.measurementNote}</p>
      </div>
    </div>
  )
}

