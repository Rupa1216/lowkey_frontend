import React from 'react';

export default class Likes extends React.Component {

    state = {
        liked: false,
        show: false,
        count: 0
    }

    handleLike = (e) => {
        let { count } = this.state;
        if (count === 0) {
            count++
            this.setState({ liked: true, count: count, show: true })
        }
        else {
            count--
            this.setState({ liked: false, count: count, show: false })
        }
    }

    render() {
        console.log(this.state)
        const { count, liked, show } = this.state;

        return (
            <>
                <div className='likes-container d-flex justify-content-start'>
                    <div style={{ cursor: "pointer" }}>
                        {liked === true ? (
                            <i className="far fa-heart text-danger mr-3" onClick={this.handleLike} ></i>
                        ) : (
                                <i className="far fa-heart mr-3" onClick={this.handleLike} ></i>
                            )}
                    </div>
                    <div className='count'>
                        {show === true ? count : null}
                    </div>
                </div>
            </>
        )
    }
}