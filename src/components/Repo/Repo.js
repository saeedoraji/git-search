import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Star from "@material-ui/icons/Star";
import { getUsersRepo } from "redux/repo/actions";
export class UsersRepo extends Component {
  constructor() {
    super();
    console.log("loaded repo");
  }
  componentDidMount() {
    const { getUsersRepo, username } = this.props;
    getUsersRepo(username);
  }
  render() {
    const { repos } = this.props;
    return (
      <List component="nav" aria-label="users repositories">
        {repos &&
          !!repos &&
          repos.map((repo) => (
            <ListItem key={repo.id} button>
              <ListItemText primary={repo.name} />
              <ListItemIcon>
                {repo.stargazers_count}
                <Star />
              </ListItemIcon>
            </ListItem>
          ))}
      </List>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  repos: state.REPO.repos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getUsersRepo }, dispatch);

const Repo = connect(mapStateToProps, mapDispatchToProps)(UsersRepo);

export default Repo;
