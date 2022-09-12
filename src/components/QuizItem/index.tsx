import styles from './quizItem.module.scss';

type ItemProp = {
  children?: string;
};

const QuizItem = ({ children }: ItemProp) => {
  return <div className={styles.quizItem}>{children}</div>;
};

export default QuizItem;
