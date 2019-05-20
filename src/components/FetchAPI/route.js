//import FetchAPIHome from "./FetchAPIHome";
import NoFetchAPI from "./NoFetch";
import FetchThirdPartyAPI from "./FetchThird-partyAPI";
import FetchWithSelfOwnedAPI from "./FetchWithSelf-OwnedAPI";
import AxiosThirdPartyAPI from "./AxiosThird-partyAPI";
import AxiosWithYourOwnAPI from "./AxiosWithYour-OwnAPI";
import AsyncAndAwait from "./AsyncAndAwait";
import Exam1 from "./Exam_1";

const BASE_URL = "/fetch-api";

const ROUTE = [
  // {
  //   id: 0,
  //   path: "/",
  //   component: FetchAPIHome,
  //   projectType: "",
  //   label: "",
  //   show: true
  // },
  {
    id: 1,
    path: "/no-fetch-api",
    component: NoFetchAPI,
    projectType: "fetch",
    label: "No Fetch",
    show: true
  },
  {
    id: 2,
    path: "/using-fetch-with-a-third-party-api",
    component: FetchThirdPartyAPI,
    projectType: "fetch",
    label: " Using Fetch with a third-party API",
    show: true
  },
  {
    id: 3,
    path: "/using-fetch-with-self-owned-api",
    component: FetchWithSelfOwnedAPI,
    projectType: "fetch",
    label: "Using Fetch With Self-Owned API",
    show: true
  },
  {
    id: 4,
    path: "/using-axios-with-a-third-party-api",
    component: AxiosThirdPartyAPI,
    projectType: "axios",
    label: "Using axios with a third-party API",
    show: true
  },
  {
    id: 5,
    path: "/using-axios-with-your-own-api",
    component: AxiosWithYourOwnAPI,
    projectType: "axios",
    label: "Using axios with your own API",
    show: true
  },
  {
    id: 6,
    path: "/async-and-await",
    component: AsyncAndAwait,
    projectType: "axios",
    label: "async and await",
    show: true
  },
  {
    id: 7,
    path: "/exam1",
    component: Exam1,
    projectType: "Project",
    label: "Exam 1 - Search image from third-party API",
    show: true
  }
];

export { BASE_URL, ROUTE };
