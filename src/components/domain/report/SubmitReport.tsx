import { Box, Text } from '@chakra-ui/react';
import { Attachment, Button, BxCheck, FormLabel, Input, Textarea } from '@opengovsg/design-system-react';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImages } from '~/api/images';
import { uploadReport } from '~/api/reports';
import BxCurrentLocation from '~/components/icons/BxCurrentLocation';
import { LatLng, ReportWithoutId } from '~/types/reports';

type Props = {};

const SubmitReport: FC<Props> = ({}) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<(File | undefined)[]>([undefined]);
  const [details, setDetails] = useState('');
  // const [isAtCurrentLocation, setIsAtCurrentLocation] = useState(false);
  const [location, setLocation] = useState<LatLng | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationDescription, setLocationDescription] = useState('');

  const handleUploadReport = async () => {
    if (!location) {
      return;
    }

    const imgFullPaths = await uploadImages(files);

    const reportWithoutId: ReportWithoutId = {
      imgFullPaths,
      details,
      location,
      locationDescription,
      comments: [],
    };

    const { id } = await uploadReport(reportWithoutId);
    navigate(`/map?id=${id}`);
  };

  const getCurrentLocation = () => {
    setLoadingLocation(true);
    window.navigator.geolocation.getCurrentPosition((data) => {
      const { coords } = data;
      const { latitude: lat, longitude: lng } = coords;
      setLocation({ lat, lng });
      setLoadingLocation(false);
    });
  };

  return (
    <Box display="flex" flexDir="column" gap="24px">
      <Box>
        <FormLabel>Upload photos</FormLabel>
        <Box display="flex" flexDir="column" gap="16px">
          {files.map((file, idx) => (
            <Attachment
              key={idx}
              name="image upload"
              value={file}
              onChange={(file) => {
                if (file) {
                  setFiles((files) => [...files.slice(0, idx), file, ...files.slice(idx + 1), undefined]);
                } else {
                  setFiles((files) => [...files.slice(0, idx), ...files.slice(idx + 1)]);
                }
              }}
              imagePreview="small"
              accept="image/*"
            />
          ))}
        </Box>
      </Box>
      <Box>
        <FormLabel isRequired>Provide details of the issue</FormLabel>
        <Textarea
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="e.g. There is no ramp at the staircase"
        />
      </Box>
      <Box>
        <FormLabel mb="0" isRequired>
          Where did you see it?
        </FormLabel>
        <Text textStyle="caption-2" mb="8px">
          Please allow the website to acess your current location
        </Text>
        <Button
          leftIcon={location ? <BxCheck /> : <BxCurrentLocation />}
          onClick={getCurrentLocation}
          colorScheme={location ? 'success' : 'brand.primary'}
          isLoading={loadingLocation}
        >
          At my current location
        </Button>
        {/* <Checkbox isChecked={isAtCurrentLocation} onChange={(event) => setIsAtCurrentLocation(event.target.checked)}>
          At my current location
          <Text display={{ md: 'inline' }} textStyle="caption-2" ml={{ md: '8px' }}>
            (*Please allow the website to access your location)
          </Text>
        </Checkbox>
        {!isAtCurrentLocation ? (
          <Input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="e.g. Blk 426 Ang Mo Kio Ave 3"
          />
        ) : null} */}
      </Box>
      <Box>
        <FormLabel>Beside/ Near to/ at...</FormLabel>
        <Input
          value={locationDescription}
          onChange={(event) => setLocationDescription(event.target.value)}
          placeholder="e.g. On the steps to the main road"
        />
      </Box>
      <Button onClick={handleUploadReport}>Submit Report</Button>
    </Box>
  );
};
export default SubmitReport;
