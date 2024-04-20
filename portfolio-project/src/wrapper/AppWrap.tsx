import React, { ComponentType } from 'react';
import { SocialMedia } from '../componenets';
import { NavigationDots } from '../componenets';

interface AppWrapProps {
  idName: string;
  classNames?: string;
}

type WrappedComponentType = ComponentType<any>;
type HOCReturnType = React.FC<AppWrapProps>;

export const AppWrap: (Component: WrappedComponentType, idName: string, classNames?: string) => HOCReturnType = (Component, idName, classNames) => {
  const AppWrapComponent: HOCReturnType = () => (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2024 ANGEL</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName}></NavigationDots>
    </div>
  );

  return AppWrapComponent;
};
