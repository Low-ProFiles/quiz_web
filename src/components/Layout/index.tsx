import styles from './layout.module.scss';

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutMain}>{children}</div>
    </div>
  );
};

export default Layout;
