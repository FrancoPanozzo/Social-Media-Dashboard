import React from 'react';
import OverviewCard from './OverviewCard';

export default function DailyOverview() {
  return (
    <section className="dailyOverview">
      <h2>Overview - Today</h2>
      <div className="cardsList">
        <OverviewCard
          title="page views"
          value={87}
          dailyDeltaPercent={3}
          socialMedia="facebook"
        />
        <OverviewCard
          title="likes"
          value={52}
          dailyDeltaPercent={-2}
          socialMedia="facebook"
        />
        <OverviewCard
          title="likes"
          value={5462}
          dailyDeltaPercent={2257}
          socialMedia="instagram"
        />
        <OverviewCard
          title="profile views"
          value={52000}
          dailyDeltaPercent={1375}
          socialMedia="instagram"
        />
        <OverviewCard
          title="retweets"
          value={117}
          dailyDeltaPercent={303}
          socialMedia="twitter"
        />
        <OverviewCard
          title="likes"
          value={507}
          dailyDeltaPercent={553}
          socialMedia="twitter"
        />
        <OverviewCard
          title="likes"
          value={107}
          dailyDeltaPercent={-19}
          socialMedia="youtube"
        />
        <OverviewCard
          title="total views"
          value={1407}
          dailyDeltaPercent={-12}
          socialMedia="youtube"
        />
      </div>
    </section>
  );
}
