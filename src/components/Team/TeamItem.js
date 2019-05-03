import React from "react";

const TeamItem = ({ name, position, avatar, twitter, facebook, linkedin}) => (
    <div className="col-sm-4">
        <div className="team-member">
            <img
                className="mx-auto rounded-circle"
                src={avatar}
                alt=""
            />
            <h4>{name}</h4>
            <p className="text-muted">{position}</p>
            <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                    <a href={twitter}>
                        <i className="fab fa-twitter" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href={facebook}>
                        <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href={linkedin}>
                        <i className="fab fa-linkedin-in" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default TeamItem;