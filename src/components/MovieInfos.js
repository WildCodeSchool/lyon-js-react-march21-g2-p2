import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    margin: 0,
    width: 300,
    height: 500,
    flexDirection: 'row',
    justify: 'flex-start',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    margin: 0,
  },
  synopsisStyle: {
    display: 'block',
  },
  picture: {
    display: 'flex',
    width: '100px',
    height: '100px',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    flexDirection: 'row',
  },
  contentPicture: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));
const imgUrl = 'https://image.tmdb.org/t/p/w500';

export default function MovieInfos({
  directors = [],
  poster,
  title,
  date,
  synopsis,
  actors = [],
}) {
  // Style
  const {
    card,
    cardStyle,
    content,
    synopsisStyle,
    picture,
    contentPicture,
  } = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  return (
    <>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
          <Card className={card}>
            <CardMedia
              className={cardStyle}
              classes={mediaStyles}
              image={imgUrl + poster}
            />
          </Card>
        </Grid>
        <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
          <div className={content}>
            <h2>Title :</h2>
            <p>{title}</p>
            <h2>Date :</h2>
            <p>{date}</p>
            <h2>Director :</h2>
            <div>
              {directors.map((director) => (
                <p key={director.id}>{director.name}</p>
              ))}
            </div>
            <div className={synopsisStyle}>
              <h2>Synopsis :</h2>
              <p>{synopsis}</p>
            </div>
            <h2>Actors :</h2>
            <div className={contentPicture}>
              {actors.map(({ name, character, profile_path, id }) => (
                <p key={id}>
                  <img
                    className={picture}
                    src={profile_path ? imgUrl + profile_path : null}
                    alt={name}
                  />
                  <strong>{name}</strong> - {character}
                </p>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
