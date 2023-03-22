import PropTypes from 'prop-types';

import css from 'components/Description/Descriprion.module.css';

const Description = ({ avatar,
              username,
              tag,
              location}) => {
    return (
        <div className={css.description}>
            <img src={avatar} alt="User avatar" width='250'
                className="avatar" />
        <p className={css.name}> {username}</p>
        <p className={css.tag}>@ {tag}</p>
        <p className={css.location}> {location}</p>
      </div>
    )
}

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};


export default Description;