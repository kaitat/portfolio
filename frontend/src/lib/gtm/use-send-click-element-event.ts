import { sendGTMEvent } from "@next/third-parties/google";
import { useCallback } from "react";

type ElementCategoryPageLitral =
  | "top"
  | "form"
  | "other"
  | "component"
  | "article";

type ElementCategoryFormLitral =
  | "button"
  | "checkbox"
  | "link"
  | "input"
  | "select";

type ElementCategoryValue =
  `${ElementCategoryPageLitral}__${ElementCategoryFormLitral}`;

type Options = {
  element_category: ElementCategoryValue;
  element_label: string;
  page_destination?: string | undefined;
};

export const useSendClickElementEvent = (options: Options) => {
  const sendClickElementEvent = useCallback(async () => {
    sendGTMEvent({
      event: "click_element",
      page_location: window.location.href,
      ...options,
    });
  }, [options]);
  return { sendClickElementEvent };
};
