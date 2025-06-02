import { useState } from 'react';

export function CreateMovieForm() {
  const [title, setTitle] = useState('');
  const [imdbLink, setImdbLink] = useState('');
    const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
const ratingNumber = Number(rating);
if (isNaN(ratingNumber) || ratingNumber >= 5) {
    setError('Rating must be less than 5');
    return;
}
   setError('');
    alert('Movie submitted!\n' + JSON.stringify({
      title,
      imdbLink,
      rating: ratingNumber,
      summary,
    }, null, 2));
  }

return (
    <div className="form-container">
      <h1>Create a new movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label>IMDB Link</label>
          <input
            type="url"
            value={imdbLink}
            onChange={(e) => setImdbLink(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label>Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="form-field">
          <label>Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={4}
          />
        </div>

        <button type="submit" className="submit-button">Create</button>
      </form>
    </div>
  );
}