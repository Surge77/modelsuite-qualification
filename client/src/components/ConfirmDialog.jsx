const ConfirmDialog = ({ title, message, confirmLabel = 'Confirm', onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/65 backdrop-blur-sm flex items-center justify-center z-[300] p-6"
      onClick={onCancel}>
      <div className="bg-bg-card border border-border rounded-xl w-full max-w-sm shadow-[0_32px_80px_rgba(0,0,0,0.6)] animate-modal-in"
        onClick={(e) => e.stopPropagation()}>
        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-[16px] font-semibold text-text-primary">{title}</h2>
          <p className="text-[14px] text-text-muted leading-relaxed">{message}</p>
          <div className="flex gap-3 pt-1">
            <button onClick={onCancel}
              className="flex-1 py-2.5 bg-bg-input text-text-muted border border-border rounded-lg text-sm font-medium cursor-pointer hover:bg-bg-hover hover:text-text-primary transition-all font-sans">
              Cancel
            </button>
            <button onClick={onConfirm}
              className="flex-1 py-2.5 bg-danger/10 text-danger border border-danger/30 rounded-lg text-sm font-semibold cursor-pointer hover:bg-danger/20 transition-all font-sans">
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
