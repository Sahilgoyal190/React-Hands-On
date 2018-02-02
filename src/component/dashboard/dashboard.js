import React from 'react';
import './dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () =>{
        const value = this.refs.logoText.value;
        this.props.logoChange(value);
    }

    render() {
        return (
            <div className="container">
                <h1>My Dashboard ({this.props.currentPage})</h1>
                <div className="row">
                    <div className="col-md-6">
                        <label>Header Logo</label>
                        <input type="text" className="form-control" ref="logoText" onChange={this.handleClick}/>
                        <input type="button" value="Change the Header" className="btn btn-primary" 
                        onClick={this.handleClick}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;