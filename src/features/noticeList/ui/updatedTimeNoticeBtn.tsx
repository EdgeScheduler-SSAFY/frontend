"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { getDay } from "date-fns";

import { Color } from "@/shared/lib/styles/color";
import { ProposalButton } from "@/shared/ui/proposalButton";
import ModalLayout from "@/shared/ui/modalLayout";
import { dayList, MonthList } from "@/shared/lib/data";
import ProposalModal from "@/shared/ui/proposalModal";
import { PatchNoticeRead } from "../api/patchNoticeRead";
import { PostMeetingAccepted } from "@/shared/api/postMeetingAccepted";
import ConversionTimeMini from "../model/conversionTimeMini";
import useNoticeStore from "@/store/noticeStore";

export default function UpdatedTimeNoticeBtn({ data }: { data: any }) {
  const noticeCount = useNoticeStore((state) => state.noticeCount);
  const setNoticeCount = useNoticeStore((state) => state.setNoticeCount);
  const startDate = data.updatedStartTime.split("T")[0];
  const [year, month, date] = startDate.split("-");
  const day = getDay(new Date(startDate));
  const [buttonClicked, setButtonClicked] = useState<string>(data.receiverStatus);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRead, setIsRead] = useState<boolean>(data.isRead);
  const [isButtonShow, setIsButtonShow] = useState(new Date(data.updatedStartTime) <= new Date() ? false : true);

  const isReadHandle = async (isRead: boolean, id: string) => {
    if (!isRead) {
      try {
        await PatchNoticeRead(id);
        setIsRead(true);
        setNoticeCount(noticeCount - 1);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 버튼 클릭 시 상태 변경 함수
  const onClick = (status: string, scheduleId: number) => {
    if (status === "attend") {
      PostMeetingAccepted(scheduleId);
      setButtonClicked("ACCEPTED");
    } else if (status === "absence") {
      setIsModalOpen(true);
    }
  };

  return (
    <UpdatedTimeNoticeLayout
      $isRead={isRead}
      onClick={() => {
        isReadHandle(isRead, data.id);
      }}
    >
      <NoticeTitle>
        <NoticeTitleDetail>
          <div>{data.organizerName}&nbsp;</div>
          <CategoryDiv>updated&nbsp;</CategoryDiv>
          <div>the meeting schedule.</div>
        </NoticeTitleDetail>
      </NoticeTitle>
      <TitleLineDiv />
      <NoticeContent>
        <ScheduleDiv>
          <MonthDiv>{MonthList[parseInt(month) - 1]}</MonthDiv>
          <DateDiv>{date}</DateDiv>
          <DotLineDiv />
          <DayDiv>{dayList[day]}</DayDiv>
        </ScheduleDiv>
        <LineDiv />
        <InfoDiv>
          <TitleDiv>{data.scheduleName}</TitleDiv>
          <TimeDiv>
            <ConversionTimeMini start={data.updatedStartTime} end={data.updatedEndTime} />
          </TimeDiv>
          {isButtonShow && (
            <ProposalButton
              buttonClicked={buttonClicked}
              onClickAttend={() => onClick("attend", data.scheduleId)}
              onClickAbsence={() => onClick("absence", data.scheduleId)}
              width={3.5}
              height={1.8}
              fontSize={10}
            />
          )}
        </InfoDiv>
      </NoticeContent>
      <ModalLayout
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen((prev) => !prev);
        }}
      >
        <ProposalModal
          eventData={data}
          onClose={() => {
            setIsModalOpen((prev) => !prev);
          }}
        />
      </ModalLayout>
    </UpdatedTimeNoticeLayout>
  );
}

const UpdatedTimeNoticeLayout = styled.div<{ $isRead: boolean }>`
  width: 17rem;
  height: 7rem;
  border: 2px solid ${Color("black100")};
  border-radius: 10px;
  background-color: ${(props) => (props.$isRead ? Color("black50") : "white")};
  font-size: 13px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${Color("black50")};
  }
`;

const NoticeTitle = styled.div`
  font-size: 11px;
  width: 17rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-top: 0.5rem;
`;

const NoticeTitleDetail = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryDiv = styled.div`
  color: ${Color("blue")};
  font-weight: 600;
`;

const TitleLineDiv = styled.hr`
  width: 90%;
  margin: 0.3rem 1rem;
  border: 0.5px solid ${Color("black100")};
`;

const NoticeContent = styled.div`
  display: flex;
  width: 100%;
  height: 4.5rem;
`;

const ScheduleDiv = styled.div`
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const MonthDiv = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const DateDiv = styled.div`
  font-size: 15px;
  font-weight: 900;
`;

const DotLineDiv = styled.hr`
  width: 80%;
  margin: 0;
  border: 0.5px dashed ${Color("black100")};
`;

const DayDiv = styled.div``;

const LineDiv = styled.div`
  width: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 10px;
  background-color: ${Color("blue")};
`;

const InfoDiv = styled.div`
  width: 14rem;
  height: 100%;
`;

const TitleDiv = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const TimeDiv = styled.div`
  font-size: 12px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`;
