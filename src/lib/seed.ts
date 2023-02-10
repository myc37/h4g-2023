import { uploadReport } from '~/api/reports';
import { ReportWithoutId } from '~/types/reports';

export const dummyReports: ReportWithoutId[] = [
  {
    imgFullPaths: ['images/standard.jpeg'],
    details: 'There is no ramp for the set of stairs at the entrance of the building.',
    location: { lat: 1.302917, lng: 103.833295 },
    locationDescription:
      'The entrance of the building located at the corner of Jalan Besar and Upper Pickering Street.',
    comments: [
      {
        author: 'John Doe',
        content: 'This is a serious issue. We need to address this as soon as possible.',
        createdAt: 1623333457000,
      },
      {
        author: 'Jane Doe',
        content: 'I agree with John. This is affecting a lot of people in the area.',
        createdAt: 1623333467000,
      },
    ],
    likes: 5,
    type: 'Mobility issues',
  },
  {
    imgFullPaths: ['images/2-Image-2-4.jpeg'],
    details: 'The sound system in the train station is not loud enough for people with auditory issues.',
    location: { lat: 1.292448, lng: 103.78588 },
    locationDescription: 'The train station located near Tanjong Pagar Road.',
    comments: [
      {
        author: 'Alex Smith',
        content: 'I have trouble hearing the announcements every time I pass by this station.',
        createdAt: 1623333477000,
      },
      {
        author: 'Emily Brown',
        content: "Same here. It's a safety concern for people with auditory issues.",
        createdAt: 1623333487000,
      },
    ],
    likes: 3,
    type: 'Auditory issues',
  },
  {
    imgFullPaths: ['images/231366_9lUyP84HLP2O9tGmQyBSe29QJH9gXfcA8socogUjDrk.jpeg'],
    details: 'The pedestrian crossing sign is not bright enough for people with visual impairments.',
    location: { lat: 1.279037, lng: 103.846144 },
    locationDescription: 'The pedestrian crossing sign located at the junction of Bukit Timah Road and Farrer Road.',
    comments: [
      {
        author: 'Ryan Lee',
        content: "I almost got hit by a car because I couldn't see the sign.",
        createdAt: 1623333497000,
      },
      {
        author: 'Sophia Lee',
        content: 'This is a serious issue. The sign needs to be brighter for safety reasons.',
        createdAt: 1623333507000,
      },
    ],
    likes: 2,
    type: 'Visual impairment',
  },
  {
    imgFullPaths: ['images/download.jpeg'],
    details: 'The elevator in the shopping mall is not wide enough for wheelchairs.',
    location: { lat: 1.29503, lng: 103.855751 },
    locationDescription: 'The shopping mall located near the junction of Orchard Road and Scotts Road.',
    comments: [
      {
        author: 'Michael Nguyen',
        content: 'I have trouble using the elevator with my wheelchair every time I visit this mall.',
        createdAt: 1623333517000,
      },
      {
        author: 'Jessica Wong',
        content: 'Same here. This needs to be addressed as soon as possible.',
        createdAt: 1623333527000,
      },
    ],
    likes: 4,
    type: 'Mobility issues',
  },
];

export const dummyReports2: ReportWithoutId[] = [
  {
    imgFullPaths: ['images/Admiralty Park play areas.jpeg'],
    details: 'There are no Braille signs for people with visual impairments in the public park.',
    location: { lat: 1.283614, lng: 103.84507 },
    locationDescription: 'The public park located near the junction of Holland Road and Commonwealth Avenue.',
    comments: [
      {
        author: 'David Lee',
        content: 'I have trouble finding my way around the park without Braille signs.',
        createdAt: 1623333537000,
      },
      {
        author: 'Rachel Tan',
        content: 'This is a serious issue. The park should be accessible for everyone.',
        createdAt: 1623333547000,
      },
    ],
    likes: 3,
    type: 'Visual impairment',
  },
  {
    imgFullPaths: ['images/alliance_francaise.jpeg'],
    details: 'The audio system in the movie theater is not compatible with hearing aids.',
    location: { lat: 1.299229, lng: 103.760827 },
    locationDescription: 'The movie theater located near the junction of Beach Road and North Bridge Road.',
    comments: [
      {
        author: 'William Tan',
        content: 'I have trouble enjoying movies at this theater because of the audio system.',
        createdAt: 1623333557000,
      },
      {
        author: 'Amanda Lee',
        content: 'Same here. This is a major inconvenience for people with auditory issues.',
        createdAt: 1623333567000,
      },
    ],
    likes: 2,
    type: 'Auditory issues',
  },
  {
    imgFullPaths: ['images/public-transport-singapore-bus-interior-900x643.webp'],
    details: 'There are no audio announcements in the bus for people with visual impairments.',
    location: { lat: 1.298564, lng: 103.841312 },
    locationDescription: 'The bus stop located near the junction of Orchard Road and Paterson Road.',
    comments: [
      {
        author: 'James Lee',
        content: 'I have trouble knowing when my stop is coming up without audio announcements.',
        createdAt: 1623333577000,
      },
      {
        author: 'Emily Tan',
        content:
          'This is a major inconvenience for people with visual impairments. The bus should have audio announcements.',
        createdAt: 1623333587000,
      },
    ],
    likes: 1,
    type: 'Visual impairment',
  },
];

export const seedReports = async () => {
  return await Promise.all(dummyReports2.map((report) => uploadReport(report)));
};
