import type { Metadata } from "next";
import { cookies } from "next/headers";
import { isLocale } from "@/src/common/utils";
import { getMessages } from "next-intl/server";
import type { Locale } from "@/src/common/types";
import { NextIntlClientProvider } from "next-intl";
import { DEFAULT_LOCALE } from "@/src/common/constants";
import { geistMono, geistSans } from "@/src/common/fonts";
import { GlobalContextProvider } from "@/src/common/context/SideBarContext";

import "@/scss/globals.scss";

export const metadata: Metadata = {
  title: "Scrollgard",
  icons: "/favicon.ico",
  description: "Task managing app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "";
  const validLocale: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;

  const messages = await getMessages({ locale: validLocale });
  console.log("messages: ", messages);
  console.log("locale: ", locale);
  console.log("validLocale: ", validLocale);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
          <GlobalContextProvider>
            {children}
          </GlobalContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
