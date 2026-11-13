// Card cover per image key (`image` in src/content/projects.js), 1568 × 698 and 800 × 356 WebP, one aspect ratio.
// - screenshot(): a real screenshot of a live site's public home page (October 2026); its alt names the site. Where
//   the original captured the browser scrollbar on its right edge, it is cropped out (1554 × 692 crop, then resized).
// - illustration(): a decorative line drawing in the site's palette (alt=""), made with Higgsfield (November 2026), centre-cropped from 1600 × 1000 to the card ratio.
import belbim800 from "../assets/projects/belbim-home-800.webp";
import belbim1568 from "../assets/projects/belbim-home-1568.webp";
import belbimCms800 from "../assets/projects/belbim-cms-cover-800.webp";
import belbimCms1568 from "../assets/projects/belbim-cms-cover-1568.webp";
import devops800 from "../assets/projects/devops-cover-800.webp";
import devops1568 from "../assets/projects/devops-cover-1568.webp";
import driftMaxCity800 from "../assets/projects/drift-max-city-cover-800.webp";
import driftMaxCity1568 from "../assets/projects/drift-max-city-cover-1568.webp";
import driftMaxPro800 from "../assets/projects/drift-max-pro-cover-800.webp";
import driftMaxPro1568 from "../assets/projects/drift-max-pro-cover-1568.webp";
import eribi800 from "../assets/projects/eribi-home-800.webp";
import eribi1568 from "../assets/projects/eribi-home-1568.webp";
import eribiCreative800 from "../assets/projects/eribi-creative-home-800.webp";
import eribiCreative1568 from "../assets/projects/eribi-creative-home-1568.webp";
import eribiGrowth800 from "../assets/projects/eribi-growth-home-800.webp";
import eribiGrowth1568 from "../assets/projects/eribi-growth-home-1568.webp";
import igdasOps800 from "../assets/projects/igdas-field-operations-cover-800.webp";
import igdasOps1568 from "../assets/projects/igdas-field-operations-cover-1568.webp";
import igdasTmt800 from "../assets/projects/igdas-tmt-cover-800.webp";
import igdasTmt1568 from "../assets/projects/igdas-tmt-cover-1568.webp";
import istanbulkart800 from "../assets/projects/istanbulkart-home-800.webp";
import istanbulkart1568 from "../assets/projects/istanbulkart-home-1568.webp";
import istanbulkartMobile800 from "../assets/projects/istanbulkart-mobile-cover-800.webp";
import istanbulkartMobile1568 from "../assets/projects/istanbulkart-mobile-cover-1568.webp";

const WIDTH = 1568;
const HEIGHT = 698;

function cover(small, large, shot) {
  return {
    shot,
    src: small,
    large,
    srcSet: `${small} 800w, ${large} 1568w`,
    width: WIDTH,
    height: HEIGHT,
  };
}

const screenshot = (small, large) => cover(small, large, true);
const illustration = (small, large) => cover(small, large, false);

export const PROJECT_IMAGES = {
  belbim: screenshot(belbim800, belbim1568),
  eribi: screenshot(eribi800, eribi1568),
  "eribi-creative": screenshot(eribiCreative800, eribiCreative1568),
  "eribi-growth": screenshot(eribiGrowth800, eribiGrowth1568),
  istanbulkart: screenshot(istanbulkart800, istanbulkart1568),
  "belbim-cms": illustration(belbimCms800, belbimCms1568),
  "istanbulkart-mobile": illustration(istanbulkartMobile800, istanbulkartMobile1568),
  devops: illustration(devops800, devops1568),
  "igdas-field-operations": illustration(igdasOps800, igdasOps1568),
  "igdas-tmt": illustration(igdasTmt800, igdasTmt1568),
  "drift-max-pro": illustration(driftMaxPro800, driftMaxPro1568),
  "drift-max-city": illustration(driftMaxCity800, driftMaxCity1568),
};
