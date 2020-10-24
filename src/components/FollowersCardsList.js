import React from 'react';
import FollowersCard from './FollowersCard';

export default function FollowersCardsList() {
  return (
    <section className="followersCardsList">
      <FollowersCard
        socialMedia="facebook"
        user="@franks"
        userLink="facebook.com"
        followers="1987"
        followersDailyDelta={12}
      />
      <FollowersCard
        socialMedia="twitter"
        user="@franks"
        userLink="twitter.com"
        followers="1044"
        followersDailyDelta={99}
      />
      <FollowersCard
        socialMedia="instagram"
        user="@franks"
        userLink="instagram.com"
        followers={11000}
        followersDailyDelta={1099}
      />
      <FollowersCard
        socialMedia="youtube"
        user="Frank"
        userLink="twitter.com"
        followers="8239"
        followersDailyDelta={-144}
      />
    </section>
  );
}
