const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    var issues = [];
    const token = core.getInput("token");
    const check_exists = core.getInput("check_exists");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = github.getOctokit(token);

    if (check_exists) {
      const regex = /\s/g;
      let q = title.replace(regex, '+') + " in:title";
      issues = octokit.rest.search.issuesAndPullRequests({
        q,
      });
      core.info("Check exists to true")
    }
    
    core.info("issue exist response: " + JSON.stringify(issues));

    const response = await octokit.restg.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split("\n") : undefined
    });

    core.info("issue", JSON.stringify(response.data));
  } catch (error) {
    core.error(error.message);
  }
}

run();
