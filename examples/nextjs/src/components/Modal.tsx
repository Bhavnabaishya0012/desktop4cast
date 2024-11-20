import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="relative w-[90%] max-w-4xl bg-neutral-900 p-8 rounded-lg overflow-auto max-h-[90vh] text-white">
        {/* Close button */}
        <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={onClose}
        >
            &times;
        </button>

        <div className="overflow-y-auto max-h-[80vh]">{children}</div>
        </div>
    </div>
    );
};
