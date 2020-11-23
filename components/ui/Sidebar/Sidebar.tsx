import React from 'react';
import { Transition } from '@headlessui/react';
import { useOverlay, useModal, OverlayContainer } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { Cross } from '@components/icons';

import { Root, Container } from './Sidebar.styles';

interface Props {
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  onClose: () => void;
}
const Sidebar: React.FC<Props> = ({
  className,
  children,
  open = false,
  onClose,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { modalProps } = useModal();
  const { dialogProps } = useDialog({}, ref);
  const { overlayProps } = useOverlay(
    {
      isOpen: open,
      isDismissable: true,
      onClose,
    },
    ref
  );

  return (
    <Transition show={open}>
      <OverlayContainer>
        <FocusScope contain restoreFocus autoFocus>
          <Root className={className} {...props}>
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
              </Transition.Child>
            </div>
            <Container
              ref={ref}
              {...overlayProps}
              {...dialogProps}
              {...modalProps}
            >
              <Transition.Child
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="h-full md:w-screen md:max-w-md">
                  <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() => onClose()}
                        aria-label="Close Panel"
                        className="hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none"
                      >
                        <Cross className="h-6 w-6" />
                      </button>
                    </div>
                    {children}
                  </div>
                </div>
              </Transition.Child>
            </Container>
          </Root>
        </FocusScope>
      </OverlayContainer>
    </Transition>
  );
};

export default Sidebar;
