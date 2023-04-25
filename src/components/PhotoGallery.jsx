import { useSelector } from "react-redux";

const PhotoGallery = () => {
    const photos = useSelector(state => state.photo.photos);
    console.log(photos);

    return (
        <div className="flex justify-between">
            <img className="object-fill w-200 h-200 mr-8 rounded-full"
                key={photos[photos.length - 1]?.id}
                src={photos[photos.length - 1]?.photo}
                width="200"
                height="200"
            />
            <div>
            {photos?.slice(0, photos.length - 1).reverse().map((photo) => (
                <img className="object-fill w-200 h-200 rounded-full"
                    key={photo.id}
                    src={photo.photo}
                    width="200"
                    height="200"
                />
            ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
