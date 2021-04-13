import React, {Component} from 'react';
import Notifications from './Notifications';
import BloodList from '../blood/BloodList';
import Maps from './Maps';

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard conatiner">
                <div className="row">
                    <div className="col s12 m6">
                        <BloodList/>
                        <BloodList/>
                        <BloodList/>
                        <BloodList/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>

                    <div>
                        <Maps/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard