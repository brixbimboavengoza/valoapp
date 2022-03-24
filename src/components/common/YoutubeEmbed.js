import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      autoPlay={false}
      src={`https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;