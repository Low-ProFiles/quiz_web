import styles from './quizItem.module.scss';

type ItemProp = {
  children?: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const QuizItem = ({ children, onClick, disabled }: ItemProp) => {
  return (
    <button className={styles.quizItem} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default QuizItem;
