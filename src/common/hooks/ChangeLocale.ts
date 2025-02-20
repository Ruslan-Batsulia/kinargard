import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useChangeLocale = () => {
  const pathname = usePathname();
  const [_, setSearch] = useState("");

  useEffect(() => {
    setSearch(window.location.search);
  }, []);

  const changeLanguage = (newLocale: string) => {
    const protocol = window.location.protocol;
    const currentHost = window.location.host;
    const [hostWithoutPort, port] = currentHost.split(":");
    const hostParts = hostWithoutPort.split(".");
    if (["uk", "en"].includes(hostParts[0])) {
      hostParts[0] = newLocale;
    } else {
      hostParts.unshift(newLocale);
    }
    const newHostWithoutPort = hostParts.join(".");
    const newPort = port ? `:${port}` : "";
    const newHost = `${newHostWithoutPort}${newPort}`;
    const newUrl = `${protocol}//${newHost}${pathname}${window.location.search}`;
    window.location.href = newUrl;
  };

  return {
    changeLanguage
  }
}
