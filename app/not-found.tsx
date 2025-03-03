"use client";

import { useRouter } from "next/navigation";

import "@/scss/not-found.scss";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">
        You came to the wrong neighborhood
      </p>

      <div className="not-found__cat">
        <div className="not-found__ears">
          <div className="not-found__ear not-found__ear--right"></div>
          <div className="not-found__ear not-found__ear--left"></div>
        </div>

        <div className="not-found__face">
          <div className="not-found__eyes">
            <div className="not-found__eye not-found__eye--left">
              <div className="not-found__eyePupil"></div>
            </div>
            <div className="not-found__eye not-found__eye--right">
              <div className="not-found__eyePupil"></div>
            </div>
          </div>
          <div className="not-found__nose"></div>
        </div>
      </div>

      {/* <button onClick={() => router.back()} className="not-found__back-button">
        ⬅ Повернутися назад
      </button> */}
    </div>
  );
};
