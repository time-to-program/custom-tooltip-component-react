import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ infoText, children }) => {
  // State to manage tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      {/* Tooltip content */}
      <div className={`tooltip ${showTooltip ? "open" : ""}`}>
        {infoText}
        {/* Arrow indicator */}
        <div className="arrow" />
      </div>
    </div>
  );
};

export default Tooltip;
