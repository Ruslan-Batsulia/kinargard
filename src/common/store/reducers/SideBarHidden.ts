export const ToggleSideBarHidden = {
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
} as const;

export const sideBarHidden = (
  state = { sideBarHidden: false },
  action: { type: keyof typeof ToggleSideBarHidden }
) => {
  if (action.type === "TOGGLE_SIDEBAR") {
    return { sideBarHidden: !state.sideBarHidden }
  }

  return state;
}
