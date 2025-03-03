"use client";

import Image from "next/image";
import { StoreType } from "@/src/common/store/store";
import { useSelector, useDispatch } from "react-redux";
import { ToggleSideBarHidden } from "@/src/common/store/reducers/SideBarHidden";

import burgerMenuDefault from "@/public/images/common/darkTheme/burger-default.svg";

import "./SideBar.scss";

export default function SideBar() {
  const sideBarHiddenReducer = useSelector((state: StoreType) => state.sideBarHidden.sideBarHidden);

  const dispatch = useDispatch();

  return (
    <>
      <aside
        className={
          "side-bar" +
          (sideBarHiddenReducer ? " side-bar--hidden" : "")
        }
      >
        <div className={"side-bar__backdrop"}>
          <section className={"side-bar__header"}>
            <button
              className={"side-bar__burger-menu"}
              onClick={() => {
                dispatch({ type: ToggleSideBarHidden.TOGGLE_SIDEBAR });
              }}
            >
              <Image
                src={burgerMenuDefault}
                alt={"Burger Menu"}
                className={"side-bar__burger-menu-img"}
              />
            </button>
          </section>
          <section>

          </section>
        </div>
      </aside>
    </>
  );
};
