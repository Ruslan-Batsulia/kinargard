// import { isLocale } from "../utils";
// import type { Locale } from "./../types";
// import { useRouter } from "next/navigation";

// export const useChangeLocale = () => {
//   const router = useRouter();

//   const changeLanguage = (newLocale: Locale) => {
//     document.cookie = `NEXT_LOCALE=${newLocale}; path=/;`;

//     const protocol = window.location.protocol;
//     const currentHost = window.location.host;
//     const [hostWithoutPort, port] = currentHost.split(":");
//     const hostParts = hostWithoutPort.split(".");

//     if (isLocale(hostParts[0])) {
//       hostParts[0] = newLocale;
//     } else {
//       hostParts.unshift(newLocale);
//     }

//     const newHostWithoutPort = hostParts.join(".");
//     const newPort = port ? `:${port}` : "";
//     const newHost = `${newHostWithoutPort}${newPort}`;
//     const newUrl = `${protocol}//${newHost}${window.location.pathname}${window.location.search}`;

//     router.refresh();

//     window.location.href = newUrl;
//   };

//   return { changeLanguage };
// };

import { isLocale } from "../utils";
import type { Locale } from "../types";
import { useRouter } from "next/navigation";

export const useChangeLocale = () => {
  const router = useRouter();

  const changeLanguage = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/;`;

    const protocol = window.location.protocol;
    const currentHost = window.location.host;
    const hostParts = currentHost.split(".");

    if (isLocale(hostParts[0])) {
      hostParts[0] = newLocale;
    } else {
      hostParts.unshift(newLocale);
    }

    const newHost = hostParts.join(".");
    const newUrl = `${protocol}//${newHost}${window.location.pathname}${window.location.search}`;

    router.refresh();
    window.location.href = newUrl;
  };

  return { changeLanguage };
};
