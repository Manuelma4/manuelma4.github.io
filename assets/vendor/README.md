# Local browser assets

- **Lucide 1.47.0**: selected SVG symbols in `../img/icons/lucide-1.47.0.svg`, sourced from the published `lucide-static@1.47.0` package. The icon IDs match the site's existing `icon()` helper. Brand marks are kept separately. See `lucide-LICENSE.txt` (ISC and applicable Feather MIT notices).
- **Motion Mini 13.4.0**: only `animate` from `motion/mini`, bundled as the optional `PortfolioMotion` global with esbuild 0.28.2. Resolved dependencies: framer-motion 13.4.0, motion-dom 13.3.0, motion-utils 13.3.0, tslib 2.8.1. See `motion-LICENSE.txt` (MIT).

These files are served locally. No package installation or build is required to publish the portfolio on GitHub Pages. Keep library versions fixed when replacing assets, retain license notices, and verify the reduced-motion and missing-library fallbacks after an update.

Upstream: https://lucide.dev/guide/static · https://motion.dev/docs/animate
