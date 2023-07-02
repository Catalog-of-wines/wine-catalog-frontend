import React from "react";
import { Image } from "../../components/Image"; 
import wineHomePage from "../../images/img_wine_homepage.png";
import styles from "./HomePage.module.scss";
import { Button, WineCard } from "../../components";
import { ChampagneIcon, WineIcon } from "../../components/icons";



export const HomePage: React.FC = () => {
  const handleToCatalog = (): void => {

  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Image
              src={wineHomePage}
              alt={"Bottle of wine"}
              className={styles.image}
            />
          </div>

          <div className={styles.text}>
            <div className={styles.textGroup}>
              <h1 className={styles.textTitle}>хочеш?</h1>
              <h1 className={styles.textSubTitle}>відкрий!</h1>
              <Button className={styles.button} onClick={handleToCatalog}>
                <p className={styles.buttonText}>Каталог</p>
              </Button>
            </div>
          </div>

          <div className={styles.containerAboutUs}>
            <div className={styles.aboutUs}>
              <h1 className={styles.aboutUsTitle}>про нас</h1>
              <p className={styles.aboutUsTextMain}>
              WineBox – гіпермаркет вин, що пропонує широкий асортимент різноманітних видів вин та шампанських на будь-який випадок життя. Ми ваш персональний сомельє, що допоможе легко знайти напій на ваш смак.
              </p>
              <p className={styles.aboutUsSubText}>
              Не важливо шукаєте ви ігристе чи тихе, солодке чи сухе, на WineBox знайдеться все!
              </p>
            </div>
          </div>

          <div className={styles.wine}>
            <WineCard wineId={""} name={""} price={""} image={""} />
            <WineCard wineId={""} name={""} price={""} image={""} />
          </div>

            <div className={styles.сhoice}>
              <h1 className={styles.choiceText}>обирай</h1>
              <div className={styles.choiceButtonsContainer}>
              <Button className={styles.choiceButtonChampagne} onClick={handleToCatalog}>
                <ChampagneIcon width="100" height="100"/>
                <p className={styles.choiceSubText}>на свято</p>
              </Button>
              <Button className={styles.choiceButtonWine} onClick={handleToCatalog}>
                <WineIcon width="100" height="100"/>
                <p className={styles.choiceSubText}>на вечір</p>
              </Button>
              </div>
            </div>

          <div>

          </div>
        </div>

      </div>
    </>

  );
};
