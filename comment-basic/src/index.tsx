import React from "react";
import styles from "./index.less";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled
} from "@ant-design/icons";

class App extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: "liked"
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: "disliked"
    });
  };

  render() {
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          {React.createElement(action === "liked" ? LikeFilled : LikeOutlined, {
            onClick: this.like
          })}
        </Tooltip>
        <span className="comment-action">{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          {React.createElement(
            action === "liked" ? DislikeFilled : DislikeOutlined,
            {
              onClick: this.dislike
            }
          )}
        </Tooltip>
        <span className="comment-action">{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Reply to</span>
    ];

    return (
      <Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-comment-demo-basic">
      <App />
    </div>
  </div>
);
