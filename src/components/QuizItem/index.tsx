import classNames from 'classnames';
import styles from './quizItem.module.scss';

type ItemProp = {
  children?: string;
  active?: 'clicked' | 'unclicked';
  onClick: (e: any) => void;
};

const QuizItem = ({ children, onClick }: ItemProp) => {
  return (
    <button className={styles.quizItem} onClick={onClick}>
      {children}
    </button>
  );
};

export default QuizItem;
