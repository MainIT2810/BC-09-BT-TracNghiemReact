import { TextField, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { answerList } from "../../store/action/question";
import styles from "./style";

class WriteQuestion extends Component {
  handleChange = (e) => {
    this.props.dispatch(
      answerList({
        questionId: e.target.id,
        answers: {
          content: e.target.name,
          exact:
            e.target.name.toLowerCase() === e.target.value.toLowerCase()
              ? true
              : false,
        },
      })
    );
  };
  render() {
    const { text } = this.props.classes;
    const { id, content, answers } = this.props.question;
    return (
      <>
        <Typography variant="subtitile2" component="h1" className={text}>
        {id}) {content}
        </Typography>
        <TextField
          fullWidth
          label="Câu trả lời của bạn"
          onChange={this.handleChange}
          id={id}
          name={answers[0].content}
        />
      </>
    );
  }
}

export default connect()(withStyles(styles)(WriteQuestion));
