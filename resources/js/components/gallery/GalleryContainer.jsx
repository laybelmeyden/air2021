import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGalleryThunkCreater } from '../redux/galleryReducer'
import Gallery from './Gallery'

const GalleryContainer = (props) => {
    useEffect(() => {
        props.getGallery();
    }, []);
    return (
        <Gallery galleryPage={props.galleryPage}/>
    )
}
const mapStateToProps = (state) => {
    return {
        galleryPage: state.galleryPage,
    };
};

export default connect(mapStateToProps, {
    getGallery: getGalleryThunkCreater
})(GalleryContainer);
