import Button from 'components/Button';
import QuizItem from 'components/QuizItem';
import styles from './quizPage.module.scss';

const QuizPage = () => {
  return (
    <>
      <p className={styles.quizIndex}>1/10</p>
      <p className={styles.quizTitle}>1. 다음 중 가장 질문에 가까운 것은?</p>
      <div className={styles.quizTimeBar}>Timebar</div>
      <div className={styles.quizItems}>
        <QuizItem>1번 질문</QuizItem>
        <QuizItem>2번 질문</QuizItem>
        <QuizItem>3번 질문</QuizItem>
        <QuizItem>4번 질문</QuizItem>
      </div>
      <div className={styles.quizButton}>
        <Button size="small">다음</Button>
      </div>
    </>
  );
};

export default QuizPage;
