import PropTypes from "prop-types";
import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIfFollowing }) {
  const [ifFollowing, setIfFollowing] = useState(initialIfFollowing);

  const text = ifFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = ifFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIfFollowing(!ifFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tv-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="el avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </header>
    </article>
  );
}
TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ifFollowing: PropTypes.bool,
  children: PropTypes.string.isRequired,
  initialIfFollowing: PropTypes.bool,
};
