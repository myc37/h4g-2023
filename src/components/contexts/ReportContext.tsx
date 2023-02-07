import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { Report } from '~/types/reports';

type ReportActions = {
  type: 'SET_REPORTS';
  payload: Report[];
};

type ReportState = {
  reports: Report[];
};

const initialReportState: ReportState = {
  reports: [],
};

const ReportReducer = (state: ReportState, action: ReportActions): ReportState => {
  switch (action.type) {
    case 'SET_REPORTS':
      return {
        ...state,
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
    dispatch({ type: 'SET_REPORTS', payload: [] });
  }, []);

  return {
    state,
  };
}
