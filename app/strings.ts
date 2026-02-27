// Shared strings used across multiple pages
import { msg } from 'gt-next';

export const shared = {
  appName: msg("Locadex Demo"),
  navHome: msg("Home"),
  navAbout: msg("About"),
  navContact: msg("Contact"),
  footerText: msg("Built with Next.js"),
  copyright: msg("\u00a9 {year} Locadex Demo. All rights reserved.", { year: new Date().getFullYear() }),
};
