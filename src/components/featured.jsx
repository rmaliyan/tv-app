export function Featured({ movie }) {
    
  const durationHours = Math.floor(movie.Duration / 60 / 60);
  const durationMinutes = Math.floor(movie.Duration / 60) % 60;

  return (
    <div className="h-full bg-black text-white">
      <div>
        <div>{movie.Category}</div>
        <div>
          <img src={movie.TitleImage} />
        </div>
        <div className="flex">
          <div>{movie.ReleaseYear}</div>
          <div>{movie.MpaRating}</div>
          <div>
            {durationHours}h {durationMinutes}m
          </div>
        </div>
        <div>{movie.Description}</div>
      </div>
    </div>
  );
}
