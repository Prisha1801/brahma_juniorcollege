import { useEffect } from "react";

const isDevtoolsDisabled = () =>
  String(import.meta.env.VITE_DISABLE_DEVTOOLS).toLowerCase() === "true";

const useDisableRightClick = () => {
  useEffect(() => {
    if (!isDevtoolsDisabled()) return;

    const handleContextMenu = (e) => e.preventDefault();
    const handleSelectStart = (e) => e.preventDefault();
    const handleCopy = (e) => e.preventDefault();
    const handleCut = (e) => e.preventDefault();
    const handlePaste = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      const key = String(e.key).toLowerCase();
      const hasCtrlOrMeta = e.ctrlKey || e.metaKey;

      const blockedCombos =
        e.key === "F12" ||
        (hasCtrlOrMeta && key === "u") ||
        (hasCtrlOrMeta && key === "s") ||
        (hasCtrlOrMeta && e.shiftKey && ["i", "j", "c"].includes(key));

      if (blockedCombos) {
        e.preventDefault();
      }
    };

    document.body.classList.add("disable-selection");
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("paste", handlePaste);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("disable-selection");
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("paste", handlePaste);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useDisableRightClick;
