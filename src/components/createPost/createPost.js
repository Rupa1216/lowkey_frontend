import React from 'react';
import axios from 'axios';
// import firebase from '../../firebase';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
import * as firebase from 'firebase';
// import ImageService from '../services/images';

//   // Initialize Firebase
//   const config = {
//     apiKey: "AIzaSyDnX-V1IEQDlgNv1XwraQA9jXi3pE8Yomk",
//     authDomain: "dumb-uploader.firebaseapp.com",
//     databaseURL: "https://dumb-uploader.firebaseio.com",
//     projectId: "dumb-uploader",
//     storageBucket: "dumb-uploader.appspot.com",
//     messagingSenderId: "370924651634"
// };
// firebase.initializeApp(config);

export default class CreatePost extends React.Component {

    static contextType = AuthContext;

    state = {
        post: '',
        file_obj: null,
        post_image: ''
    }

    handleChange = (e) => {
        this.setState({ post: e.target.value })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const { username } = this.state;

    //     axios.post('https://lowkey-sd.herokuapp.com/posts/')
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .then(() => {
    //             const root = firebase.storage().ref();
    //             const fileRoute = root.child(`${username}/images/${this.state.post_image}`)
    //             return fileRoute.put(this.state.file_obj)
    //         })
    //         .then((snap) => {
    //             return snap.ref.getDownloadURL()
    //         })
    //         .then((url) => {
    //             console.log(url)
    //             //send it to firebase here
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // }

    handleFileInput = (e) => {

        //     this.setState({ file_obj, filename }, () => {
        //         console.log(this.state)
        //     })

        // const file_obj = e.target.files[0];
        //     const filename = file_obj.name

        const firstFile = e.target.files[0]
        const fileName = firstFile.name

        console.log(firstFile.name)
        this.setState({
            post_image: fileName,
            file_obj: firstFile
        }, () => {
            console.log(this.state)
        })

        // const root = firebase.storage().ref()
        // const newImage = root.child(file_obj.name);

        // newImage.put(file_obj)
        //     .then((snapshot) => {
        //         return snapshot.ref.getDownloadURL()
        //     })
        //     .then((url) => {
        //         console.log(url)
        //         this.saveImage(url);
        //     })
    }

    handleClick = async (e) => {
                e.preventDefault();

        console.log('context', this.context);
        const { post_image, file_obj } = this.state
        const { username } = this.context
        const root = await firebase.storage().ref();

        const fRoute = await root.child(`/images/${post_image}`)
        return fRoute.put(file_obj)
            .then((snap) => {
                console.log(snap)
                return snap.ref.getDownloadURL()
            })
            .then((url) => {
                console.log(url)
                //username, email, firebase_uid , bio, profile_pic_url
                //const { displayName, email, userId, bio} = this.state;
                console.log(this.state)
                // return axios.post('http://localhost:5001/users', {
                //     username: displayName,
                //     email: email,
                //     firebase_uid: userId,
                //     bio: bio,
                //     profile_pic_url: url
                // })
            })
            // .then((response) => {
            //     console.log( 'next res', response);
            // })
            .catch(err => {
                const { message } = err;
                this.setState({
                    err: message
                })
                console.log('yeyeyeyey', this.state)
            })
    }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>
                                    <form>
                                        {/* <input type='text' className='input' onChange={this.handleChange} value={this.state.post} /> */}
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
