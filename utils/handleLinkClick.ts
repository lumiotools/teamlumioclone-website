import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleLinkClick = (
  href: string,
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  router: AppRouterInstance
) => {
  if (!href.includes("#")) return;
  e.preventDefault();
  router.push(href, {
    scroll: true,
  });
};
