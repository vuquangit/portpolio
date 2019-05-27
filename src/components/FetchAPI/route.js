import FetchAPIHome from "./FetchAPIHome";
import NoFetchAPI from "./NoFetch";
import FetchThirdPartyAPI from "./FetchThird-partyAPI";
import FetchWithSelfOwnedAPI from "./FetchWithSelf-OwnedAPI";
import AxiosThirdPartyAPI from "./AxiosThird-partyAPI";
import AxiosWithYourOwnAPI from "./AxiosWithYour-OwnAPI";
import AsyncAndAwait from "./AsyncAndAwait";
import Exam1 from "./Exam_1";
import UserPhoto from "./Exam_1/UserPhoto";

const BASE_URL = "/fetch-api";

const ROUTE = [
  {
    id: 0,
    exact: true,
    path: "/",
    component: FetchAPIHome,
    projectType: "",
    label: "",
    show: true
  },
  {
    id: 1,
    exact: false,
    path: "/no-fetch-api",
    component: NoFetchAPI,
    projectType: "fetch",
    label: "No Fetch",
    show: true
  },
  {
    id: 2,
    exact: false,
    path: "/using-fetch-with-a-third-party-api",
    component: FetchThirdPartyAPI,
    projectType: "fetch",
    label: " Using Fetch with a third-party API",
    show: true
  },
  {
    id: 3,
    exact: false,
    path: "/using-fetch-with-self-owned-api",
    component: FetchWithSelfOwnedAPI,
    projectType: "fetch",
    label: "Using Fetch With Self-Owned API",
    show: true
  },
  {
    id: 4,
    exact: false,
    path: "/using-axios-with-a-third-party-api",
    component: AxiosThirdPartyAPI,
    projectType: "axios",
    label: "Using axios with a third-party API",
    show: true
  },
  {
    id: 5,
    exact: false,
    path: "/using-axios-with-your-own-api",
    component: AxiosWithYourOwnAPI,
    projectType: "axios",
    label: "Using axios with your own API",
    show: true
  },
  {
    id: 6,
    exact: false,
    path: "/async-and-await",
    component: AsyncAndAwait,
    projectType: "axios",
    label: "async and await",
    show: true
  },
  {
    id: 7,
    exact: true,
    path: "/exam1",
    component: Exam1,
    projectType: "Project",
    label: "Exam 1 - Search image from third-party API",
    show: true
  },
  {
    id: 8,
    exact: false,
    path: "/exam1/:username",
    component: UserPhoto,
    projectType: "Project",
    label: "Exam 1 - List a photo user",
    show: false
  }
];

export { BASE_URL, ROUTE };
