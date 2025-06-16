import { useAtomValue, useSetAtom } from "jotai";
import { closeDialogAtom, dialogAtom } from "./atom";
import Dialog from "./default";

/**
 * Global에서 관리를 하는 Dialog 컴포넌트
 * 이 컴포넌트는 전역 상태 jotai Atom으로 Dialog를 관리하며,
 * 다른 컴포넌트에서 Dialog를 열고 닫을 수 있도록 합니다.
 * const openDialog = useSetAtom(openDialogAtom);
 * 이 컴포넌트를 사용하여 Dialog를 열려면,
 * openDialog({
 *   title: "Dialog Title",
 *   description: "Dialog Description",
 *   accept: () => { console.log("Accepted"); },
 *   cancel: () => { console.log("Cancelled"); },
 *   acceptText: "확인",
 *   cancelText: "취소",
 * });
 * @returns GlobalDialog
 */
const GlobalDialog = () => {
  const dialog = useAtomValue(dialogAtom);
  const closeDialog = useSetAtom(closeDialogAtom);

  const handleAccept = () => {
    dialog.accept?.();
    closeDialog();
  };

  const handleCancel = () => {
    dialog.cancel?.();
    closeDialog();
  };

  return (
    <Dialog
      isOpen={dialog.isOpen}
      title={dialog.title}
      description={dialog.description}
      accept={handleAccept}
      cancel={handleCancel}
      acceptText={dialog.acceptText || "확인"}
      cancelText={dialog.cancelText || "취소"}
    />
  );
};

export default GlobalDialog;
