import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
/* import toDate from "date-fns/toDate";
import format from "date-fns/format"; */
// material
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, Stack, Button, CircularProgress } from '@mui/material';

//
import SvgIconStyle from '../../../components/SvgIconStyle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeletePostMutation } from '../../../features/api/postApiService';
import { format, toDate } from 'date-fns';

// ----------------------------------------------------------------------

const CardMediaStyle = {
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
  height: '100%'
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
  fontFamily: '"Public Sans", sans-serif',
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

export default function BlogPostCard({ post, index, refetch }) {
  const { id, cover, slug, title, user, created_at } = post;
  const [deletePost, { isLoading }] = useDeletePostMutation()
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;
  const noImage = '/static/no-post-image.jpg'

  const handleDelete = async () => {
    await deletePost(id);
    refetch()
  }

  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative', borderRadius: '16px', height: (!latestPostLarge && !latestPost) ? '26rem' : '100%' }}>
        <Box style={CardMediaStyle}
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
            {
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: 'rgba(22, 28, 36, 0.72)',
              }
            },
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
            alt={user?.first_name}
            src={user?.photo}
            sx={{
              /* ...((latestPostLarge || latestPost) && { */
              zIndex: 9,
              top: 24,
              left: 24,
              width: 40,
              height: 40,
              /* }), */
            }}
          />

          <img style={CoverImgStyle} alt={title} src={cover}
            onError={e => { e.target.src = noImage }} />
        </Box>

        <CardContent
          sx={{
            /* pt: 4, */
            //padding: '32px 24px 24px',
            bottom: 0,
            width: '100%',
            position: 'absolute',
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'rgb(145, 158, 171)', display: 'block' }}>
            {format(toDate(new Date(created_at)), "do MMM, yyyy")}
          </Typography>

          <Link
            style={TitleStyle}
            to={`/post/${id}/${slug}`}
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
          <Stack direction="row" alignItems="right" justifyContent="center" sx={{ mx: 1, mt: 8 }}>
            {
              isLoading ? (<CircularProgress />) : (
                <Button size='small' variant='contained' color="secondary" startIcon={<DeleteIcon />} onClick={handleDelete}>
                  Delete
                </Button>
              )
            }
            <Box sx={{ px: 2 }}></Box>
            <Button size='small' variant='contained' color="primary" startIcon={<EditIcon />} component={RouterLink} to={`/property/${id}/${slug}`}>
              Edit
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
