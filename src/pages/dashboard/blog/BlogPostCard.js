import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
/* import toDate from "date-fns/toDate";
import format from "date-fns/format"; */
// material
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';

//
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const CardMediaStyle = {
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
  height:'100%'
};

const TitleStyle = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  margin: '0px',
  textDecoration: 'none',
  display: '-webkit-box',
  fontWeight: 700,
  lineHeight: 1.5,
  fontSize: '1.125rem',
  /* font-family: "Public Sans", sans-serif; */
  height: '60px',
  color: 'rgb(255, 255, 255)',
};

const AvatarStyle = {
  zIndex: 9,
  width: 24,
  height: 24,
  position: 'absolute',
  left: 24,
  bottom: -16,
};

const InfoStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  webkitBoxPack: 'end',
  justifyContent: 'flex-end',
  marginTop: '24px',
  color: 'rgb(145, 158, 171)',
};

const CoverImgStyle = {
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
};

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  const { cover, title, view, comment, share, author } = post;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;
  const POST_INFO = [
    { number: comment, icon: 'eva:message-circle-fill' },
    { number: view, icon: 'eva:eye-fill' },
    { number: share, icon: 'eva:share-fill' },
  ];

  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative', borderRadius:'16px', height:'100%' }}>
        <Box className="problem" style={CardMediaStyle}
          sx={[
            ((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: 'rgba(22, 28, 36, 0.72)',
              },
            }),
            (latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          ]}
        >
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          />
          <Avatar
            style={AvatarStyle}
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />

          <img style={CoverImgStyle} alt={title} src={cover} />
        </Box>

        <CardContent
          sx={{
            /* pt: 4, */
            padding: '32px 24px 24px',
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'rgb(145, 158, 171)', display: 'block' }}>
            {/* {format(toDate(createdAt, "do MMM, yyyy"))} */}03 April 2022
          </Typography>

          <Link
            style={TitleStyle}
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'white',
              }),
            }}
          >
            {title}
          </Link>

          <div style={InfoStyle}>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: 'grey.500',
                  }),
                }}
              >
                {/* <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} /> */}
                <Typography variant="caption">{(info.number)}</Typography>
              </Box>
            ))}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
