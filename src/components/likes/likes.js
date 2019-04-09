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
            this.setState({ liked: true, count: 1, show: true })
        }
        else {
            this.setState({ liked: false, count: 0, show: false })
        }
    }

    render() {
        console.log(this.state)
        const { count, liked, show } = this.state;

        return (
            <>
                <div className='likes-container d-flex justify-content-start'>
                    <div>
                        {liked === true ? (
                            <i className="far fa-heart text-danger mr-3" onClick={this.handleLike} ></i>
                        ) : (
                            <i className="far fa-heart mr-3" onClick={this.handleLike} ></i>
                        )}
                    </div>
                    <div className='count'>
                        { show === true? count : null}
                    </div>
                </div>
            </>
        )
    }
}