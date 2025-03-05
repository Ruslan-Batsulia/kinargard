import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { filesToLoad } from "./data";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = (
    await Promise.all(
      filesToLoad.map(async (file) => {
        const module = await import(`./../public/messages/${locale}/${file}`);
        return module.default;
      })
    )
  ).reduce((acc, messages) => ({ ...acc, ...messages }), {});

  return {
    locale,
    messages,
  };
});
