import { requireAuth } from "@/src/lib/auth-server"
import { notificationService } from "@/src/features/notifications/services/NotificationService"

export async function GET() {

    const {session} = await requireAuth()
    if(!session) return new Response(JSON.stringify(1))
    const notifications = await notificationService.getUnreadCount(session.user.id)

    return new Response(JSON.stringify(notifications), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })
}

/// url de consulta  api/user/notifications