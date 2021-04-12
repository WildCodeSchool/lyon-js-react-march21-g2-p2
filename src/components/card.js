import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/e/ea/Raya_and_the_Last_Dragon.png"
        alt="cover"
        className="cover"
      />
      <h4 className="title">{props.movie.title}</h4>
      <h5 className="year">{props.movie.year}</h5>
    </div>
  );
}
