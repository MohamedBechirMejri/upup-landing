'use client';

import React, { useState } from 'react'; // Import useState from React
import {
    BaseConfigs,
    CloudStorageConfigs,
    GoogleConfigs,
    OneDriveConfigs,
    S3Configs, // Assuming S3Configs is what you intend to use
    UploadAdapter,
    UpupUploader,
} from '@bassem97/upup';
const Page = () => {
  // States
  const [key, setKey] = useState('');
  const [canUpload, setCanUpload] = useState(false);

  // Configuration Variables
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
  return (
    <div>
        <UpupUploader
            baseConfigs={baseConfigs}
            cloudStorageConfigs={cloudStorageConfigs}
            googleConfigs={googleConfigs}
            oneDriveConfigs={oneDriveConfigs}
            uploadAdapters={[
                UploadAdapter.INTERNAL,
                UploadAdapter.GOOGLE_DRIVE,
                UploadAdapter.ONE_DRIVE,
            ]}
        />
        <button onClick={() => setCanUpload(true)}>Upload</button>
    </div>
);
};

export default Page;