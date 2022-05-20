import { Card } from "antd";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "antd/dist/antd.css";
import CreateCommentModal from "./commentmodal";
import { makeGetAPICAll } from "../../services/api";
import { urlConstant } from "../../constants/URLConstants";
const Post = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getUserComments();
  }, []);

  const getUserComments = () => {
    makeGetAPICAll(urlConstant.retrievesComments(props.data.id)).then(
      (result) => {
        setComments(result);
        console.log(result);
      }
    );
  };
  const handleOpen = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <Card.Grid>
      <div key={props.data.id}>
        <p>Body={props.data.body}</p>
        <p>Title={props.data.title}</p>
        <p>Comment={comments?.[comments?.length - 1]?.body ?? "No Comments"}</p>
        <Button onClick={handleOpen}>Post a comment</Button>
        <CreateCommentModal
          id={props.data.id}
          open={isModalVisible}
          onClose={handleCloseModal}
          onSave={getUserComments}
        ></CreateCommentModal>
      </div>
    </Card.Grid>
  );
};
export default Post;
