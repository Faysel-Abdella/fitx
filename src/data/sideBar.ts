import assets from "@/assets";

const sideBarContent: {
  order: string;
  mainTitle: string;
  init: string;
  firstRoute: string;
  icon: string;
  activeIcon: string;
  subTitles: {
    label: string;
    route: string;
  }[];
}[] = [
  {
    order: "1",
    mainTitle: "회원",
    icon: assets.member,
    activeIcon: assets.memberActive,
    init: "/admin/player-management",
    firstRoute: "/admin/player-management",
    subTitles: [],
  },
  {
    order: "2",
    mainTitle: "채팅",
    icon: assets.chat,
    activeIcon: assets.chatActive,
    init: "/admin/chat",
    firstRoute: "/admin/chat",
    subTitles: [],
  },

  {
    order: "3",
    mainTitle: "운동 프로그램 관리",
    icon: assets.dumbbell,
    activeIcon: assets.dumbbellActive,
    init: "/admin/exercise-program",
    firstRoute: "/admin/exercise-program/exercise-program-management",
    subTitles: [
      {
        label: "프로그램 구성", // program composition
        route: "/admin/exercise-program/exercise-program-management",
      },
      {
        label: "템플릿 관리", // Template management
        route: "/admin/exercise-program/template",
      },
    ],
  },
  {
    order: "4",
    mainTitle: "매칭 관리",
    icon: assets.hand,
    activeIcon: assets.handActive,
    init: "/admin/matching",
    firstRoute: "/admin/matching/online-coaching",
    subTitles: [
      {
        label: "온라인코칭", // Online coaching
        route: "/admin/matching/online-coaching",
      },
      {
        label: "대면코칭", // Offline coaching
        route: "/admin/matching/offline-coaching",
      },
    ],
  },
  {
    order: "5",
    mainTitle: " 대회관리",
    icon: assets.trophy,
    activeIcon: assets.trophyActive,
    init: "/admin/competition-management",
    firstRoute: "/admin/competition-management",
    subTitles: [],
  },

  {
    order: "6",
    mainTitle: "마이페이지",
    icon: assets.square,
    activeIcon: assets.squareActive,
    init: "/admin/my-page",
    firstRoute: "/admin/my-page/my-page-management",
    subTitles: [
      {
        label: "마이페이지", // My page
        route: "/admin/my-page/my-page-management",
      },
      {
        label: "결제/구독/정산 관리", // Payment/Subscription/Settlement management
        route: "/admin/my-page/subscription-management",
      },
    ],
  },
];

export default sideBarContent;
