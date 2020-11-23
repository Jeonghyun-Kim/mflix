import React from 'react';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { Transition } from '@headlessui/react';
import { useOverlay, useModal, OverlayContainer } from '@react-aria/overlays';
import { Cross } from '@components/icons';

import { Root, Container } from './Modal.styles';

interface Props {
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  onClose: () => void;
}
const Modal: React.FC<Props> = ({
  className,
  children,
  open = false,
  onClose,
  ...props
}) => {
  const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const { modalProps } = useModal();
  const { dialogProps } = useDialog({}, ref);
  const { overlayProps } = useOverlay(
    {
      isOpen: open,
      isDismissable: false,
      onClose,
    },
    ref
  );

  return (
    <Transition show={open}>
      <OverlayContainer>
        <FocusScope contain autoFocus>
          <Root className={className} {...props}>
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Container
                ref={ref}
                {...overlayProps}
                {...dialogProps}
                {...modalProps}
              >
                <div className="h-7 flex items-center justify-end w-full">
                  <button
                    onClick={() => onClose()}
                    aria-label="Close Panel"
                    className="hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none"
                  >
                    <Cross className="h-6 w-6" />
                  </button>
                </div>
                {children}
              </Container>
            </Transition.Child>
          </Root>
        </FocusScope>
      </OverlayContainer>
    </Transition>
  );
};

export default Modal;
