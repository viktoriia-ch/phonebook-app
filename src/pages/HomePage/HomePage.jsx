import { useSelector } from 'react-redux';
import Profile from 'modules/Profile/Profile';
import InfoBlock from 'modules/InfoBlock/InfoBlock';

import { isLogin } from 'redux/auth/auth-selectors';

const HomePage = () => {
  const isUserLogin = useSelector(isLogin);

  return (
    <div>
      {!isUserLogin && <InfoBlock />}
      {isUserLogin && <Profile />}
    </div>
  );
};

export default HomePage;
