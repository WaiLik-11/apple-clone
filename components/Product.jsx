import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";
import css from "../styles/Product.module.css";

export default function Product({
  product: {
    image,
    slug,
    logoImage,
    name,
    midText,
    arrowText,
    arrowSVG,
    buyText,
  },
}) {
    
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div
          className={css.background}
          style={{
            backgroundImage: `url(${urlFor(image && image[0])})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "736px",
          }}
        >
          <div className={css.topTitle}>
            {logoImage ? (
              <div className={css.logoImageContainer}>
                <Image src={urlFor(logoImage && logoImage[0])} alt="" />
              </div>
            ) : (
              <h1 className={css.black}>{name}</h1>
            )}
            <h3 className={css.black}>{midText}</h3>
            <div className={css.links}>
              <a href="">
                {arrowText}{" "}
                {arrowSVG && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={urlFor(arrowSVG && arrowSVG[0])}
                    alt=""
                    width={12}
                    height={12}
                  />
                )}
              </a>
              <a href="">
                {buyText}{" "}
                {arrowSVG && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={urlFor(arrowSVG && arrowSVG[0])}
                    alt=""
                    width={12}
                    height={12}
                  />
                )}
              </a>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
