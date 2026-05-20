import { formatCreatedDate } from "@/src/shared/utils/date"
import { SelectNotifications } from "../types/notification.types"

type Props = {
    notifications: SelectNotifications[]
}

export default function NotificationsList({ notifications }: Props) {
  return (
    <div className="space-y-4 mt-10">
        {notifications.length ? (
            notifications.map(notification => (
                <div key={notification.id} className="p-4 rounded-lg shadow-xs shadow-gray-300">
                    <p>
                        {notification.actorName} - {notification.message} {''}
                        <span className="font-bold">{notification.target}</span>
                    </p> 
                    <p className="text-sm text-gray-600">
                        { formatCreatedDate( notification.createAt )}
                    </p>
                </div>
            ))
        ) : (
            <p className="text-center mt-10 text-lg text-gray-600">
                No hay notificaciones
            </p>
        )}
    </div>
  )
}
