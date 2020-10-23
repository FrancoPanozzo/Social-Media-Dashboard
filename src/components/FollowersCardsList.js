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
        followersDailyDelta={-12}
      />
      <FollowersCard
        socialMedia="twitter"
        user="@franks"
        userLink="twitter.com"
        followers="1002"
        followersDailyDelta={122}
      />
      <FollowersCard
        socialMedia="instagram"
        user="@franks"
        userLink="instagram.com"
        followers="2311"
        followersDailyDelta={-8}
      />
      <FollowersCard
        socialMedia="youtube"
        user="Frank"
        userLink="twitter.com"
        followers="8123"
        followersDailyDelta={19}
      />
    </section>
  );
}
