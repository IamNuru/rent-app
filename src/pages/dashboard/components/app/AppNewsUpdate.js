// @mui
import PropTypes from "prop-types";
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
} from "@mui/material";
import { formatDistance } from "date-fns";
import { titleCase } from "change-case-all";
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppNewsUpdate({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
        {list.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </Stack>
      <Divider />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button size="small" color="inherit">
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    author: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function NewsItem({ news }) {
  const { id, image, title, slug, author, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link component={RouterLink} to={`/post/${id}/${slug}`} color="inherit" variant="subtitle2" underline="hover" wrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {'Author: ' + titleCase(author)}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{ pr: 3, flexShrink: 0, color: "text.secondary" }}
      >
        {formatDistance(new Date(postedAt), new Date(), {
          addSuffix: true,
        })}
      </Typography>
    </Stack>
  );
}
