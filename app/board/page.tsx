"use client";

import { Provider } from "react-redux";
import { ourStore } from "@/src/common/store/store";
import { Main, SideBar } from "@/src/components/common";

export default function BoardPage() {
  return (
    <>
      <Provider store={ourStore}>
        <SideBar />
        <Main />
      </Provider>
    </>
  );
}
