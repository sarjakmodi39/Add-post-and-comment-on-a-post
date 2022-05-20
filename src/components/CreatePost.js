import CreatePostModal from "./modal";
import { useEffect, useState } from "react";

const CreatePost = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
        <button onClick={handleOpenModal}>Create post</button>
        <CreatePostModal
          open={isModalVisible}
          onClose={handleCloseModal}
          onSave={props.onSave}
        />
      </div>
    </>
  );
};
export default CreatePost;
