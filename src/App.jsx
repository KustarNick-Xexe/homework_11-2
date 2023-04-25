import PhotoUploader from "./components/PhotoUploader";
import PhotoGallery from "./components/PhotoGallery";

const App = () => {
  return (
    <div className="flex justify-between my-0 mx-40">
      <div className="">
        <PhotoGallery />
      </div>
      <div className="">
        <PhotoUploader />
      </div>
    </div>
  );
};

export default App;