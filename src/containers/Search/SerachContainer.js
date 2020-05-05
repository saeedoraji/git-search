import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { getUsers } from "redux/user/actions";
import SearchBox from "components/SearchBox";
import SearchResult from "components/SearchResult";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  box: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(4),
  },
});

class SearchContainer extends Component {
  constructor() {
    super();
    this.searchValue = "";
  }

  componentDidMount() {}

  getUsers = () => {
    const { getUsers } = this.props;
    getUsers(this.searchValue);
  };

  onChangeHanlde = (e) => {
    const { value } = e.currentTarget;
    this.searchValue = value;
  };

  render() {
    const { users } = this.props;
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs" className={classes.root}>
        <Box className={classes.box}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchBox onChangeHanlde={this.onChangeHanlde} />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={this.getUsers}
              >
                Search
              </Button>
            </Grid>
            <Grid item xs={12}>
              <SearchResult users={users} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  users: state.USER.users,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getUsers }, dispatch);

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

export default withStyles(useStyles)(Search);
