import ContentLoader from "react-content-loader";

import styles from "./styles.module.css";

export const SkeletonDetails = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonList}>
        {[
          ...Array.from({ length: 3 }).map((_, idx) => (
            <ContentLoader
              key={idx}
              speed={2}
              viewBox="0 0 1000 350"
              preserveAspectRatio="none"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" width="1000" height="350" />
            </ContentLoader>
          )),
        ]}
      </div>
      <div className={styles.skeletonAside}>
        <ContentLoader
          speed={2}
          preserveAspectRatio="none"
          viewBox="0 0 1000 730"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" width="1000" height="730" />
        </ContentLoader>
      </div>
    </div>
  );
};
