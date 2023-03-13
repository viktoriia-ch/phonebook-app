import styles from './profile.module.css';

import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';

const Profile = () => {
  const { name, email } = useSelector(getUser);
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{name}</p>
          <p className={styles.email}>{email}</p>
          <p className={styles.text}>
            Total saved contacts: {filteredContacts.length}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };
