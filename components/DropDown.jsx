import Image from "next/image";
import css from "../styles/DropDown.module.css";
import bag from "../assets/bag.svg";
import savedItem from "../assets/saved-items.svg";
import orders from "../assets/orders.svg";
import account from "../assets/account.svg";
import user from "../assets/user.svg";
import Link from "next/link";

export default function DropDown() {
  return (
    <div>
      <div className={css.button}>
        <div className={css.content}>
          <div className={css.text}>
            <p>Your Bag is empty.</p>
          </div>
          <hr />
          <Link href="/bag">
            <div className={css.item}>
              <Image src={bag} alt="" />
              <p>Bag</p>
            </div>
          </Link>
          <hr />
          <Link href="/savedItems">
            <div className={css.item}>
              <Image src={savedItem} alt="" />
              <p> Saved Items</p>
            </div>
          </Link>
          <hr />
          <Link href="/orders">
            <div className={css.item}>
              <Image src={orders} alt="" />
              <p>Orders</p>
            </div>
          </Link>
          <hr />
          <Link href="/account">
            <div className={css.item}>
              <Image src={account} alt="" />
              <p>Account</p>
            </div>
          </Link>
          <hr />
          <Link href="/signin">
            <div className={css.item}>
              <Image src={user} alt="" />
              <p>Sign in</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
