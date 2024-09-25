import React from "react";

const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <div className="footerWrapper">
      {percentage === 100 ? "Shopping Done" : `Total Item: ${numItems} Completed Item: ${numPacked} Percentage: ${percentage}%`}
    </div>
  );
};
export default Footer;
