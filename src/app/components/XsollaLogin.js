"use client"
import React from 'react';
import { Metaframe, Locale } from "@xsolla/metaframe-react-sdk";

const XsollaLogin = () => (
  <div className={`xsolla`}>
    <Metaframe
      loginProjectId="230837"
      locale={Locale.en_US}
      shortcutKeys={["ShiftLeft", "Tab"]}
      enabledOrbs={["blue"]}
      autoLoginPopup={false}
    />
  </div>
);

export default XsollaLogin;