import React from 'react';
import formatNumber from '../utils/formatNumber';

export default function FollowersCard({
  socialMedia,
  user,
  userLink,
  followers,
  followersDailyDelta,
}) {
  const deltaBoolean = followersDailyDelta > 0;

  const arrowImg = deltaBoolean
    ? './images/icon-up.svg'
    : './images/icon-down.svg';

  const socialMediaImg = `./images/icon-${socialMedia}.svg`;

  return (
    <article className={`followersCard ${socialMedia}`}>
      <div className="topBar"></div>
      <div className="followersCard__Body">
        <a className="userInfo" href={userLink} target="_blank">
          <img src={socialMediaImg} alt={socialMedia} />
          <span>{user}</span>
        </a>

        <span className="followersNumber">{formatNumber(followers)}</span>

        <span className="followersText">
          {socialMedia === 'youtube' ? 'subscribers' : 'followers'}
        </span>

        <div
          className={`followersDelta ${deltaBoolean ? 'positive' : 'negative'}`}
        >
          <img src={arrowImg} alt="Arrow icon" />
          <span>{formatNumber(Math.abs(followersDailyDelta))} today</span>
        </div>
      </div>
    </article>
  );
}
