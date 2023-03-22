import PropTypes from 'prop-types';

import css from 'components/Profile/Profile.module.css'

import Description from 'components/Description/Description';
import StatsList from 'components/StatsList/StatsList';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <>
      <div className={css.profile}>
        <Description
          avatar={avatar}
          username={username}
          tag={tag}
          location={location}
        />
        <StatsList
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </div>
    </>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
