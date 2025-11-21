import PropTypes from "prop-types";
import { forwardRef } from "react";
import dynamic from "next/dynamic";

// ✅ Correct dynamic import
const Icon = dynamic(
  () => import("@iconify/react").then((mod) => ({ default: mod.Icon })),
  { ssr: true }
);

const Iconify = forwardRef(
  ({ icon, width, style, className = "", ...other }, ref) => (
    <div
      ref={ref}
      className={`component-iconify ${className}`}
      style={{ width, height: width, display: "inline-flex", ...style }}
      {...other}
    >
      <Icon icon={icon} width={width} height={width} />
    </div>
  )
);

// Adding display name for easier debugging
Iconify.displayName = "Iconify";

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default Iconify;
