"use client";

import { useRouter } from "next/navigation";

import "@/scss/not-found.scss";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="not-found">
      <h1>404 - Сторінку не знайдено</h1>
      <p>Можливо, вона була видалена або ніколи не існувала.</p>
      <button onClick={() => router.back()} className="back-button">
        ⬅ Повернутися назад
      </button>
    </div>
  );
};
