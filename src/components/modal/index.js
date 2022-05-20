import { Modal, Button } from "@mui/material";
import { useState } from "react";
import { makePostAPICAll } from "../../services/api";
import { urlConstant } from "../../constants/URLConstants";
import css from "./modal.module.css";
import RetrieveUserPost from "../RetrieveUserPost";

const CreatePostModal = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = () => {
    makePostAPICAll(urlConstant.createPost, { title, body }).then((result) => {
      props.onSave();
      props.onClose();
    });
  };
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className={css.modalContainer}>
        <div className={css.modal}>
          <header className={css.header}>Create Post</header>
          <form className={css.form}>
            <div className={css.inputFieldContainer}>
              <label className={css.label}>Title :</label>
              <div className={css.inputContainer}>
                <input
                  className={css.input}
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
            </div>
            <div className={css.inputFieldContainer}>
              <label className={css.label}>Body :</label>
              <div className={css.inputContainer}>
                <textarea
                  className={css.input}
                  value={body}
                  onChange={handleBodyChange}
                ></textarea>
              </div>
            </div>
          </form>
          <footer>
            <div className={css.buttonContainer}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleSubmit}
              >
                submit
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </Modal>
  );
};
export default CreatePostModal;
