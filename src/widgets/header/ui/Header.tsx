import styles from "./styles.module.css";
import { useState } from "react";
import {
  ButtonNavigate,
  CloseIcon,
  LogoImage,
  LogoTitle,
  MenuIcon,
} from "@/shared/ui";

export const Header = () => {
  const [options, SetOptions] = useState(false);
  const [openAuthMenu, setOpenAuthMenu] = useState(false);

  return (
    <header className={`${styles.header}`}>
      <div className={`wrapper ${styles.headerWrapper}`}>
        <div
          className={`${styles.container}`}
          aria-label="Лого и основная навигация"
        >
          <div className={styles.branding} aria-label="Лого и выбор раздела">
            <ButtonNavigate className={styles.logo} navigate="/">
              <LogoImage />
              <LogoTitle />
            </ButtonNavigate>
            <button
              className={`${styles.btnToggle} ${options && styles.rotate}`}
              onClick={() => SetOptions(!options)}
            >
              Подготовка
            </button>
          </div>
          <nav
            className={`${styles.mainNav} ${options && styles.showMainNav}`}
            aria-label="Основная навигация"
          >
            <ButtonNavigate navigate="/" title="База вопросов" />
            <ButtonNavigate navigate="/trainer" title="Тренажер" />
          </nav>
        </div>
        <MenuIcon
          className={styles.menu}
          onClick={() => setOpenAuthMenu(true)}
        />
        <nav
          className={`${styles.authNav} ${openAuthMenu && styles.showAuthNav}`}
          aria-label="Пользовательские действия"
        >
          <ButtonNavigate title="Вход" navigate="/auth" />
          <ButtonNavigate
            className={styles.registration}
            title="Регистрация"
            navigate="/registration"
          />

          <CloseIcon
            className={styles.closeBtn}
            onClick={() => setOpenAuthMenu(false)}
          />
        </nav>
      </div>
    </header>
  );
};
