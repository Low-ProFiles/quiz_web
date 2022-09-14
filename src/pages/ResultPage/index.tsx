import Button from 'components/Button';
import ResultItem from 'components/ResultItem';
import styles from './resultPage.module.scss';
import { useSelector } from 'react-redux';

import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const ResultPage = () => {
  const score = useSelector((state: { score: number }) => state);
  const time = useSelector((state: { time: number }) => state);
  const result = Math.floor((Date.now() - time.time) / 1000);

  const MovePage = () => {
    window.location.replace('/');
  };

  return (
    <>
      <div className={styles.resultMain}>
        <ResultItem>
          <HourglassBottomIcon />
          <div>
            <p>소요시간</p>
            <p>{result >= 60 ? `${Math.floor(result / 60)}분${result%60}초` : `${result}초`}</p>
          </div>
        </ResultItem>
        <ResultItem>
          <CheckIcon />
          <div>
            <p>맞은개수</p>
            <p>{score.score}</p>
          </div>
        </ResultItem>
        <ResultItem>
          <CloseIcon />
          <div>
            <p>틀린개수</p>
            <p>{`${10 - score.score}개`}</p>
          </div>
        </ResultItem>
      </div>
      <div className={styles.resultButton}>
        <Button size="large" onClick={MovePage}>
          재도전!
        </Button>
      </div>
    </>
  );
};

export default ResultPage;
