import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

export const CustomPageViewEventRegister = () => {
  const pathname = usePathname();

  const sendEvent = useCallback(async () => {
    sendGTMEvent({
      event: "custom_page_view",
      pagePath: pathname,
    });
  }, [pathname]);

  useEffect(() => {
    sendEvent();
  }, [sendEvent]);

  return null;
};
