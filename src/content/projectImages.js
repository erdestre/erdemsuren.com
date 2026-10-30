// Screenshot set per image key, used by `image` in src/content/projects.js (card cover) and by `screens` in
// src/content/projectDetails.js (case-study screens).
// Real screenshots of the live sites' public home pages (October 2026), 1568 × 698 and 800 × 356 WebP, all with the
// same aspect ratio. Where an original captured the browser scrollbar on its right edge, it is cropped out (1554 × 692
// crop, then resized).
import belbim800 from "../assets/projects/belbim-home-800.webp";
import belbim1568 from "../assets/projects/belbim-home-1568.webp";
import darkpost800 from "../assets/projects/darkpost-home-800.webp";
import darkpost1568 from "../assets/projects/darkpost-home-1568.webp";
import eribi800 from "../assets/projects/eribi-home-800.webp";
import eribi1568 from "../assets/projects/eribi-home-1568.webp";
import eribiCreative800 from "../assets/projects/eribi-creative-home-800.webp";
import eribiCreative1568 from "../assets/projects/eribi-creative-home-1568.webp";
import eribiGrowth800 from "../assets/projects/eribi-growth-home-800.webp";
import eribiGrowth1568 from "../assets/projects/eribi-growth-home-1568.webp";
import istanbulkart800 from "../assets/projects/istanbulkart-home-800.webp";
import istanbulkart1568 from "../assets/projects/istanbulkart-home-1568.webp";
import olser800 from "../assets/projects/olser-home-800.webp";
import olser1568 from "../assets/projects/olser-home-1568.webp";

const WIDTH = 1568;
const HEIGHT = 698;

function screenshot(small, large) {
  return {
    src: small,
    large,
    srcSet: `${small} 800w, ${large} 1568w`,
    width: WIDTH,
    height: HEIGHT,
  };
}

export const PROJECT_IMAGES = {
  belbim: screenshot(belbim800, belbim1568),
  darkpost: screenshot(darkpost800, darkpost1568),
  eribi: screenshot(eribi800, eribi1568),
  "eribi-creative": screenshot(eribiCreative800, eribiCreative1568),
  "eribi-growth": screenshot(eribiGrowth800, eribiGrowth1568),
  istanbulkart: screenshot(istanbulkart800, istanbulkart1568),
  olser: screenshot(olser800, olser1568),
};
