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

export const seedReports = async () => {
  return await Promise.all(dummyReports.map((report) => uploadReport(report)));
};
