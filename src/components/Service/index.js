import React from "react";
import "./Service.scss";
import ServiceItem from "./ServiceItem";

export default class Service extends React.Component {
  render() {
    return (
        // https://www.vectary.com/
      <div className="homepage-blogArticles">
        <section className="homepage-section">
          <div className="homepage-section_text">
            <h2 className="heading-dark">
              <span className="heading-bold">SERVICE</span> - Info
            </h2>
            <p className="heading-sub heading-maxWidth">
              Tune in to the latest Vectary posts on interesting projects,
              trends, and all the other cool things related to the world of 3D
              design.
            </p>
          </div>

          <div className="homepage-section_media suggestions">
            <div>
              <ul class="suggestions_list">
                <ServiceItem
                  HrefItem="https://vuquangit.netlify.com/1"
                  Imgsrc="https://lh3.googleusercontent.com/66Uk27l5xlPXifXoJ6vtv2L2ETrv4RlSDsrnAhyxuewS4lXbPb_3dbLIOhkgYxFFT05_znWwBFPnznswWhoE1zqcUxADRXE4a5dquJ7_yZDY1DS-KIfiqBkpopi136m_pZyPa2HjjhqUXWWRo0VQhb5ri9_EWe-yws-zLxzGZ92tXF01-ekzJK91WvF1-t_sCpPmfW-SyTpW0ctXEgExBoEnkTlPS-OFMnw6NBmJIsFrIv3BhMUTxwg-kJ5xwjmf5rN207c09hi6apdaJ7_8Q4X5vuS2N9cTqqfgt6mwXS2_iqHiIPlGofag9hIAZGKf6-C_oQutGrfVbWdmgPnJY_-IZ-7FGs3zxmAN8oDsF0yd0JewWOqRydCZKCAWqK0wmrVvR27Nun4S7Uk8ARV6_9WjJ-d9hFfbUq-ag3ou8Kg1vPS0gI2cZjCZz_GHZzmb3Rl_4ADG-7CU5pPk2YRcsFqa6xCJtGJGRKMKr_etGai_re3fxiyq6tESvdDP8BwP1xf4AkDP4e_ico4ln5JDmeVp6BI7nDlmKyLmq-Kp1Fo4E0u1tFWYW1176yMIZIzhEEgw8tCbmKPANmUyIOfAPFVwxJJKLEZpiHClIGNlOxg4OiUQeES7XLNN47xEaZiVBbC3Y-0CryR5UdEWmGMlAdAwNVSeVxbj=s789-no"
                  TitleInfoItem="Service 1-1"
                  DetailInfoItem="Detail 1"
                />
                <ServiceItem
                  HrefItem="https://vuquangit.netlify.com/2"
                  Imgsrc="https://lh3.googleusercontent.com/66Uk27l5xlPXifXoJ6vtv2L2ETrv4RlSDsrnAhyxuewS4lXbPb_3dbLIOhkgYxFFT05_znWwBFPnznswWhoE1zqcUxADRXE4a5dquJ7_yZDY1DS-KIfiqBkpopi136m_pZyPa2HjjhqUXWWRo0VQhb5ri9_EWe-yws-zLxzGZ92tXF01-ekzJK91WvF1-t_sCpPmfW-SyTpW0ctXEgExBoEnkTlPS-OFMnw6NBmJIsFrIv3BhMUTxwg-kJ5xwjmf5rN207c09hi6apdaJ7_8Q4X5vuS2N9cTqqfgt6mwXS2_iqHiIPlGofag9hIAZGKf6-C_oQutGrfVbWdmgPnJY_-IZ-7FGs3zxmAN8oDsF0yd0JewWOqRydCZKCAWqK0wmrVvR27Nun4S7Uk8ARV6_9WjJ-d9hFfbUq-ag3ou8Kg1vPS0gI2cZjCZz_GHZzmb3Rl_4ADG-7CU5pPk2YRcsFqa6xCJtGJGRKMKr_etGai_re3fxiyq6tESvdDP8BwP1xf4AkDP4e_ico4ln5JDmeVp6BI7nDlmKyLmq-Kp1Fo4E0u1tFWYW1176yMIZIzhEEgw8tCbmKPANmUyIOfAPFVwxJJKLEZpiHClIGNlOxg4OiUQeES7XLNN47xEaZiVBbC3Y-0CryR5UdEWmGMlAdAwNVSeVxbj=s789-no"
                  TitleInfoItem="Service 1-2"
                  DetailInfoItem="Detail 2"
                />
                <ServiceItem
                  HrefItem="https://vuquangit.netlify.com/3"
                  Imgsrc="https://lh3.googleusercontent.com/66Uk27l5xlPXifXoJ6vtv2L2ETrv4RlSDsrnAhyxuewS4lXbPb_3dbLIOhkgYxFFT05_znWwBFPnznswWhoE1zqcUxADRXE4a5dquJ7_yZDY1DS-KIfiqBkpopi136m_pZyPa2HjjhqUXWWRo0VQhb5ri9_EWe-yws-zLxzGZ92tXF01-ekzJK91WvF1-t_sCpPmfW-SyTpW0ctXEgExBoEnkTlPS-OFMnw6NBmJIsFrIv3BhMUTxwg-kJ5xwjmf5rN207c09hi6apdaJ7_8Q4X5vuS2N9cTqqfgt6mwXS2_iqHiIPlGofag9hIAZGKf6-C_oQutGrfVbWdmgPnJY_-IZ-7FGs3zxmAN8oDsF0yd0JewWOqRydCZKCAWqK0wmrVvR27Nun4S7Uk8ARV6_9WjJ-d9hFfbUq-ag3ou8Kg1vPS0gI2cZjCZz_GHZzmb3Rl_4ADG-7CU5pPk2YRcsFqa6xCJtGJGRKMKr_etGai_re3fxiyq6tESvdDP8BwP1xf4AkDP4e_ico4ln5JDmeVp6BI7nDlmKyLmq-Kp1Fo4E0u1tFWYW1176yMIZIzhEEgw8tCbmKPANmUyIOfAPFVwxJJKLEZpiHClIGNlOxg4OiUQeES7XLNN47xEaZiVBbC3Y-0CryR5UdEWmGMlAdAwNVSeVxbj=s789-no"
                  TitleInfoItem="Service 1-2"
                  DetailInfoItem="Detail 3"
                />
              </ul>

              <ul class="suggestions_list">
                <ServiceItem
                  HrefItem="https://vuquangit.netlify.com/1"
                  Imgsrc="https://lh3.googleusercontent.com/66Uk27l5xlPXifXoJ6vtv2L2ETrv4RlSDsrnAhyxuewS4lXbPb_3dbLIOhkgYxFFT05_znWwBFPnznswWhoE1zqcUxADRXE4a5dquJ7_yZDY1DS-KIfiqBkpopi136m_pZyPa2HjjhqUXWWRo0VQhb5ri9_EWe-yws-zLxzGZ92tXF01-ekzJK91WvF1-t_sCpPmfW-SyTpW0ctXEgExBoEnkTlPS-OFMnw6NBmJIsFrIv3BhMUTxwg-kJ5xwjmf5rN207c09hi6apdaJ7_8Q4X5vuS2N9cTqqfgt6mwXS2_iqHiIPlGofag9hIAZGKf6-C_oQutGrfVbWdmgPnJY_-IZ-7FGs3zxmAN8oDsF0yd0JewWOqRydCZKCAWqK0wmrVvR27Nun4S7Uk8ARV6_9WjJ-d9hFfbUq-ag3ou8Kg1vPS0gI2cZjCZz_GHZzmb3Rl_4ADG-7CU5pPk2YRcsFqa6xCJtGJGRKMKr_etGai_re3fxiyq6tESvdDP8BwP1xf4AkDP4e_ico4ln5JDmeVp6BI7nDlmKyLmq-Kp1Fo4E0u1tFWYW1176yMIZIzhEEgw8tCbmKPANmUyIOfAPFVwxJJKLEZpiHClIGNlOxg4OiUQeES7XLNN47xEaZiVBbC3Y-0CryR5UdEWmGMlAdAwNVSeVxbj=s789-no"
                  TitleInfoItem="Service 2-1"
                  DetailInfoItem="Detail 11111"
                />
                <ServiceItem
                  HrefItem="https://vuquangit.netlify.com/2"
                  Imgsrc="https://lh3.googleusercontent.com/66Uk27l5xlPXifXoJ6vtv2L2ETrv4RlSDsrnAhyxuewS4lXbPb_3dbLIOhkgYxFFT05_znWwBFPnznswWhoE1zqcUxADRXE4a5dquJ7_yZDY1DS-KIfiqBkpopi136m_pZyPa2HjjhqUXWWRo0VQhb5ri9_EWe-yws-zLxzGZ92tXF01-ekzJK91WvF1-t_sCpPmfW-SyTpW0ctXEgExBoEnkTlPS-OFMnw6NBmJIsFrIv3BhMUTxwg-kJ5xwjmf5rN207c09hi6apdaJ7_8Q4X5vuS2N9cTqqfgt6mwXS2_iqHiIPlGofag9hIAZGKf6-C_oQutGrfVbWdmgPnJY_-IZ-7FGs3zxmAN8oDsF0yd0JewWOqRydCZKCAWqK0wmrVvR27Nun4S7Uk8ARV6_9WjJ-d9hFfbUq-ag3ou8Kg1vPS0gI2cZjCZz_GHZzmb3Rl_4ADG-7CU5pPk2YRcsFqa6xCJtGJGRKMKr_etGai_re3fxiyq6tESvdDP8BwP1xf4AkDP4e_ico4ln5JDmeVp6BI7nDlmKyLmq-Kp1Fo4E0u1tFWYW1176yMIZIzhEEgw8tCbmKPANmUyIOfAPFVwxJJKLEZpiHClIGNlOxg4OiUQeES7XLNN47xEaZiVBbC3Y-0CryR5UdEWmGMlAdAwNVSeVxbj=s789-no"
                  TitleInfoItem="Service 2-2"
                  DetailInfoItem="Detail 2222"
                />
                <ServiceItem
                  HrefItem="https://vuquangit.netlify.com/3"
                  Imgsrc="https://lh3.googleusercontent.com/66Uk27l5xlPXifXoJ6vtv2L2ETrv4RlSDsrnAhyxuewS4lXbPb_3dbLIOhkgYxFFT05_znWwBFPnznswWhoE1zqcUxADRXE4a5dquJ7_yZDY1DS-KIfiqBkpopi136m_pZyPa2HjjhqUXWWRo0VQhb5ri9_EWe-yws-zLxzGZ92tXF01-ekzJK91WvF1-t_sCpPmfW-SyTpW0ctXEgExBoEnkTlPS-OFMnw6NBmJIsFrIv3BhMUTxwg-kJ5xwjmf5rN207c09hi6apdaJ7_8Q4X5vuS2N9cTqqfgt6mwXS2_iqHiIPlGofag9hIAZGKf6-C_oQutGrfVbWdmgPnJY_-IZ-7FGs3zxmAN8oDsF0yd0JewWOqRydCZKCAWqK0wmrVvR27Nun4S7Uk8ARV6_9WjJ-d9hFfbUq-ag3ou8Kg1vPS0gI2cZjCZz_GHZzmb3Rl_4ADG-7CU5pPk2YRcsFqa6xCJtGJGRKMKr_etGai_re3fxiyq6tESvdDP8BwP1xf4AkDP4e_ico4ln5JDmeVp6BI7nDlmKyLmq-Kp1Fo4E0u1tFWYW1176yMIZIzhEEgw8tCbmKPANmUyIOfAPFVwxJJKLEZpiHClIGNlOxg4OiUQeES7XLNN47xEaZiVBbC3Y-0CryR5UdEWmGMlAdAwNVSeVxbj=s789-no"
                  TitleInfoItem="Service 2-3"
                  DetailInfoItem="Detail 333"
                />
              </ul>
 
            </div>
          </div>
          <a href="/3d-modeling/" className="btn btn-shadow btn-md">
            Read more
          </a>
        </section>
      </div>
    );
  }
}
