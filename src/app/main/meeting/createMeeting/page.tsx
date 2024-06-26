'use client';
import styled from 'styled-components';
import { Noto_Sans_KR } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { runningTime, intervalTime } from '@/shared/lib/data';
import { developmentType, userList } from '@/shared/lib/type';
import { Color } from '@/shared/lib/styles/color';
import Label from '@/shared/ui/label';
import Input from '@/shared/ui/input';
import SelectTime from '@/shared/ui/selectTime';
import TextArea from '@/shared/ui/textArea';
import useMeetStore, { MeetState } from '@/store/meetStore';
import { MiniCalendar, fetchWithInterceptor } from '@/shared';
import ButtonBox from './ui/buttonBox';
import { filterUserList, highlightSearchTerm } from './model/searchUtils';

const noto = Noto_Sans_KR({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function CreateMeeting() {
  // 회의 정보
  const router = useRouter();
  const {
    setMeetName,
    setStartDatetime,
    setEndDatetime,
    setRunningTime,
    setMemberList,
    setDescription,
    setIsUpdate,
    description,
    endDatetime,
    meetName,
    memberList,
    runningtime,
    startDatetime,
    isUpdate,
  } = useMeetStore((state: MeetState) => state);

  console.log('startDatetime : ' + startDatetime);
  console.log('endDatetime : ' + endDatetime);

  const [userLists, setUserLists] = useState<userList[]>([]); // 유저 리스트
  const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어
  const [showSearchList, setShowSearchList] = useState(false); // 검색 리스트 표시 여부
  const searchRef = useRef<HTMLDivElement>(null);
  const [isFolded, setIsFolded] = useState(true); // 전체 부서 주소록
  const [teamStates, setTeamStates] = useState<developmentType[]>([]); // 각 부서에 대한 상태를 관리할 배열
  const [clickedUsers, setClickedUsers] = useState<{
    [userId: number]: boolean;
  }>({}); // 클릭 여부 사용자 ID 기준
  const [showStartMiniCalendar, setShowStartMiniCalendar] = useState<boolean>(false);
  const [showEndMiniCalendar, setShowEndMiniCalendar] = useState<boolean>(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [disabledIndex, setDisabledIndex] = useState<number>(0);
  const [sameDate, setSameDate] = useState<boolean>(true);
  const [todayDate, setTodayDate] = useState<boolean>(true);

  // 현재시간 구하기
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  // 현재 시간을 분 단위로 변환
  const totalCurrentMinutes = currentHours * 60 + currentMinutes;

  // intervalTime 배열에서 현재 시간 이후의 시간들을 추출하여 새 배열 생성
  const futureTimes = intervalTime.filter((time) => {
    const [hours, minutes] = time.value.split(':');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    return totalMinutes > totalCurrentMinutes;
  });

  // 첫 번째 시간의 인덱스를 구하기
  const standardIndex = intervalTime.findIndex((time) => time.value === futureTimes[0]?.value);
  // 세션 스토리지에서 사용자 정보를 가져와서 사용자 ID를 설정
  const [sessionUserId, setSessionUserId] = useState<number>(0);

  useEffect(() => {
    setSessionUserId(JSON.parse(sessionStorage.getItem('user') || '{}').id);
  }, []);

  useEffect(() => {
    const userItem = sessionStorage.getItem('user');
    if (userItem && !isUpdate) {
      setMemberList([{ user: JSON.parse(userItem), isRequired: true }]);

      setClickedUsers((prev) => ({
        ...prev,
        [JSON.parse(userItem).id]: true,
      }));
      return;
    }
    memberList.forEach((member) => {
      console.log('member:', member.user.id);
      setClickedUsers((prev) => ({
        ...prev,
        [member.user.id]: true,
      }));
    });
  }, []);

  // 검색어 입력 시 호출되는 함수
  const searchInputChangehandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // 검색어가 비어있으면 검색 리스트를 닫음
    setShowSearchList(e.target.value !== '');
  };

  // 외부를 클릭하면 검색 리스트를 닫음
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchList(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 전체 주소록 상태 변경
  const toggleFold = () => {
    setIsFolded((prev: boolean) => !prev);
  };

  // 특정 부서의 상태를 변경
  const toggleTeamFold = (index: number) => {
    setTeamStates((prev) => prev.map((team, i) => (i === index ? { ...team, folded: !team.folded } : team)));
  };

  // 회의시간 값이 변경될 때 실행될 함수
  const runningTimeChangeHandle = (value: number | string) => {
    setRunningTime(value as number);
  };

  // 시작날짜 값이 변경될 때 실행될 함수
  const startDateHandle = (selectedDate: Date) => {
    setSelectedStartDate(selectedDate);
    setTodayDate(selectedDate.getDate() === new Date().getDate());
    // 끝 날짜가 더 빠를 때만 변경
    if (selectedDate > selectedEndDate) {
      setSelectedEndDate(selectedDate);
    }
    const year = selectedDate.getFullYear();
    const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
    const date = ('0' + selectedDate.getDate()).slice(-2);
    const startTime = startDatetime.split('T')[1]; // 기존 시작 시간

    setStartDatetime(`${year}-${month}-${date}T${startTime}`);
  };

  // 시작시간 값이 변경될 때 실행될 함수
  const startTimeChangeHandle = (value: number | string) => {
    console.log('startTimeChange : ', value);
    const startDate = startDatetime.split('T')[0]; // 기존 시작 날짜
    setStartDatetime(`${startDate}T${value}`);
    setDisabledIndex(intervalTime.findIndex((option) => option.value === value) + 1);
  };

  // 끝날짜 값이 변경될 때 실행될 함수
  const endDateHandle = (selectedDate: Date) => {
    setSelectedEndDate(selectedDate);
    const year = selectedDate.getFullYear();
    const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
    const date = ('0' + selectedDate.getDate()).slice(-2);
    const endTime = endDatetime.split('T')[1]; // 기존 시작 시간
    setEndDatetime(`${year}-${month}-${date}T${endTime}`);

    // 두 날짜가 같은지 확인
    setSameDate(selectedDate.getDate() === selectedStartDate.getDate());
  };

  // 끝시간 값이 변경될 때 실행될 함수
  const endTimeChangeHandle = (value: number | string) => {
    const endDate = endDatetime.split('T')[0]; // 기존 시작 날짜
    setEndDatetime(`${endDate}T${value}`);
  };

  // 사용자 버튼 클릭 이벤트
  const userButtonClickHandle = (clickedMember: { user: userList; isRequired: boolean }) => {
    if (clickedMember.user.id === sessionUserId) return;
    const clickedUser = userLists.find((user) => user.id === clickedMember.user.id);
    // 이미 참가자 목록에 있는 사용자인지 확인
    const isParticipant = memberList.some((member) => member.user.id === clickedMember.user.id);

    // 참가자 목록에 추가된 사용자라면 제거, 추가되지 않은 사용자라면 추가
    if (clickedUser && isParticipant) {
      setMemberList(memberList.filter((member) => member.user.id !== clickedMember.user.id));
    } else {
      if (clickedUser) {
        setMemberList([...memberList, { user: clickedUser, isRequired: false }]);
      }
    }

    setClickedUsers((prev) => ({
      ...prev,
      [clickedMember.user.id]: !prev[clickedMember.user.id],
    }));

    setSearchTerm('');
    setShowSearchList(false);
  };

  // 참가자 div에서 제거
  const participantRemoveHandle = (userId: number) => {
    if (userId === sessionUserId) return;
    setMemberList(memberList.filter((member) => member.user.id !== userId));

    setClickedUsers((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  // 필수 / 선택 여부 전환 이벤트
  const optionalButtonClickHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, userId: number) => {
    e.stopPropagation(); // 이벤트 버블링 중단
    if (userId === sessionUserId) return;

    setMemberList(
      memberList.map((member) => {
        if (member.user.id === userId) {
          return { ...member, isRequired: !member.isRequired };
        }
        return member;
      })
    );
  };

  const cancelHandle = () => {
    router.push('/main/schedule');
  };
  const nextHandle = () => {
    router.push('./meetingSchedule');
  };

  useEffect(() => {
    fetchWithInterceptor('https://user-service.edgescheduler.co.kr/members')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserLists(data);
        const developmentSet: Set<string> = new Set(data.map((user: userList) => user.department));
        const teamSet: developmentType[] = Array.from(developmentSet).map((name) => ({
          name,
          folded: true,
        }));
        setTeamStates(teamSet);
      });
  }, []); // 멤버 리스트 불러오기

  return (
    <MainLayout>
      <CreateWidget>
        <CreateForm>
          <AddressDiv>
            <Label htmlFor="addressbook" width={20}>
              Address Book
            </Label>
            <InlineDiv>
              <SearchBox>
                <Input
                  id="addressbook"
                  type="text"
                  width={20}
                  placeholder="Please enter a search term."
                  value={searchTerm}
                  onChange={searchInputChangehandle}
                  onFocus={() => {
                    if (searchTerm !== '') setShowSearchList(true);
                  }}
                />
              </SearchBox>
            </InlineDiv>
            {showSearchList && (
              <SearchDiv ref={searchRef}>
                <SearchList>
                  {filterUserList(userLists, searchTerm).length > 0 ? (
                    filterUserList(userLists, searchTerm).map((member) => (
                      <SearchListOption
                        key={member.id}
                        onClick={() =>
                          userButtonClickHandle({
                            user: member,
                            isRequired: false,
                          })
                        }
                      >
                        <ProfileImage src="/images/profile.webp" alt="프로필사진" width={20} height={20} />
                        <UserName>{highlightSearchTerm(member.name, searchTerm)}</UserName>
                        <Department>{member.department}</Department>
                      </SearchListOption>
                    ))
                  ) : (
                    <SearchListOption onClick={undefined}>No one matches your search term😥</SearchListOption>
                  )}
                </SearchList>
              </SearchDiv>
            )}
            <AdressBookDiv>
              <ButtonFold onClick={toggleFold} className={noto.className}>
                {isFolded ? <MdKeyboardArrowRight size={16} /> : <MdKeyboardArrowDown size={16} />}
                부서 주소록
              </ButtonFold>
              {!isFolded && (
                <LnbTree>
                  {teamStates.map((team, index) => (
                    <li key={team.name}>
                      <LnbSubTree>
                        <MenuItem>
                          <ButtonFold onClick={() => toggleTeamFold(index)} className={noto.className}>
                            {team.folded ? <MdKeyboardArrowRight size={16} /> : <MdKeyboardArrowDown size={16} />}
                            {team.name}
                          </ButtonFold>
                        </MenuItem>
                        {!team.folded && (
                          <li>
                            {userLists
                              .filter((member) => member.department === team.name)
                              .map((member) => (
                                <MenuItem key={member.id}>
                                  <UserButton
                                    $isClicked={clickedUsers[member.id]}
                                    onClick={() =>
                                      userButtonClickHandle({
                                        user: member,
                                        isRequired: false,
                                      })
                                    }
                                    className={noto.className}
                                  >
                                    <ProfileImage src="/images/profile.webp" alt="프로필사진" width={25} height={25} />
                                    <UserName>{member.name}</UserName>
                                    <TimeZone>{member.zoneId}</TimeZone>
                                  </UserButton>
                                </MenuItem>
                              ))}
                          </li>
                        )}
                      </LnbSubTree>
                    </li>
                  ))}
                </LnbTree>
              )}
            </AdressBookDiv>
          </AddressDiv>
          <InformationDiv>
            <InlineDiv>
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                type="text"
                width={33}
                placeholder="Please enter a title."
                value={meetName}
                onChange={(e) => setMeetName(e.target.value)}
              ></Input>
            </InlineDiv>
            <InlineDiv>
              <Label htmlFor="time">Time</Label>
              <SelectTime
                id="time"
                options={runningTime}
                standardIdx={runningtime / 15 - 1}
                show={false}
                width={10}
                onSelectChange={runningTimeChangeHandle}
              ></SelectTime>
            </InlineDiv>
            <div>
              <Label htmlFor="period">Period</Label>
              <PeriodDiv id="period">
                <DateButton onClick={() => setShowStartMiniCalendar((prev) => !prev)}>
                  {selectedStartDate.getFullYear()}.{('0' + (selectedStartDate.getMonth() + 1)).slice(-2)}.
                  {('0' + selectedStartDate.getDate()).slice(-2)}
                </DateButton>
                {showStartMiniCalendar && (
                  <StartCalendarDiv>
                    <MiniCalendar
                      selectDate={startDateHandle}
                      selectedDate={selectedStartDate}
                      close={() => setShowStartMiniCalendar(false)}
                      view="day"
                      $standardDate={new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </StartCalendarDiv>
                )}
                <SelectTime
                  options={intervalTime}
                  show={false}
                  width={7}
                  onSelectChange={startTimeChangeHandle}
                  standardIdx={todayDate ? standardIndex : 0}
                  disabledIndex={todayDate ? standardIndex - 1 : -1}
                  disabledLastIndex={sameDate ? intervalTime.length - 1 : intervalTime.length}
                ></SelectTime>

                <LineDiv>-</LineDiv>
                <DateButton onClick={() => setShowEndMiniCalendar((prev) => !prev)}>
                  {selectedEndDate.getFullYear()}.{('0' + (selectedEndDate.getMonth() + 1)).slice(-2)}.
                  {('0' + selectedEndDate.getDate()).slice(-2)}
                </DateButton>
                {showEndMiniCalendar && (
                  <EndCalendarDiv>
                    <MiniCalendar
                      selectDate={endDateHandle}
                      selectedDate={selectedEndDate}
                      close={() => setShowEndMiniCalendar(false)}
                      view="day"
                      $standardDate={selectedStartDate}
                    />
                  </EndCalendarDiv>
                )}
                <SelectTime
                  options={intervalTime}
                  show={false}
                  width={7}
                  onSelectChange={endTimeChangeHandle}
                  standardIdx={
                    todayDate ? standardIndex + runningtime / 15 : sameDate ? disabledIndex + runningtime / 15 - 1 : 0
                  }
                  disabledIndex={
                    todayDate
                      ? standardIndex + runningtime / 15 - 1
                      : sameDate
                      ? disabledIndex + runningtime / 15 - 2
                      : -1
                  }
                ></SelectTime>
              </PeriodDiv>
            </div>
            <div>
              <Label htmlFor="detail">Detail</Label>
              <div id="detail">
                <TextArea
                  placeholder="Please enter a detail."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="participant">Participant</Label>
              <ParticipantDiv id="participant">
                {memberList.map((member) => {
                  const user = userLists.find((user) => user.id === member.user.id);
                  return (
                    <div key={member.user.id}>
                      {user ? (
                        <ParticipantInfoDiv
                          $isOranizer={member.user.id === JSON.parse(sessionStorage.getItem('user') || '{}').id}
                          onClick={() => participantRemoveHandle(member.user.id)}
                        >
                          <div>
                            <ProfileImage src="/images/profile.webp" alt="프로필사진" width={25} height={25} />
                          </div>
                          <RestDiv>
                            <UserName>{user.name}</UserName>
                            <UserDepartment>{user.department}</UserDepartment>
                          </RestDiv>
                          <div>
                            <OptionalButton
                              className={noto.className}
                              onClick={(e) => optionalButtonClickHandle(e, member.user.id)}
                              $isRequired={member.isRequired}
                            >
                              {member.isRequired ? 'required' : 'optional'}
                            </OptionalButton>
                          </div>
                        </ParticipantInfoDiv>
                      ) : (
                        <div>Unknown</div>
                      )}
                    </div>
                  );
                })}
              </ParticipantDiv>
            </div>
          </InformationDiv>
        </CreateForm>
        <ButtonBox handleCancel={cancelHandle} handleNext={nextHandle} />
      </CreateWidget>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 100%;
  min-height: calc(100% - 50px);
`;

const CreateWidget = styled.div`
  padding: 2rem 5rem;
`;

const CreateForm = styled.div`
  display: flex;
`;

const AddressDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-right: 3rem;
`;

const InformationDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
`;

const InlineDiv = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
`;

const SearchBox = styled.div`
  position: relative;
`;
const SearchDiv = styled.div`
  position: absolute;
  top: 11rem;
  width: 20rem;
  padding: 0 0.7rem;
  background-color: white;
  border: 1px solid ${Color('black200')};
  border-radius: 3px;
  z-index: 1;
`;

const SearchList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  font-size: 12px;
`;

const SearchListOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 2rem;
  line-height: 2rem;
  margin: 0.2rem 0;
  border-radius: 3px;
  cursor: pointer;
`;

const PeriodDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: start;
`;

const AdressBookDiv = styled.div`
  overflow-y: scroll;
  width: 20rem;
  padding: 0.5rem 0.7rem;
  border: 1px solid ${Color('black200')};
  border-radius: 3px;
  font-size: 14px;
  height: 24rem;
  margin-top: 0.5rem;
`;

const ParticipantDiv = styled.div`
  overflow-y: scroll;
  width: 77%;
  padding: 0.5rem 0.7rem;
  font-size: 14px;
  height: 8rem;
  border: 1px solid ${Color('black200')};
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const ButtonFold = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: Color('black');
  font-weight: 700;
`;

const LnbTree = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
`;

const LnbSubTree = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`;

const UserButton = styled.button<{ $isClicked: boolean }>`
  width: 13rem;
  height: 2.5rem;
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: flex-start;
  position: relative;
  margin-left: 1rem;
  transition: all 0.2s ease-in;
  background-color: ${(props) => (props.$isClicked ? Color('yellow100') : Color('black50'))};
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const UserName = styled.div`
  font-size: 13.5px;
  font-weight: 600;
  margin-right: 0.3rem;
`;

const TimeZone = styled.div`
  font-size: 10px;
  position: absolute;
  right: 0.8rem;
`;

const Department = styled.div`
  color: ${Color('black300')};
`;
const ParticipantInfoDiv = styled.div<{ $isOranizer: boolean }>`
  border: 1px solid ${Color('black200')};
  border-radius: 10px;
  padding: 0.5rem;
  width: 10.3rem;
  height: 3rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 0.2rem;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${(props) => (props.$isOranizer ? '' : Color('orange50'))};
    cursor: pointer;
  }
`;

const UserDepartment = styled.div`
  font-size: 10px;
`;

const OptionalButton = styled.button<{ $isRequired: boolean }>`
  border: 1px solid ${(props) => (props.$isRequired ? Color('blue600') : Color('black200'))};
  color: ${(props) => (props.$isRequired ? Color('blue600') : Color('black200'))};
  border-radius: 2px;
  background: none;
  width: 2.7rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  z-index: 1;
  background-color: ${Color('white')};
`;

const RestDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  width: 5rem;
`;

const StartCalendarDiv = styled.div`
  position: relative;
  top: -4rem;
  left: -15rem;
`;

const EndCalendarDiv = styled.div`
  position: relative;
  top: -4rem;
  left: -15rem;
`;

const DateButton = styled.div`
  width: 5rem;
  height: 2rem;
  background: none;
  border: 1px solid ${Color('black200')};
  border-radius: 3px;
  cursor: pointer;
  margin-right: 0.5rem;
  padding: 0.1rem 0.7rem;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const LineDiv = styled.div`
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Color('black')};
`;
