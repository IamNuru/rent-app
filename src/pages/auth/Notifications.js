import { Avatar, Box, Container, Divider, ListItemButton, IconButton, List, ListItemAvatar, ListItemText, ListSubheader, Tooltip, Typography, CircularProgress } from "@mui/material";
import { formatDistance } from "date-fns";
import Page from "../../components/Page";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { useGetNotificationsQuery, useMarkAllNotificationAsReadMutation, useMarkNotificationAsReadMutation } from "../../features/api/userApiService.js"



const Notifications = () => {
    const { refetch, data } = useGetNotificationsQuery();
    const [markAllNotificationAsRead, {isLoading}] = useMarkAllNotificationAsReadMutation()

    const handleMarkAllAsRead = async () => {
        await markAllNotificationAsRead()
        refetch()
    };

    return (
        <Page type="Notifications">
            <Container style={{ maxWidth: "45rem", mx: 'auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtype1">Notifications</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            You have {data?.totalUnRead} unread notification
                        </Typography>
                    </Box>

                    {data?.totalUnRead > 0 && (
                        <Tooltip type=" Mark all as read">
                            <IconButton color="primary" onClick={handleMarkAllAsRead}>
                                {
                                    isLoading ? <CircularProgress size={20} />
                                    : <DoneAllIcon sx={{ width: 20, height: 20 }} />
                                }
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box>
                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                                New
                            </ListSubheader>
                        }
                    >
                        {
                        data?.unReadNotifications?.length > 0 ? data?.unReadNotifications?.map((notification) => (
                            <NotificationItem key={notification.id} refetch={refetch} notification={notification} />
                        ))
                        :
                        <Typography variant="subtype1" sx={{ ml:4, color:'#c19505'}}>You have No new Notification</Typography>
                        }
                    </List>

                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                                Before that
                            </ListSubheader>
                        }
                    >
                        {
                        data?.readNotifications?.length > 0 ? data?.readNotifications?.map((notification) => (
                            <NotificationItem key={notification.id} refetch={refetch} notification={notification} />
                        ))
                        :
                        <Typography variant="subtype1" sx={{ ml:4, color:'#c19505'}}>You have No Notifications</Typography>
                        }
                    </List>
                </Box>
            </Container>
        </Page>
    )
}

function NotificationItem({ notification, refetch }) {
    const { type } = renderContent(notification);
    const [markNotificationAsRead] = useMarkNotificationAsReadMutation();

    const handleReadNotification = async (notification) => {
        if (notification.read === 1) {
            alert('red')
        } else {
            await markNotificationAsRead(notification.id)
            refetch()
        }
    }

    return (
        <ListItemButton
            onClick={() => handleReadNotification(notification)}
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(notification.read === 0 && {
                    bgcolor: 'action.selected',
                }),
            }}
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'background.neutral' }}></Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={type}
                secondary={
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled',
                        }}
                    >
                        <AccessAlarmsIcon sx={{ mr: 0.5, width: 16, height: 16 }} />
                        {formatDistance(new Date(notification.created_at), new Date())}
                    </Typography>
                }
            />
        </ListItemButton>
    );
}

function renderContent(notification) {
    const type = (
        <Typography variant="subtype2">
            {notification.type}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                {/* &nbsp; {noCase(notification.message)} */}
                &nbsp; {notification.message}
            </Typography>
        </Typography>
    );

    if (notification.type === 'order_placed') {
        return {
            avatar: <img alt={notification.type} src="/static/icons/ic_notification_package.svg" />,
            type,
        };
    }
    if (notification.type === 'order_shipped') {
        return {
            avatar: <img alt={notification.type} src="/static/icons/ic_notification_shipping.svg" />,
            type,
        };
    }
    if (notification.type === 'mail') {
        return {
            avatar: <img alt={notification.type} src="/static/icons/ic_notification_mail.svg" />,
            type,
        };
    }
    if (notification.type === 'chat_message') {
        return {
            avatar: <img alt={notification.type} src="/static/icons/ic_notification_chat.svg" />,
            type,
        };
    }
    return {
        avatar: notification.type ? <img alt={notification.type} src={notification.type} /> : null,
        type,
    };
}

export default Notifications;