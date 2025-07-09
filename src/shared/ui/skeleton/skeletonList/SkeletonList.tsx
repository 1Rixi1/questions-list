import ContentLoader from "react-content-loader";

import styles from "./styles.module.css";

export const SkeletonList = () => {
  return (
    <div className={styles.skeleton}>
      <ContentLoader
        speed={2}
        width={801}
        height={1000}
        viewBox="0 0 801 1000"
        preserveAspectRatio="none"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" width="801" height="1000" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={400}
        height={900}
        viewBox="0 0 400 900"
        preserveAspectRatio="none"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" width="400" height="900" />
      </ContentLoader>
    </div>
  );
};
