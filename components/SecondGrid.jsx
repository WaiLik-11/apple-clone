/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import css from "../styles/Grid.module.css";
import { urlFor } from "../lib/client";

export default function SecondGrid({ secondGridData }) {
  return (
    <section className={css.GridSection}>
      <div className={css.row}>
        {secondGridData.map((secondGrid, id) => {
          return (
            <Link key={id} href={`/product/${secondGrid.slug.current}`}>
              <div className={css.gridItem}>
                <div
                  className={css.background}
                  style={{
                    backgroundImage: `url(${urlFor(
                      secondGrid.image && secondGrid.image[0]
                    )})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "600px",
                  }}
                >
                  <div className={css.topTitle}>
                    {secondGrid.logoImage ? (
                      <div className={css.logoImageContainer}>
                        <img
                          src={urlFor(
                            secondGrid.logoImage && secondGrid.logoImage[0]
                          )}
                          alt=""
                        />
                      </div>
                    ) : (
                      <h1 className={css.black}>{secondGrid.name}</h1>
                    )}
                    <h3 className={css.black}>{secondGrid.midText}</h3>
                    <h3 className={css.black}>{secondGrid.midTextSecond}</h3>
                    <div className={css.links}>
                      <a href="">
                        {secondGrid.arrowText}{" "}
                        {secondGrid.arrowSVG && (
                          <img
                            src={urlFor(
                              secondGrid.arrowSVG && secondGrid.arrowSVG[0]
                            )}
                            alt=""
                            width={12}
                            height={12}
                          />
                        )}
                      </a>
                      <a href="">
                        {secondGrid.buyText}{" "}
                        {secondGrid.buySVG && (
                          <img
                            src={urlFor(
                              secondGrid.buySVG && secondGrid.buySVG[0]
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
