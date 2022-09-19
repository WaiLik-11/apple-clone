/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import css from "../styles/Grid.module.css";
import { urlFor } from "../lib/client";

export default function FirstGrid({ firstGridData }) {
  return (
    <section className={css.GridSection}>
      <div className={css.row}>
        {firstGridData.map((firstGrid, id) => {
          return (
            <Link key={id} href={`/product/${firstGrid.slug.current}`}>
              <div className={css.gridItem}>
                <div
                  className={css.background}
                  style={{
                    backgroundImage: `url(${urlFor(
                      firstGrid.image && firstGrid.image[0]
                    )})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "600px",
                  }}
                >
                  <div className={css.topTitle}>
                    {firstGrid.logoImage ? (
                      <div className={css.logoImageContainer}>
                        <img
                          src={urlFor(
                            firstGrid.logoImage && firstGrid.logoImage[0]
                          )}
                          alt=""
                        />
                      </div>
                    ) : (
                      <h1 className={css.black}>{firstGrid.name}</h1>
                    )}
                    <h3 className={css.black}>{firstGrid.midText}</h3>
                    <div className={css.links}>
                      <a href="">
                        {firstGrid.arrowText}{" "}
                        {firstGrid.arrowSVG && (
                          <img
                            src={urlFor(
                              firstGrid.arrowSVG && firstGrid.arrowSVG[0]
                            )}
                            alt=""
                            width={12}
                            height={12}
                          />
                        )}
                      </a>
                      <a href="">
                        {firstGrid.buyText}{" "}
                        {firstGrid.buySVG && (
                          <img
                            src={urlFor(
                              firstGrid.buySVG && firstGrid.buySVG[0]
                            )}
                            alt=""
                            width={12}
                            height={12}
                          />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
