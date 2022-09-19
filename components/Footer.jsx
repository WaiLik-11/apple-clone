import Link from "next/link";
import css from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={css.footer}>
        <div className={css.wrapper}>
          <ul>
            {[
              "1. RM 19.90/month after free trial. One subscription per Family Sharing group. Offer is valid for three months after eligible device activation. Plan is automatically renewed until cancelled. Restrictions and other terms apply.",
              "RM 19.90/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchase. This offer is not available if you or your family have previously accepted an Apple TV+ one‑year‑free offer. Offer is valid for three months after eligible device activation. Plan is automatically renewed until cancelled. Restrictions and other terms apply.",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={css.links}>
            <div className={css.linksColumn}>
              <div className={css.linksColumnTitle}>Shop and Learn</div>
              <ul>
                {[
                  "Store",
                  "Mac",
                  "iPad",
                  "iPhone",
                  "Watch",
                  "AirPods",
                  "TV & Home",
                  "AirTag",
                  "Accessories",
                ].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>
                      <a href="">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={css.linksColumn}>
              <div className={css.linksColumnTitle}>Services</div>
              <ul>
                {[
                  "Apple Music",
                  "Apple TV+",
                  "Apple Fitness+",
                  "Apple Arcade",
                  "iCloud",
                  "Apple One",
                  "Apple Books",
                  "Apple Podcasts",
                  "App Store",
                ].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>
                      <a href="">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={css.linksColumnTitle}>Account</div>
              <ul>
                {[
                  "Manage Your Apple ID",
                  "Apple Store Account",
                  "iCloud.com",
                ].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>
                      <a href="">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={css.linksColumn}>
              <div className={css.linksColumnTitle}>Apple Store</div>
              <ul>
                {[
                  "Apple Store App",
                  "Apple Recycling Programme",
                  "Order Status",
                  "Shopping Help",
                ].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>
                      <a href="">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={css.linksColumn}>
              <div className={css.linksColumnTitle}>For Business</div>
              <ul>
                {["Apple and Business"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>
                      <a href="">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={css.linksColumnTitle}>For Education</div>
              <ul>
                {["Apple and Education", "Shop for University"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>
                      <a href="">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={css.linksColumnTitle}>For Healthcare</div>
              <ul>
                {["Apple in Healthcare", "Health on Apple Watch"].map(
                  (item) => (
                    <li key={item}>
                      <Link href={`/${item}`}>
                        <a href="">{item}</a>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className={css.linksColumn}>
              <div className={css.linksColumnTitle}>Apple Values</div>
              <ul>
                {[
                  "Accessibility",
                  "Environment",
                  "Privacy",
                  "Supplier Responsibility",
                ].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>
                      <a href="">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={css.linksColumnTitle}>About Apple</div>
              <ul>
                {[
                  "Career Opportunities",
                  "Investors",
                  "Ethics and Compliance",
                  "Events",
                  "Contact Apple",
                ].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>
                      <a href="">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.more}>
            More ways to shop:{" "}
            <Link href="/">
              <a href="">Find a retailer</a>
            </Link>{" "}
            near you. Or call 1800-80-6419
          </div>

          <div className={css.copyright}>
            <p>Copyright © 2022 AppleClone Inc. All rights reserved.</p>
            <Link href="/">Malaysia</Link>

            <div className={css.footerLinks}>
              {[
                "Privacy Policy",
                "Terms of Use",
                "Sales and Refunds",
                "Legal",
                "Site Map",
              ].map((item) => (
                <a href="#" key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
