"use client";

import { IKVideo } from "imagekitio-next";

interface VideoType {
  path: string;
  className?: string;
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = ({ path, className }: VideoType) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      controls={true}
      transformation={[
        { height: "1080", width: "1920", q: "90" },
        { raw: "l-text,i-mex,fs-50,co-white,lfo-bottom_right,l-end" },
      ]}
    />
  );
};

export default Video;
