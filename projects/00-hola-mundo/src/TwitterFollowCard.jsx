export function TwitterFollowCard({ userName, name, ifFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tv-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="el avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>

        <aside>
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </header>
    </article>
  );
}
