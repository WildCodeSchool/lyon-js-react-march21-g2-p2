import './HomePage.css';
import Card from './card';

const movieInfos = {
  title: 'Raya',
  year: 2018,
};

export default function HomePage() {
  return (
    <>
  <div>Welcome Home</div>
  <Card movie={movieInfos}/>
  </>
  )
};
