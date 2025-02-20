// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";
// import { filesToLoad } from "./data";

// export default getRequestConfig(async ({ requestLocale }) => {
//   let locale = await requestLocale;

//   if (!locale || !routing.locales.includes(locale as any)) {
//     locale = routing.defaultLocale;
//   }

//   const messages = (
//     await Promise.all(
//       filesToLoad.map(async (file) => {
//         const module = await import(`./../public/messages/${locale}/${file}`);
//         return module.default;
//       })
//     )
//   ).reduce((acc, messages) => ({ ...acc, ...messages }), {});

//   return {
//     locale,
//     messages,
//   };
// });

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import fs from "fs";
import path from "path";
import { foldersToLoad, rootFilesToLoad } from "./data";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const readJSONFile = (filePath: string): any => {
    try {
      const fullPath = path.join(process.cwd(), "public", filePath);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      return JSON.parse(fileContent);
    } catch (error) {
      return {};
    }
  };

  const loadFolderMessages = (
    basePath: string,
    folderStructure: { folder: string; files: string[]; subfolders?: any[] }
  ): { [key: string]: any } => {
    const folderMessages: { [key: string]: any } = {};

    for (const file of folderStructure.files) {
      const filePath = path.join(basePath, folderStructure.folder, file);
      const fileContent = readJSONFile(filePath);
      Object.assign(folderMessages, fileContent);
    }

    if (folderStructure.subfolders) {
      for (const subfolder of folderStructure.subfolders) {
        if (!folderMessages[subfolder.folder]) {
          folderMessages[subfolder.folder] = {};
        }

        const subfolderMessages = loadFolderMessages(
          path.join(basePath, folderStructure.folder),
          subfolder
        );

        Object.assign(folderMessages[subfolder.folder], subfolderMessages[subfolder.folder]);
      }
    }
  
    return { [folderStructure.folder]: folderMessages };
  };

  const rootMessages = rootFilesToLoad.reduce((acc, file) => {
    const filePath = path.join("messages", locale, file);
    const fileContent = readJSONFile(filePath);
    return { ...acc, ...fileContent };
  }, {});

  const folderMessages = foldersToLoad.map((folder) =>
    loadFolderMessages(path.join("messages", locale), folder)
  );

  const messages: { [key: string]: any } = { ...rootMessages };

  folderMessages.forEach((folderMessage) => {
    Object.assign(messages, folderMessage);
  });

  return {
    locale,
    messages,
  };
});
