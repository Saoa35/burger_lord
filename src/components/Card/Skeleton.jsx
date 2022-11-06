import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={0}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="0" rx="25" ry="25" width="240" height="240" />
    <rect x="47" y="262" rx="0" ry="0" width="160" height="27" />
    <rect x="1" y="308" rx="15" ry="15" width="258" height="85" />
    <rect x="1" y="410" rx="0" ry="0" width="100" height="25" />
    <rect x="64" y="427" rx="0" ry="0" width="0" height="1" />
    <rect x="108" y="401" rx="22" ry="22" width="155" height="45" />
  </ContentLoader>
);

export default Skeleton;
