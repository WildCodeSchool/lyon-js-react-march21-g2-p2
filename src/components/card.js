import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      <img src="" alt="cover" className="cover" />
      <h4 className="title">{props.popularMovies.title}</h4>
    </div>
  );
}
