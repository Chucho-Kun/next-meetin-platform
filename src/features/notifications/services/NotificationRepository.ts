import { db } from "@/src/db";
import { InsertNotifications, SelectNotifications } from "../types/notification.types";
import { notifications } from "@/src/db/schema";

export interface INotificationRepository {
    create(data: InsertNotifications): Promise<SelectNotifications>
}

class NotificationRepository implements INotificationRepository {
    async create(data: InsertNotifications): Promise<SelectNotifications> {
        const [result] = await db.insert(notifications)
                               .values(data)
                               .returning()
        return result
    }
}

export const notificationRepository = new NotificationRepository();