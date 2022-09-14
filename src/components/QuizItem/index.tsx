import classNames from 'classnames';
import styles from './quizItem.module.scss';

type ItemProp = {
  children?: string;
  disabled?: boolean;
  onClick: (e: any) => void;
};

const QuizItem = ({ children, onClick, disabled }: ItemProp) => {
  return (
    <button className={styles.quizItem} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default QuizItem;
