import React from "react";
import { API } from "../../api";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: props.likeCount,
      loading: false,
      error: null,
    };
  }

  async addLike() {
    const countNow = this.state.likeCount;
    try {
      this.setState({ loading: true, likeCount: countNow + 1  });

      const result = await API.patch(`/posts/${this.props.postId}/like`);

      this.setState({ loading: false, likeCount: result.data.like });
    } catch (error) {
      this.setState({ loading: false, error, likeCount: countNow });
    }
  }

  render() {
    return <button onClick={() => this.addLike()}>{this.state.likeCount} claps</button>;
  }
}

export default LikeButton;
