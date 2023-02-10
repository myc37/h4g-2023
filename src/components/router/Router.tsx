import { lazy, Suspense } from 'react';
import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import Layout from '../shared/Layout';
import Loading from '../shared/Loading';

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));
const ReportScreen = lazy(() => import('~/components/screens/Report'));
const MapScreen = lazy(() => import('~/components/screens/Map'));
const ViewReportScreen = lazy(() => import('~/components/screens/ViewReport'));
const SeedScreen = lazy(() => import('~/components/screens/Seed'));

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/report',
          element: <ReportScreen />,
        },
        {
          path: '/report/:id',
          element: <ViewReportScreen />,
        },
        {
          path: '/map',
          element: <MapScreen />,
        },
        {
          index: true,
          element: <IndexScreen />,
        },
        { path: '/seed', element: <SeedScreen /> },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
