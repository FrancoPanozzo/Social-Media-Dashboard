import React from 'react';

export default function OverviewCard({
  title,
  value,
  socialMedia,
  dailyDeltaPercent,
}) {
  const deltaBoolean = dailyDeltaPercent > 0;

  const arrowImg = deltaBoolean
    ? './images/icon-up.svg'
    : './images/icon-down.svg';

  const socialMediaImg = `./images/icon-${socialMedia}.svg`;
  return (
    <article className="overviewCard">
      <div className="first-row">
        <span>{title}</span>
        <img src={socialMediaImg} alt={socialMedia} />
      </div>

      <div className="second-row">
        <span>{value}</span>
        <div
          className={`dailyDeltaPercent ${
            deltaBoolean ? 'positive' : 'negative'
          }`}
        >
          <img src={arrowImg} alt="Arrow icon" />
          <span>{Math.abs(dailyDeltaPercent)}%</span>
        </div>
      </div>
    </article>
  );
}
