import React from 'react';
import injectComponent from './Nav';

function TargetComponent({ injectComponent }) {
    return <div>{injectComponent}</div>;
  }

const Content = (props) => {
    return  <div>
        <content className="content"></content>
        </div>;
    }
    
export default Content;