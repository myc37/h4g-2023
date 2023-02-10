import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { fetchReports } from '~/api/reports';
import { Report } from '~/types/reports';

type ReportActions = {
  type: 'SET_REPORTS';
  payload: Report[];
};

type ReportState = {
  reports: Report[];
  status: 'loading' | 'loaded';
};

const initialReportState: ReportState = {
  reports: [],
  status: 'loading',
};

const ReportReducer = (state: ReportState, action: ReportActions): ReportState => {
  switch (action.type) {
    case 'SET_REPORTS':
      return {
        ...state,
        status: 'loaded',
        reports: action.payload,
      };
  }
};

type ReportContextProps = {
  state: ReportState;
  dispatch: (value: ReportActions) => void;
};

export const ReportContext = createContext<ReportContextProps>({ state: initialReportState, dispatch: (val) => {} });

export const ReportProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ReportReducer, initialReportState);

  return <ReportContext.Provider value={{ state, dispatch }}>{children}</ReportContext.Provider>;
};

export default function useReportState() {
  const { state, dispatch } = useContext(ReportContext);

  useEffect(() => {
    const handleFetchReports = async () => {
      const reports = await fetchReports();
      dispatch({ type: 'SET_REPORTS', payload: reports });
    };
    handleFetchReports();
  }, []);

  const getReportById = (id: string | undefined) => {
    if (id) {
      return state.reports.find((report) => report.id === id);
    }
  };

  return {
    isLoading: state.status === 'loading',
    state,
    getReportById,
  };
}
