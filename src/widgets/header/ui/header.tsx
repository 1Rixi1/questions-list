import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/shared/ui";
import { LogoImage } from "@/shared/ui/icons/logoImage/logo-image.tsx";
import { LogoTitle } from "@/shared/ui/icons/logoTitle/logo-title.tsx";

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
            <Link className={styles.logo} to="/">
              <LogoImage />
              <LogoTitle />
            </Link>

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
            <Link to="/">База вопросов</Link>
            <Link to="/trainer">Тренажер</Link>
          </nav>
        </div>

        <MenuIcon className={styles.menu} onClick={() => setOpenAuthMenu(true)} />

        <nav
          className={`${styles.authNav} ${openAuthMenu && styles.showAuthNav}`}
          aria-label="Пользовательские действия"
        >
          <Link to="/auth">Вход</Link>
          <Link className={styles.registration} to="/registration">
            Регистрация
          </Link>
          <CloseIcon
            className={styles.closeBtn}
            onClick={() => setOpenAuthMenu(false)}
          />
        </nav>
      </div>

    </header>
  );
};
