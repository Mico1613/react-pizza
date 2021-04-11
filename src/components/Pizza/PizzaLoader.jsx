import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoader() {
  return (
    <ContentLoader
      speed={1}
      width={270}
      height={475}
      viewBox="0 0 270 475"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="135" cy="130" r="130" />
      <rect x="0" y="285" rx="5" ry="5" width="267" height="24" />
      <rect x="0" y="331" rx="5" ry="5" width="267" height="81" />
      <rect x="3" y="434" rx="5" ry="5" width="74" height="30" />
      <rect x="143" y="428" rx="19" ry="19" width="122" height="40" />
    </ContentLoader>
  );
}

export default PizzaLoader;
