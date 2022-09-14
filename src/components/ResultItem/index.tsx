import styles from './resultItem.module.scss';

type ItemProp = {
  children?: React.ReactNode | string;
};

const ResultItem = ({ children }: ItemProp) => {
  return <div className={styles.resultItem}>{children}</div>;
};

export default ResultItem;
