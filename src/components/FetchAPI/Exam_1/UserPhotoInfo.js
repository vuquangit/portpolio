import React from "react";
import { MyContext } from "./MyContext";

class UserInfo extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="user-info">
            <div className="NvMsA PrOBO">
              <div className="_36Pa2">
                <div className="_25B2U _2KLco">
                  <div className="_3mre1">
                    <div className="_20Cor q9lsa _2FGz6">
                      <div className="p46HD">
                        <div
                          className="ODWzM"
                          style={{ width: "150px", height: "150px" }}
                        >
                          <img
                            className="_1FdcY"
                            src={
                              context.state.dataSearchPhoto[0]
                                ? context.state.dataSearchPhoto[0].user
                                    .profile_image.large
                                : null
                            }
                            //srcset=" "
                            role="presentation"
                            alt={`Avatar of user ${
                              context.state.dataSearchPhoto[0]
                                ? context.state.dataSearchPhoto[0].user.name
                                : null
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="_2Krql _1pgnK _2FGz6">
                      <div className="_3InY5">
                        <div className="XmcS-">
                          <div className="_2227S">
                            <div className="_3FvGs U8wGh _2svCU _1Fli6">
                              {context.state.dataSearchPhoto[0]
                                ? context.state.dataSearchPhoto[0].user.name
                                : null}
                            </div>
                            <div className="_1Fli6">
                              <div className="_3O5mp">
                                <div className="_17lgq">
                                  <a
                                    className="_3PNCP _1l4Hh _1CBrG _1zIyn xLon9 _3nDcb _3rDw2 _2Xklx"
                                    href="/@yerlinmatu?modal=%7B%22tag%22%3A%22Login%22%2C%22value%22%3A%7B%22tag%22%3A%22Follow%22%2C%22value%22%3A%7B%22userId%22%3A%22T8zI6vKRqYI%22%7D%7D%7D"
                                  >
                                    <span>
                                      <svg
                                        className="_2BKrY"
                                        version="1.1"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        height="32"
                                        aria-hidden="false"
                                      >
                                        <path d="M31.2 12.8h-2.4v-2.4c0-.4-.4-.8-.8-.8h-1.6c-.4 0-.8.4-.8.8v2.4h-2.4c-.4 0-.8.4-.8.8v1.6c0 .4.4.8.8.8h2.4v2.4c0 .4.4.8.8.8h1.6c.4 0 .8-.4.8-.8v-2.4h2.4c.4 0 .8-.4.8-.8v-1.6c0-.4-.4-.8-.8-.8zm-15.2 5.1v-1.2c1.9-1.1 3.2-3.1 3.2-5.5v-1.6c0-3.5-2.9-6.4-6.4-6.4s-6.4 2.9-6.4 6.4v1.6c0 2.4 1.3 4.4 3.2 5.5v1.2c-5.5.9-9.6 4-9.6 7.7v1.6c0 .9.7 1.6 1.6 1.6h22.4c.9 0 1.6-.7 1.6-1.6v-1.6c0-3.7-4.1-6.8-9.6-7.7z" />
                                      </svg>
                                      Follow
                                    </span>
                                  </a>
                                </div>
                                <div className="_17lgq">
                                  <a
                                    className="_3PNCP _1l4Hh _1CBrG _1zIyn xLon9 _3rDw2 _2Xklx"
                                    href="/@yerlinmatu?modal=%7B%22tag%22%3A%22Login%22%2C%22value%22%3A%7B%22tag%22%3A%22Message%22%2C%22value%22%3A%7B%22userId%22%3A%22T8zI6vKRqYI%22%7D%7D%7D"
                                  >
                                    Message
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="XmcS-">
                          <div className="_3wgv4 _3-t2G">
                            <div className="_2j6wN _3Q3x_">
                              {context.state.dataSearchPhoto[0]
                                ? context.state.dataSearchPhoto[0].user.bio
                                : null}
                            </div>
                            <div className="_3cEPI _3Q3x_">Interests</div>
                            <div className="_20zR5">
                              <div className="_3Q3x_">
                                <div className="_2_OE1">
                                  <div className="_3Z-ua">
                                    <a
                                      className="_6PxCM"
                                      title="iot images"
                                      href="/search/photos/iot"
                                    >
                                      iot
                                    </a>
                                  </div>
                                  <div className="_3Z-ua">
                                    <a
                                      className="_6PxCM"
                                      title="code images"
                                      href="/search/photos/code"
                                    >
                                      code
                                    </a>
                                  </div>
                                  <div className="_3Z-ua">
                                    <a
                                      className="_6PxCM"
                                      title="tecnology images"
                                      href="/search/photos/tecnology"
                                    >
                                      tecnology
                                    </a>
                                  </div>
                                  <div className="_3Z-ua">
                                    <a
                                      className="_6PxCM"
                                      title="javascript images"
                                      href="/search/photos/javascript"
                                    >
                                      javascript
                                    </a>
                                  </div>
                                  <div className="_3Z-ua">
                                    <a
                                      className="_6PxCM"
                                      title="developer images"
                                      href="/search/photos/developer"
                                    >
                                      developer
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default UserInfo;
