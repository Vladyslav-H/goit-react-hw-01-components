import PropTypes from 'prop-types';

import css from 'components/StatsList/StatsList.module.css';

const StatsList = ({ followers, views, likes }) => {
    return (
       <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    
    )
}

StatsList.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}


export default StatsList;