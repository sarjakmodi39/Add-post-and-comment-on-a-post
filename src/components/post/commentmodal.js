import { Modal, Button } from "@mui/material";
import { useState } from "react";
import { makePostAPICAll } from "../../services/api";
import { urlConstant } from "../../constants/URLConstants";
import css from "./comment.modal.module.css";
const CreateCommentModal = (props) => {
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePostChange = (event) => {
    setBody(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    makePostAPICAll(urlConstant.createComment(props.id), {
      body,
      name,
      email,
    }).then((result) => {
      props.onSave();
      props.onClose();
    });
  };
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className={css.modalContainer}>
        <div className={css.modal}>
          <header className={css.header}>Post a Comment</header>
          <form className={css.form}>
            <div className={css.inputFieldContainer}>
              <label className={css.label}>Comment :</label>
              <div className={css.inputContainer}>
                <textarea
                  className={css.input}
                  value={body}
                  onChange={handlePostChange}
                />
              </div>
            </div>
            <div className={css.inputFieldContainer}>
              <label className={css.label}>Name :</label>
              <div className={css.inputContainer}>
                <input
                  className={css.input}
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className={css.inputFieldContainer}>
              <label className={css.label}>Email :</label>
              <div className={css.inputContainer}>
                <input
                  className={css.input}
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />
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
export default CreateCommentModal;
