"use client";

import React, { useState, useEffect } from 'react';
import {
  BaseConfigs,
  CloudStorageConfigs,
  GoogleConfigs,
  OneDriveConfigs,
  S3Configs,
  UploadAdapter,
  UpupUploader,
} from '@bassem97/upup';

const Page = () => {
  // States
  const [key, setKey] = useState('');
  const [canUpload, setCanUpload] = useState(false);

  // Checkbox states for remote sources
  const [useGoogleDrive, setUseGoogleDrive] = useState(false);
  const [useDropbox, setUseDropbox] = useState(false);
  const [useInstagram, setUseInstagram] = useState(false);
  const [useFacebook, setUseFacebook] = useState(false);
  const [useUrl, setUseUrl] = useState(false);
  const [useOneDrive, setUseOneDrive] = useState(false);
  const [useUnsplash, setUseUnsplash] = useState(false);
  const [useBox, setUseBox] = useState(false);

  // Update the canUpload state based on selected adapters
  useEffect(() => {
    setCanUpload(
      useGoogleDrive ||
      useDropbox ||
      useInstagram ||
      useFacebook ||
      useUrl ||
      useOneDrive ||
      useUnsplash ||
      useBox
    );
  }, [
    useGoogleDrive,
    useDropbox,
    useInstagram,
    useFacebook,
    useUrl,
    useOneDrive,
    useUnsplash,
    useBox
  ]);

  // Configuration Variables (Assuming you have set these in your .env file)
  const space_secret = process.env.SPACE_SECRET;
  const space_key = process.env.SPACE_KEY;
  const space_endpoint = process.env.SPACE_ENDPOINT;
  const space_region = process.env.SPACE_REGION;
  const document_space = process.env.SPACE_DOCUMENTS;
  const image_space = process.env.SPACE_IMAGES;
  const onedrive_client_id = process.env.ONEDRIVE_CLIENT_ID;
  const google_client_id = process.env.GOOGLE_CLIENT_ID;
  const google_app_id = process.env.GOOGLE_APP_ID;
  const google_api_key = process.env.GOOGLE_API_KEY;

  // Configurations
  const s3Configs: S3Configs = {
      region: space_region,
      endpoint: space_endpoint,
      credentials: {
          accessKeyId: space_key,
          secretAccessKey: space_secret,
      },
  };

  const baseConfigs: BaseConfigs = {
      canUpload: canUpload,
      setKey: setKey,
  };

  const cloudStorageConfigs: CloudStorageConfigs = {
      bucket: document_space,
      s3Configs,
  };

  const googleConfigs: GoogleConfigs = {
      google_api_key,
      google_app_id,
      google_client_id,
  };

  const oneDriveConfigs: OneDriveConfigs = {
      onedrive_client_id,
      multiSelect: false,
  };

  // Create an array of enabled upload adapters based on the checkboxes
  const uploadAdapters = [
    ...(useGoogleDrive ? [UploadAdapter.GOOGLE_DRIVE] : []),
    ...(useDropbox ? [UploadAdapter.DROPBOX] : []),
    ...(useInstagram ? [UploadAdapter.INSTAGRAM] : []),
    ...(useFacebook ? [UploadAdapter.FACEBOOK] : []),
    ...(useUrl ? [UploadAdapter.URL] : []),
    ...(useOneDrive ? [UploadAdapter.ONE_DRIVE] : []),
    ...(useUnsplash ? [UploadAdapter.UNSPLASH] : []),
    ...(useBox ? [UploadAdapter.BOX] : []),
  ];

  return (
    <div>
      <h1>Upload your files</h1>
      {/* Checkboxes to select remote sources */}
      <div>
        <label>
          <input type="checkbox" checked={useGoogleDrive} onChange={() => setUseGoogleDrive(!useGoogleDrive)} />
          Google Drive
        </label>
        <label>
          <input type="checkbox" checked={useDropbox} onChange={() => setUseDropbox(!useDropbox)} />
          Dropbox
        </label>
        <label>
          <input type="checkbox" checked={useInstagram} onChange={() => setUseInstagram(!useInstagram)} />
          Instagram
        </label>
        <label>
          <input type="checkbox" checked={useFacebook} onChange={() => setUseFacebook(!useFacebook)} />
          Facebook
        </label>
        <label>
          <input type="checkbox" checked={useUrl} onChange={() => setUseUrl(!useUrl)} />
          Url
        </label>
        <label>
          <input type="checkbox" checked={useOneDrive} onChange={() => setUseOneDrive(!useOneDrive)} />
          OneDrive
        </label>
        <label>
          <input type="checkbox" checked={useUnsplash} onChange={() => setUseUnsplash(!useUnsplash)} />
          Unsplash
        </label>
        <label>
          <input type="checkbox" checked={useBox} onChange={() => setUseBox(!useBox)} />
          Box
        </label>
      </div>

      {canUpload && ( // Render UpupUploader only if canUpload is true
        <UpupUploader
          baseConfigs={baseConfigs}
          cloudStorageConfigs={cloudStorageConfigs}
          googleConfigs={googleConfigs}
          oneDriveConfigs={oneDriveConfigs}
          uploadAdapters={uploadAdapters}
        />
      )}

      {/* Button to trigger uploads */}
      <button disabled={!canUpload} onClick={() => setCanUpload(true)}>Upload</button>
    </div>
  );
};

export default Page;
