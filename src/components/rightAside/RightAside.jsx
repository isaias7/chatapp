import React from 'react';
import './_rightAside.scss';

class RightAside extends React.Component {
  render() {
    return (
      <div className='col-md-3 details'>
        <div className='row'>
          <div className='listContainer'>
            <ul>
              <li className='list-items'>Channel Details
                <span className='listArrow'>
                  {/*<img src={ arrow } alt='' />*/}
                  >
                </span>
              </li>
              <li className='list-items'>4 Pinned Items
                <span className='listArrow'>
                  {/*<img src={ arrow } alt='' />*/}
                  >
                </span>
              </li>
              <li className='list-items'>18 Members
                <span className='listArrow'>
                  {/*<img src={ arrow } alt='' />*/}
                  >
                </span>
              </li>
              <li className='list-items'>Shared Files
                <span className='listArrow'>
                  {/*<img src={ arrow } alt='' />*/}
                  >
                </span>
              </li>
              <li className='list-items'>Notification Preferences
                <span className='listArrow'>
                  {/*<img src={ arrow } alt='' />*/}
                  >
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RightAside;
