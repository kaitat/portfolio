"use client";

import React, { type FC, type ReactElement } from "react";

import { useSendClickElementEvent } from "./use-send-click-element-event";

type Props = {
  children: ReactElement;
  options: Parameters<typeof useSendClickElementEvent>["0"];
};

export const TrackOnClick: FC<Props> = ({ children, options }: Props) => {
  const { sendClickElementEvent } = useSendClickElementEvent(options);
  return React.cloneElement(children, {
    onClick(e: unknown) {
      if (children.props && typeof children.props?.onClick === "function") {
        children.props.onClick(e);
      }
      sendClickElementEvent();
    },
  });
};
