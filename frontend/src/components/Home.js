import React from 'react';

function Warning(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div>Warning..!!</div>
    )
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: true }
    }
    render() {
        return (
            <Warning warn={this.state.status} />
        )
    }
    // render() {
    //     // return (<h1>{"I'm rendered"} here!!</h1>)
    //     return (
    //         <div>
    //             < h1 style={{ color: "Blue", fontFamily: "Arial" }}> I'm styled </h1>
    //         </div>);

    // }
}
export default Home;