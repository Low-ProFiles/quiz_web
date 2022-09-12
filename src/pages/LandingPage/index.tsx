import { useLocation, useNavigate } from 'react-router-dom';
import { Character } from 'assets/svgs';
import Button from 'components/Button';
import styles from './landingPage.module.scss';

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const MovePage = () => {
    console.log(location.pathname);
    if (location.pathname === '/') {
      console.log('엥');
      navigate('/quiz');
    }
  };
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingLogo}>
        <Character />
      </div>
      <span className={styles.landingText}>혹시 영화 좋아하시나요?</span>
      <div className={styles.landingButton}>
        <Button size="large" onClick={MovePage}>
          퀴즈 풀기
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
