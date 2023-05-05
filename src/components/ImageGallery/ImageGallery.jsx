import css from "components/ImageGallery/ImageGallery.module.css"
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = () => {
    return(
        <ul className={css.ImageGallery}>
          <ImageGalleryItem/>
        </ul>
    )
}