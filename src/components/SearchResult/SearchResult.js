import React, { Component, lazy, Suspense } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const importRepos = (props) => lazy(() => import(`components/Repo`));

export class SearchResult extends Component {
  state = {
    expanded: false,
  };

  handleChangePanel = (panel) => async (_, isExpanded) => {
    const Repo = await importRepos();
    this.setState({ expanded: isExpanded ? panel : false, Repo, panel });
  };

  render() {
    const { expanded, Repo, panel } = this.state;
    const { users } = this.props;
    return (
      <>
        {users &&
          !!users.length &&
          users.map((user) => (
            <ExpansionPanel
              key={user.id}
              expanded={expanded === user.login}
              onChange={this.handleChangePanel(user.login)}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id={user.id}
              >
                <span className="panel-text">{user.login}</span>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Suspense fallback={<div>Loading...</div>}>
                  {panel === user.login && Repo && (
                    <Repo username={user.login} />
                  )}
                </Suspense>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
      </>
    );
  }
}
