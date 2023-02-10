import { Box, Text, Button, Input, Textarea, Select } from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImages } from '~/api/images';
import { uploadReport } from '~/api/reports';
import BxCheck from '~/components/icons/BxCheck';
import BxCurrentLocation from '~/components/icons/BxCurrentLocation';
import FileInput from '~/components/shared/FileInput';
import { ReportType, reportTypes, ReportWithoutId } from '~/types/reports';

type Props = {};

const SubmitReport: FC<Props> = ({}) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<(File | undefined)[]>([undefined]);
  const [details, setDetails] = useState('');
  // const [isAtCurrentLocation, setIsAtCurrentLocation] = useState(false);
  const [type, setType] = useState<ReportType>(reportTypes[0]);
  const [location, setLocation] = useState<google.maps.LatLngLiteral | null>(null);
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
      type,
      comments: [],
      likes: 0,
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

  const handleTypeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as ReportType);
  };

  return (
    <Box display="flex" flexDir="column" gap="24px">
      <Box>
        <Text textStyle="subhead-1" mb="12px">
          Upload photos
        </Text>
        <Box display="flex" flexDir="column" gap="16px">
          {files.map((file, idx) => (
            <FileInput
              key={idx}
              setFile={(file) => {
                if (file) {
                  setFiles([...files.slice(0, idx), file, ...files.slice(idx + 1), undefined]);
                } else {
                  setFiles([...files.slice(0, idx), ...files.slice(idx + 1)]);
                }
              }}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <Text textStyle="subhead-1">Select type of report</Text>
        <Text textStyle="caption-2" mb="12px">
          Who does the issue affect the most?
        </Text>
        <Select value={type} onChange={handleTypeSelect}>
          {reportTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </Box>
      <Box>
        <Text textStyle="subhead-1" mb="12px">
          Provide details of the issue
        </Text>
        <Textarea
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="e.g. There is no ramp at the staircase"
        />
      </Box>
      <Box>
        <Text textStyle="subhead-1">Where did you see it?</Text>
        <Text textStyle="caption-2" mb="12px">
          Please allow the website to acess your current location
        </Text>
        <Button
          leftIcon={location ? <BxCheck /> : <BxCurrentLocation />}
          onClick={getCurrentLocation}
          colorScheme={location ? 'secondary' : 'primary'}
          isLoading={loadingLocation}
          isDisabled={Boolean(location)}
          variant={location ? 'solid' : 'outline'}
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
        <Text textStyle="subhead-1" mb="12px">
          Beside/ Near to/ at...
        </Text>

        <Input
          value={locationDescription}
          onChange={(event) => setLocationDescription(event.target.value)}
          placeholder="e.g. On the steps to the main road"
        />
      </Box>
      <Button onClick={handleUploadReport} colorScheme="primary" w="fit-content">
        Submit Report
      </Button>
    </Box>
  );
};
export default SubmitReport;
