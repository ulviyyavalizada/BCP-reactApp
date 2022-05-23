import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import SocialLinkTypes from "../../hooks/SocialLinkTypes";

function SocialLinks({ contacts }) {

  return (
    <div className="landing-socials">
      <ul>
        {!contacts.failed &&
          contacts.load &&
          contacts.data.map((contact, id) => (
            contact.type !== "email" && contact.type !== "phone" && (
              <li key={id}>
                <a target={"_blank"} href={contact.value}>
                  <SocialLinkTypes type={contact.type} />
                </a>
              </li>
            )
          ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contacts: state.contactsReducer,
  };
}

export default connect(mapStateToProps)(SocialLinks);