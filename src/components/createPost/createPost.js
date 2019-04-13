import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
import * as firebase from 'firebase';

export default class CreatePost extends React.Component {

    static contextType = AuthContext;

    state = {
        post: '',
        file_obj: null,
        post_image_name: '',
        post_image_url: '',
        error: '',
    }

    handleChange = (e) => {
        this.setState({ post: e.target.value })
    }

    handleFileInput = (e) => {

        const firstFile = e.target.files[0]
        const fileName = firstFile.name

        this.setState({
            post_image_name: fileName,
            file_obj: firstFile
        }, () => {
            console.log('state got set w the file', this.state)
        })
    }

    handleClick = async (e) => {

    const { post } = this.state;

        e.preventDefault();

        console.log('createPost context', this.context);
        const { post_image_name, file_obj } = this.state
        const root = await firebase.storage().ref();

        const fRoute = await root.child(`/images/${post_image_name}`)
        return fRoute.put(file_obj)
            .then((snap) => {
                return snap.ref.getDownloadURL()
            })
            .then((url) => {
                // console.log('createPost image_url: ', url)
                this.setState({post_image_url: url}, () => {
                console.log('state has the url', this.state.post_image_url)
                
                const { fbase_uid } = this.context;
                const { post } = this.state;

                axios.post('http://localhost:3003/posts/', {
                    fbase_uid: fbase_uid,
                    text_content: post,
                    image_url: url
                })
                })
            })
            .catch(error => {
                const { message } = error;
                this.setState({
                    error: message
                })
                console.log('uh oh', this.state)
            })
    }

    /* PROCESS:

    user types - onChange 
        - post content saved to state
    user selects image - handleFileInput 
        - fileName and file_obj saved to state
    user clicks Submit - handleClick 
        - get back Firebase URL of post_image_name - setState
    ((here)) API Call creates this.state.post in posts table
        -- generates post_id, save to state?

    */

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>
                                    <form>
                                        <div className="input-group">
                                            <textarea className="form-control input" onChange={this.handleChange} value={this.state.post} aria-label="With textarea"></textarea>
                                        </div>
                                        <br />
                                        <div className="input-group mb-3">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" onChange={this.handleFileInput} accept="image/x-png,image/gif,image/jpeg" />
                                                <label className="custom-file-label">Upload Image</label>
                                            </div>
                                        </div>
                                        <br />
                                        <button type="submit" className='button btn btn-info' onClick={this.handleClick}>Submit</button>
                                    </form>
                                </>
                            )
                        } else {
                            return <Redirect to='/login' />
                        }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}
