import exp from "constants";
import { ColorName } from "./types";

export interface MeetingData {
  name: string;
  description: string;
  type: string;
  color: number;
  startDatetime: string;
  endDatetime: string;
  runningTime: number;
  period: { start: string; end: string };
  isPublic: boolean;
  isRecurrence: boolean;
  memberList: { user: userList; isRequired: boolean }[];
}

export interface selectList {
  value: number | string;
  option: string;
}

export interface userList {
  id: number;
  name: string;
  profile: string;
  zoneId: string;
  department: string;
}

export interface developmentType {
  name: string;
  folded: boolean;
}

export interface ScheduleComponentProps {
  setParentStartIndex: (timeIndex: number) => void;
  setParentEndIndex: (timeIndex: number) => void;
}

export interface vipDivProps {
  vipperson: boolean;
} //필수 사람 선택용

export interface timeStampProps {
  personindex: number;
  timeindex: number;
  children?: React.ReactNode;
}

export interface timeDivProps {
  selected: number;
  personindex: number;
  timeindex: number;
  startindex: number;
  endindex: number;
} // selected는 되는 시간 체크용, timeIndex는 meetingScope 설정 시 border 색깔 바꾸기 위함

export interface RecommendTimeDivProps {
  timeindex: number;
  startindex: number;
  endindex: number;
} // selected는 되는 시간 체크용, timeIndex는 meetingScope 설정 시 border 색깔 바꾸기 위함

export interface NoticeState {
  [key: string]: {
    state: any;
    eventType: string;
  };
}

export interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export interface DeclineMeetingData {
  status: string;
  reason: string;
  startDatetime: string;
  endDatetime: string;
}

export interface RetrieveData {
  retrieverId?: number;
  scheduleId: number;
  startDatetime: string;
  endDatetime: string;
}

export interface MemberList {
  memberId: number;
  memberName: string;
  isRequired: boolean;
}

export interface NoticeLogoProps {
  type: string;
  month: number;
  day: number;
  date: Date;
  response?: string;
}

export interface PaginationProps {
  totalElements: number; // 데이터 총 개수
  totalPages: number; // 전체 페이지 개수
  currentPage: number; // 현재 페이지
  setPage: (page: number) => void;
}

export interface ProposalButtonProps {
  buttonClicked: string;
  onClickAttend: () => void;
  onClickAbsence: () => void;
  width?: number;
  height?: number;
  fontSize?: number;
}
