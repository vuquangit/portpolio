import FetchAPIHome from "./FetchAPIHome";
import NoFetchAPI from "./NoFetch";
import FetchThirdPartyAPI from "./FetchThird-partyAPI";
import FetchWithSelfOwnedAPI from "./FetchWithSelf-OwnedAPI";
import AxiosThirdPartyAPI from "./AxiosThird-partyAPI";
import AxiosWithYourOwnAPI from "./AxiosWithYour-OwnAPI";
import AsyncAndAwait from "./AsyncAndAwait";
import Exam1 from "./Exam_1";

const BASE_URL = "/fetch-api";

const ROUTE = [
  {
    path: "",
    component: FetchAPIHome,
    show: true
  },
  {
    path: "/no-fetch-api",
    component: NoFetchAPI,
    show: false
  },
  {
    path: "/using-fetch-with-a-third-party-api",
    component: FetchThirdPartyAPI,
    show: true
  },
  {
    path: "/using-fetch-with-self-owned-api",
    component: FetchWithSelfOwnedAPI,
    show: true
  },
  {
    path: "/using-axios-with-a-third-party-api",
    component: AxiosThirdPartyAPI,
    show: true
  },
  {
    path: "/using-axios-with-your-own-api",
    component: AxiosWithYourOwnAPI,
    show: true
  },
  {
    path: "/exam1",
    component: Exam1,
    show: true
  },
  {
    path: "/async-and-await",
    component: AsyncAndAwait,
    show: true
  }
];

export { BASE_URL, ROUTE };
