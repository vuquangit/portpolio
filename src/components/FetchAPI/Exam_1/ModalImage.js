import React from "react";
import "../FetchAPI.scss";
import Modal from "react-modal";
import { MyContext } from "./MyContext";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const ModalImage = () => {
    return (
        <MyContext.Consumer>
            {context => (
                <Modal
                    className="modal-image"
                    closeTimeoutMS={150}
                    isOpen={context.state.modalIsOpen}
                    onRequestClose={context.state.handleModalCloseRequest}
                    overlayClassName="OverlayModal"
                >
                    <div>
                        <div className="modal-close">
                            <button
                                className="btn-close"
                                onClick={context.closeModalImage}
                            >
                                <svg
                                    className="sgv-close"
                                    version="1.1"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    height="32"
                                    aria-hidden="false"
                                >
                                    <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z" />
                                </svg>
                            </button>
                        </div>

                        <div className="modal-content">
                            {/* <div data-test="photos-route"> */}
                            <div className="content-body">
                                <div>
                                    <div className="top">
                                        <header className="top-header">
                                            <div className="HAAez _2iWc-">
                                                <span className="_2aPXR">
                                                    <div className="_2BNtU">
                                                        <div className="_2tX2R">
                                                            <div
                                                                className="ODWzM" /*style="width: 32px; height: 32px;"*/
                                                            >
                                                                {context.state.dataModal.user ? (
                                                                    <Link to={`/fetch-api/exam1/${context.state.dataModal.user.username}`}>
                                                                        <img
                                                                            className="_1FdcY"
                                                                            src={
                                                                                context.state.dataModal.user.profile_image
                                                                                    .small
                                                                            }
                                                                            //srcset=""
                                                                            role="presentation"
                                                                            alt={`Go to ${
                                                                                context.state.dataModal.user.name
                                                                                }'s profile`}
                                                                        />
                                                                    </Link>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="_80uCh">
                                                        <div className="_2tX2R">
                                                            {context.state.dataModal.user ? (
                                                                <div>
                                                                    <Link to={`/fetch-api/exam1/${context.state.dataModal.user.username}`}
                                                                        className="_3XzpS _1ByhS _4kjHg _1O9Y0 _3l__V _1CBrG xLon9"                                                                       
                                                                    >
                                                                        {context.state.dataModal.user.name}
                                                                    </Link>
                                                                    <Link to={`/fetch-api/exam1/${context.state.dataModal.user.username}`}
                                                                        className="_3l__V _1CBrG vTCGl _1ByhS _4kjHg"                                                                      
                                                                    >
                                                                        @{context.state.dataModal.user.username}
                                                                    </Link>
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="_3-6v7">
                                                <div className="_27vvN _2iWc-">
                                                    <a
                                                        title="Like photo"
                                                        className="_37zTg _1l4Hh _1CBrG _1zIyn xLon9 _1EJJ- NDx0k _2Xklx"
                                                        href=" "
                                                        onClick={() => {
                                                            alert("Liked this photo");
                                                        }}
                                                    >
                                                        <svg
                                                            className="BWSrD"
                                                            version="1.1"
                                                            viewBox="0 0 32 32"
                                                            width="32"
                                                            height="32"
                                                            aria-hidden="false"
                                                        >
                                                            <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z" />
                                                        </svg>
                                                        <span className="_2ER2Y">
                                                            {context.state.dataModal.user
                                                                ? context.state.dataModal.user.total_likes
                                                                : null}
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="_27vvN _2iWc-">
                                                    <a
                                                        title="Add to collection"
                                                        className="_37zTg _1l4Hh _1CBrG _1zIyn xLon9 _3dBbn NDx0k _2Xklx"
                                                        href=" "
                                                        onClick={() => {
                                                            alert("Added your collection");
                                                        }}
                                                    >
                                                        <svg
                                                            className="_2rdbO"
                                                            version="1.1"
                                                            viewBox="0 0 32 32"
                                                            width="32"
                                                            height="32"
                                                            aria-hidden="false"
                                                        >
                                                            <path d="M14 3h4v26h-4zM29 14v4h-26v-4z" />
                                                        </svg>
                                                        <span className="_1eyJo">Collect</span>
                                                    </a>
                                                </div>
                                                <div className="_13Q- _27vvN _2iWc-">
                                                    <a
                                                        title="Download photo"
                                                        href={`${
                                                            context.state.dataModal.links
                                                                ? context.state.dataModal.links.download
                                                                : null
                                                            }?force=true`}
                                                        rel="nofollow"
                                                        download=""
                                                        /*target="_blank"*/

                                                        className="_1yvXd _1l4Hh _1CBrG _1zIyn xLon9 _1Tfeo _1AA_u TPbmh _2Xklx"
                                                    >
                                                        <svg
                                                            className="Apljk _11dQc _1Jd5C"
                                                            version="1.1"
                                                            viewBox="0 0 32 32"
                                                            width="32"
                                                            height="32"
                                                            aria-hidden="false"
                                                        >
                                                            <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z" />
                                                        </svg>
                                                        <span className="_2Aga-">Download free</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </header>
                                    </div>
                                    <div className="zoom">
                                        <div
                                            className="_2yFK- IEpfq" /* style="padding-bottom: 150%;"*/
                                        >
                                            {/* <img
                          sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 3456/5184) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
                          srcset="https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80 334w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80 634w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=668&amp;q=80 668w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80 934w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1234&amp;q=80 1234w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1268&amp;q=80 1268w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1534&amp;q=80 1534w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1834&amp;q=80 1834w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1868&amp;q=80 1868w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80 2134w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2434&amp;q=80 2434w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2468&amp;q=80 2468w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2734&amp;q=80 2734w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3034&amp;q=80 3034w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3068&amp;q=80 3068w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3334&amp;q=80 3334w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w"
                          src="https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                          alt="woman carrying backpack while sitting cross legs on hallway in front of people walking"
                          className="_2zEKz"
                        /> */}

                                            {context.state.dataModal.urls ? (
                                                <img
                                                    sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 3456/5184) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
                                                    //srcset=""
                                                    src={context.state.dataModal.urls.full}
                                                    alt={context.state.dataModal.alt_description}
                                                    className="_2zEKz"
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="image-main">
                                        <div>
                                            <div className="_1ac-D _3mCZ_">
                                                <button className="_1szcv DWLeW _1YS_6">
                                                    <div className="_2MKkb">
                                                        <div className="_1w7cG">
                                                            <svg
                                                                className="_1NYtf"
                                                                version="1.1"
                                                                viewBox="0 0 32 32"
                                                                width="32"
                                                                height="32"
                                                                aria-hidden="false"
                                                            >
                                                                <path d="M19 3v3h4.8l-4.4 4.5 2 2L26 8.2v5h3V3M6 24v-4.6H3V29h9.6v-3H8l5-5-2-2" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_2yFK- IEpfq" /*style="padding-bottom: 150%;"*/
                                                    >
                                                        {context.state.dataModal.urls ? (
                                                            <img
                                                                sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 3456/5184) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
                                                                //srcset=""
                                                                src={context.state.dataModal.urls.small}
                                                                alt={context.state.dataModal.alt_description}
                                                                className="_2zEKz"
                                                            />
                                                        ) : null}
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="_2DxLe _3kEvh">
                                            <div className="_28uSB _3kEvh">
                                                <a
                                                    className="_2RL3a xLon9"
                                                    href="/search/photos/taipei-101%2C-taiwan"
                                                >
                                                    <svg
                                                        className="_15of1"
                                                        version="1.1"
                                                        viewBox="0 0 32 32"
                                                        width="32"
                                                        height="32"
                                                        aria-hidden="false"
                                                    >
                                                        <path d="M16 0c-6.7 0-12 5.3-12 12 0 8.6 8.6 17.3 11.2 19.7.4.4 1.1.4 1.5 0 2.7-2.4 11.3-11.1 11.3-19.7 0-6.7-5.3-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                                                    </svg>
                                                    <span className="_20NLS _1ByhS">
                                                        Taipei 101, Taiwan
                          </span>
                                                </a>
                                            </div>
                                            <div className="_28uSB _3kEvh">
                                                <div className="_3PLD4 _3kvp0">
                                                    <p className="KNDj7 b5rtm _1ByhS">
                                                        We were on our way back to our place in Taiwan, it
                                                        was 5:00 pm in the afternoon where a lot of people
                                                        just went back from work. And we came across to one
                                                        cool spot where it connected from one building to
                                                        another and thought we might get a good shot. I
                                                        definitely am missing this city, a city that never
                                                        sleeps.
                          </p>{" "}
                                                    <button className="_19oEl DWLeW">Read more</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_3dxKb">
                                            <a
                                                className="_37zTg _1l4Hh _1CBrG _1zIyn xLon9 _10F2J ldOpn NDx0k _2Xklx"
                                                href="/photos/GBgp6Iy16lc/share"
                                            >
                                                <div className="_10F2J">
                                                    <svg
                                                        className="_1xhtJ"
                                                        version="1.1"
                                                        viewBox="0 0 32 32"
                                                        width="32"
                                                        height="32"
                                                        aria-hidden="false"
                                                    >
                                                        <path d="M0 26c0 1.7.2 3.3.6 4.9.2.9.7.9 1 0 2.1-5.3 5.5-10.3 11.1-11.3h3.3v4.4c0 2 1.2 2.6 2.6 1.4l12.8-11c.7-.6.7-1.6 0-2.3l-12.8-11c-1.4-1.3-2.6-.6-2.6 1.3v4.7c-9.6 1.6-16 9.4-16 18.9z" />
                                                    </svg>
                                                    <span className="_3UPwX">Share</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="_3dxKb">
                                            <a
                                                className="_37zTg _1l4Hh _1CBrG _1zIyn xLon9 _3JXJ6 NDx0k _2Xklx"
                                                href="/photos/GBgp6Iy16lc/info"
                                            >
                                                <svg
                                                    className="_1rYbs"
                                                    version="1.1"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    height="32"
                                                    aria-hidden="false"
                                                >
                                                    <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm2 25c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-12c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v12zm0-16c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z" />
                                                </svg>
                                                <span className="_1efgd">Info</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </Modal>
            )}
        </MyContext.Consumer>
    );
};

export default ModalImage;