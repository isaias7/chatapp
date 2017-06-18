import React from 'react'; 
import './_home.scss';
import RighAside from '../rightAside/RightAside';
// import arrow from '../../images/star.sv';
// import { render } from'react-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='container-fluid'>
          <div className='header row'>
            <div className='col-md-2'>
              col de 2
            </div>
            <div className='col-md-7'>
              col de 7
            </div>
            <div className='col-md-3'>
              col de 3
            </div>
          </div>
          <div className='custom-grid row'>
            <div className='col-md-2 verde'>
              <div className='row'>
                <div className='col-md-12 content'>
                  col de 3
                </div>
                <div className='col-md-12 footer'>
                  col de 3
                </div>
              </div>
            </div>
            <div className='col-md-7 papaya'>
              <div className='row'>
                <div className='col-md-12 content'>
                  col de 12
                </div>
                <div className='col-md-12 footer2'>
                  col de 12
                </div>
              </div>
            </div>
            {/*CHUNCHE DEL LADO DERECHO*/}
            <RighAside />
            {/*FIN DEL CHUNCHE DEL LADO DERECHO*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
