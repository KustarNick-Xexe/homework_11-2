import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../photoSlice";

const PhotoUploader = () => {
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = () => {
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = () => {
      dispatch(addPhoto(reader.result));
    };
  };

  return (
    <div className="m-4">
      <input type="file" accept="image/*" onChange={handleChange} />
      <button 
        className=" bg-slate-900 text-slate-50 py-1 px-3" 
        onClick={handleSubmit}>Подтвердить загрузку</button>
    </div>
  );
};

export default PhotoUploader;