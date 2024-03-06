import { Dimensions, StatusBar, View } from "react-native";
import React, {
  Children,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import {
  BlockContainer,
  DialogContainer,
  FloatContainer,
  InlineContainer,
} from "../Containers";
import Dropdown from "../Dropdown";
import { ContainerProps } from "../types";

const { height: H } = Dimensions.get("window");
const statusBarHeight: number = StatusBar.currentHeight || 0;

const Container = React.forwardRef(
  ({ label, mode, children }: ContainerProps, ref: React.Ref<View>) => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState<any>();

    const containerRef = useRef<View | any>(null);
    const rootRef = useRef<View>(null);

    const childs: React.ReactNode[] | any[] = Children.toArray(children);

    useEffect(() => {
      childs.map((child) => {
        if (
          child.type.displayName !== "Content" &&
          child.type.displayName !== "PopOver"
        ) {
          throw new Error(
            "Invalid children. Only Content and Popover are allowed." +
              child.type.name
          );
        }
      });
    }, [childs]);

    const _measure = useCallback(() => {
      if (rootRef && rootRef?.current) {
        rootRef.current.measureInWindow((pageX, pageY, width, height) => {
          const isFull = false;

          const YPos = pageY + height + 232 > H ? "top" : "bottom";
          const top = isFull ? 20 : height + pageY + 2;
          const bottom = H - top + height + 2;
          // const left = I18nManager.isRTL ? W - width - pageX : pageX;
          const left = isFull ? 0 : pageX;

          setPosition({
            isFull,
            width: Math.floor(width),
            top: Math.floor(top + statusBarHeight),
            bottom: Math.floor(bottom - statusBarHeight),
            left: Math.floor(left),
            height: Math.floor(height),
            yPos: YPos,
          });
        });
      }
    }, []);

    //callback
    const openModal = useCallback(() => {
      setOpen(true);
      containerRef.current?.handleOpen();
    }, []);

    const closeModal = useCallback(() => {
      if (containerRef.current?.handleClose) {
        containerRef.current?.handleClose();
      }
      setTimeout(() => {
        setOpen(false);
      }, 200);
    }, []);

    useImperativeHandle<unknown, any>(ref, () => ({ closeModal, openModal }), [
      openModal,
      closeModal,
    ]);

    const _renderModal = useCallback(() => {
      const popOverchildren = childs.length >= 1 ? childs[1] : null;

      const getComponent = (type?: string): React.ReactNode | any => {
        switch (type) {
          case "block":
            return BlockContainer;
          case "dialog":
            return DialogContainer;
          case "inline":
            return InlineContainer;
          case "float":
            return FloatContainer;
          default:
            return undefined;
        }
      };

      const Component = getComponent(mode);

      return (
        <Component
          ref={containerRef}
          open={open}
          closeModal={closeModal}
          label={label}
          {...(mode === "float" ? { position: position } : {})}
        >
          {popOverchildren}
        </Component>
      );
    }, [mode, open, label, childs, closeModal, position]);

    const _renderContent = () => {
      if (!childs?.length) {
        return null;
      }

      if (childs[0].type.displayName === "Content") {
        return (
          <Dropdown.Content
            {...childs[0].props}
            ref={rootRef}
            onLayout={_measure}
          >
            {childs[0].props.children}
          </Dropdown.Content>
        );
      }
      return null;
    };

    return (
      <View>
        {_renderContent()}
        {_renderModal()}
      </View>
    );
  }
);

export default Container;
