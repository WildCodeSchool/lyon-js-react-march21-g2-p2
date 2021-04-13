import './card.css';

export default function Card({ title, year }) {
  return (
    <div className="card">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/e/ea/Raya_and_the_Last_Dragon.png"
        alt="cover"
        className="cover"
      />
      <h4 className="title">{title}</h4>
      <h5 className="year">{year}</h5>
    </div>
  );
}
