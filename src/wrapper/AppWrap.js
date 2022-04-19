import React from 'react';
// import { NavigationDots, SocilaMedia } from '../components';
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <>
        <div id={idName} className={`app__contianer ${classNames}`}>
          {/* <SocilaMedia /> */}
          <div className="app__wrapper app_flex">
            <Component />
            <div className="copyright">
              <p className="p-text">@2022 sathish</p>
              <p className="p-text">All Rights reserved</p>
            </div>
          </div>
          {/* <NavigationDots active={idName} /> */}
        </div>
      </>
    );
  };

export default AppWrap;
