import { msg } from 'gt-next';

// Shared strings used across multiple pages
export const shared = {
  appName: "Locadex Demo",
  navHome: msg("Home"),
  navAbout: msg("About"),
  navContact: msg("Contact"),
  footerText: msg("Built with Next.js"),
  copyright: msg('© {year} Locadex Demo. All rights reserved.', { year: new Date().getFullYear() }),
};
