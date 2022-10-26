import { faker } from "@faker-js/faker";
import { Avatar, Box, Container, Divider, ListItemButton, IconButton, List, ListItemAvatar, ListItemText, ListSubheader, Tooltip, Typography } from "@mui/material";
import { formatDistance, set, sub } from "date-fns";
import { useState } from "react";
import Page from "../../components/Page";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

const MESSAGES = [
    {
      id: faker.datatype.uuid(),
      title: 'Your order is placed',
      description: 'waiting for shipping',
      avatar: null,
      type: 'order_placed',
      createdAt: set(new Date(), { hours: 10, minutes: 30 }),
      isUnRead: true,
    },
    {
      id: faker.datatype.uuid(),
      title: faker.name.fullName(),
      description: 'answered to your comment on the Minimal',
      avatar: '/static/mock-images/avatars/avatar_2.jpg',
      type: 'friend_interactive',
      createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
      isUnRead: true,
    },
    {
      id: faker.datatype.uuid(),
      title: 'You have new message',
      description: '5 unread messages',
      avatar: null,
      type: 'chat_message',
      createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
      isUnRead: false,
    },
    {
      id: faker.datatype.uuid(),
      title: 'You have new mail',
      description: 'sent from Guido Padberg',
      avatar: null,
      type: 'mail',
      createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
      isUnRead: false,
    },
    {
      id: faker.datatype.uuid(),
      title: 'Delivery processing',
      description: 'Your order is being shipped',
      avatar: null,
      type: 'order_shipped',
      createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
      isUnRead: false,
    },
  ];

const Messages = () => {
    const [messages, setMessages] = useState(MESSAGES);

    const totalUnRead = messages.filter((item) => item.isUnRead === true).length;

    const handleMarkAllAsRead = () => {
        setMessages(
          messages.map((notification) => ({
            ...notification,
            isUnRead: false,
          }))
        );
      };

    return(
        <Page title="Messages">
            <Container style={{maxWidth:"45rem", mx:'auto'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Messages</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <DoneAllIcon sx={{width:20, height:20}} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                New
              </ListSubheader>
            }
          >
            {messages.slice(0, 2).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Before that
              </ListSubheader>
            }
          >
            {messages.slice(2, 5).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
        </Box>
            </Container>
        </Page>
    )
}

function NotificationItem({ notification }) {
    const { avatar, title } = renderContent(notification);
  
    return (
      <ListItemButton
        sx={{
          py: 1.5,
          px: 2.5,
          mt: '1px',
          ...(notification.isUnRead && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
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
              {formatDistance(new Date(notification.createdAt), new Date())}
            </Typography>
          }
        />
      </ListItemButton>
    );
  }

  function renderContent(notification) {
    const title = (
      <Typography variant="subtitle2">
        {notification.title}
        <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
          {/* &nbsp; {noCase(notification.description)} */}
          &nbsp; {notification.description}
        </Typography>
      </Typography>
    );
  
    if (notification.type === 'order_placed') {
      return {
        avatar: <img alt={notification.title} src="/static/icons/ic_notification_package.svg" />,
        title,
      };
    }
    if (notification.type === 'order_shipped') {
      return {
        avatar: <img alt={notification.title} src="/static/icons/ic_notification_shipping.svg" />,
        title,
      };
    }
    if (notification.type === 'mail') {
      return {
        avatar: <img alt={notification.title} src="/static/icons/ic_notification_mail.svg" />,
        title,
      };
    }
    if (notification.type === 'chat_message') {
      return {
        avatar: <img alt={notification.title} src="/static/icons/ic_notification_chat.svg" />,
        title,
      };
    }
    return {
      avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
      title,
    };
  }

export default Messages;