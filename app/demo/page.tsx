"use client";

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  BaseConfigs,
  CloudStorageConfigs,
  GoogleConfigs,
  OneDriveConfigs,
  S3Configs, 
  UploadAdapter,
  UpupUploader,
} from '@bassem97/upup';

// Mock configuration values
const SPACE_SECRET = 'your_space_secret';
const SPACE_KEY = 'your_space_key';
const SPACE_ENDPOINT = 'your_space_endpoint';
const SPACE_REGION = 'your_space_region';
const SPACE_DOCUMENTS = 'your_space_documents';
const SPACE_IMAGES = 'your_space_images';
const ONEDRIVE_CLIENT_ID = 'your_onedrive_client_id';
const GOOGLE_CLIENT_ID = 'your_google_client_id';
const GOOGLE_APP_ID = 'your_google_app_id';
const GOOGLE_API_KEY = 'your_google_api_key';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  min-height: 100vh;
  width: 100%; /* Ensure full width */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row; /* Default layout for larger screens */
  width: 80%;
  max-width: 1200px;
  margin-top: 80px;
  margin-bottom: 20px;

  @media (max-width: 768px) { /* Adjust for tablets and below */
    flex-direction: column;
    align-items: center;
  }
`;

const Sidebar = styled.aside`
  width: 30%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80%; /* Take more width on smaller screens */
    padding-right: 0; /* Remove padding right */
    margin-bottom: 20px; /* Add some space below for separation */
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column; /* Default to vertical layout */
  align-items: flex-start; /* Align items to the start for vertical layout */
  
  @media (max-width: 768px) {
    flex-direction: row; /* Switch to horizontal layout on smaller screens */
    flex-wrap: wrap; /* Allow items to wrap to next line */
    justify-content: flex-start; /* Align items to the start for horizontal layout */
  }
`;

const CheckboxItem = styled.div`
  margin-bottom: 10px; /* Space between checkboxes vertically */
  
  @media (max-width: 768px) {
    flex: 1 0 21%; /* Flex basis of 21% allows for some margin and roughly 4 items per row */
    margin-bottom: 10px; /* Adjust spacing as needed */
    margin-right: 10px; /* Space between checkboxes horizontally */
  }
`;


const StyledCheckbox = styled.input`
  margin-right: 10px;
  accent-color: #007bff;
`;

const Label = styled.label`
  cursor: pointer;
  transition: color 0.3s;
  display: block; /* Ensure label takes the full width of CheckboxItem */

  &:hover {
    color: #007bff;
  }
`;

const UploaderContainer = styled.div`
  width: 70%;

  @media (max-width: 768px) {
    width: 80%; /* Adjust width on smaller screens */
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  ${props => props.disabled && css`
    background-color: #cccccc;
    cursor: not-allowed;
  `}
`;

const Title = styled.h1`
  font-size: 2em;
  padding: 0 20px; /* Add padding for smaller screens */

  @media (min-width: 768px) {
    padding: 0; /* Remove padding for larger screens */
  }
`;

const Description = styled.p`
  font-size: 1em;
  padding: 0 20px; /* Add padding for smaller screens */

  @media (min-width: 768px) {
    padding: 0; /* Remove padding for larger screens */
  }
`;
const SidebarTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px; // Adjust as needed for spacing
  color: #007bff; // Example color, adjust as needed
`;

// Main page component
type ServiceKeys =
  | 'GoogleDrive'
  | 'Dropbox'
  | 'OneDrive'
  | 'Unsplash'
  | 'Box';

type ServicesState = {
  [key in ServiceKeys]: boolean;
};

// Main page component
const Page: React.FC = () => {
  const [canUpload, setCanUpload] = useState(false);
  const [services, setServices] = useState<ServicesState>({
    GoogleDrive: false,
    Dropbox: false,
    OneDrive: false,
    Unsplash: false,
    Box: false,
  });

  // S3 Configurations
  const s3Configs = {
    region: SPACE_REGION,
    endpoint: SPACE_ENDPOINT,
    credentials: {
      accessKeyId: SPACE_KEY,
      secretAccessKey: SPACE_SECRET,
    },
  };

  // Uploader Configurations
  const baseConfigs = {
    canUpload: canUpload,
    setKey: (newKey) => setCanUpload(true), // This should be your logic to handle key changes
  };

  const cloudStorageConfigs = {
    bucket: SPACE_DOCUMENTS,
    s3Configs,
  };

  const googleConfigs = {
    google_api_key: GOOGLE_API_KEY,
    google_app_id: GOOGLE_APP_ID,
    google_client_id: GOOGLE_CLIENT_ID,
  };

  const oneDriveConfigs = {
    onedrive_client_id: ONEDRIVE_CLIENT_ID,
    multiSelect: false,
  };

  // Handler for service checkboxes
  const handleServiceChange = (service: ServiceKeys) => {
    setServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

// Define a mapping from service names to UploadAdapter values
const serviceToAdapterMap: { [K in ServiceKeys]: UploadAdapter } = {
  GoogleDrive: UploadAdapter.GOOGLE_DRIVE,
  Dropbox: UploadAdapter.DROPBOX,
  OneDrive: UploadAdapter.ONE_DRIVE,
  Unsplash: UploadAdapter.UNSPLASH,
  Box: UploadAdapter.BOX,
};

// Calculate the upload adapters based on selected services
const uploadAdapters = [
  UploadAdapter.INTERNAL,
  ...Object.entries(services).reduce((acc: UploadAdapter[], [service, isEnabled]) => {
    if (isEnabled && service in serviceToAdapterMap) {
      acc.push(serviceToAdapterMap[service as ServiceKeys]);
    }
    return acc;
  }, []),
];

  return (
    <Container>
      <Title>Upup File Uploader Demo</Title>
      <Description>
        This is a demonstration of the UpupUploader. Select the sources you want to enable and then click "Enable Upload".
      </Description>
      <ContentContainer>
      <Sidebar>
  <SidebarTitle>Remote Sources</SidebarTitle>
  <CheckboxContainer>
    {Object.keys(services).map((service) => (
      <CheckboxItem key={service}>
        <Label>
          <StyledCheckbox
            type="checkbox"
            checked={services[service as ServiceKeys]}
            onChange={() => handleServiceChange(service as ServiceKeys)}
          />{' '}
          {service}
        </Label>
      </CheckboxItem>
    ))}
  </CheckboxContainer>
</Sidebar>
        <UploaderContainer>
          <UpupUploader
            baseConfigs={baseConfigs}
            cloudStorageConfigs={cloudStorageConfigs}
            googleConfigs={googleConfigs}
            oneDriveConfigs={oneDriveConfigs}
            uploadAdapters={uploadAdapters}
          />
          <button onClick={() => setCanUpload(!canUpload)}>
            {canUpload ? 'Disable' : 'Enable'} Upload
          </button>
        </UploaderContainer>
      </ContentContainer>
    </Container>
  );
};

export default Page;
