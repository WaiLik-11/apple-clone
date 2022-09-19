/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import css from "../styles/Grid.module.css";
import { urlFor } from "../lib/client";

export default function ThirdGrid({ thirdGridData }) {
  return (
    <section className={css.GridSection}>
      <div className={css.row}>
        {thirdGridData.map((thirdGrid, id) => {
          return (
            <Link key={id} href={`/product/${thirdGrid.slug.current}`}>
              <div className={css.gridItem}>
                <div
                  className={css.background}
                  style={{
                    backgroundImage: `url(${urlFor(
                      thirdGrid.image && thirdGrid.image[0]
                    )})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "600px",
                  }}
                >
                  <div className={css.topTitle}>
                    {thirdGrid.logoImage ? (
                      <div className={css.logoImageContainer}>
                        <img
                          src={urlFor(
                            thirdGrid.logoImage && thirdGrid.logoImage[0]
                          )}
                          alt=""
                        />
                      </div>
                    ) : (
                      <h1 className={css.black}>{thirdGrid.name}</h1>
                    )}
                    <h3 className={css.black}>{thirdGrid.midText}</h3>
                    <h3 className={css.black}>{thirdGrid.midTextSecond}</h3>
                    <div className={css.links}>
                      <a href="">
                        {thirdGrid.arrowText}{" "}
                        {thirdGrid.arrowSVG && (
                          <img
                            src={urlFor(
                              thirdGrid.arrowSVG && thirdGrid.arrowSVG[0]
                            )}
                            alt=""
                            width={12}
                            height={12}
                          />
                        )}
                      </a>
                      <a href="">
                        {thirdGrid.buyText}{" "}
                        {thirdGrid.buySVG && (
                          <img
                            src={urlFor(
                              thirdGrid.buySVG && thirdGrid.buySVG[0]
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
