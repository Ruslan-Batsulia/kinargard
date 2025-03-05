type FolderStructure = {
  folder: string;
  files: string[];
  subfolders?: FolderStructure[];
};

export const foldersToLoad: FolderStructure[] = [
  // {
  //   folder: "name",
  //   files: ["Name.json"],
  //   subfolders: [
  //     {
  //       folder: "name",
  //       files: ["Name.json"],
  //       subfolders: [
  //         {
  //           folder: "name",
  //           files: ["Name.json"],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    folder: "Auth",
    files: ["SignIn.json"],
  },
];

export const rootFilesToLoad: string[] = [
  "MainPage.json",
];
