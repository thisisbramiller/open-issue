const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("token");
    const issuesJSON = core.getInput("issues");
    var issues = JSON.parse(issuesJSON)

    const octokit = github.getOctokit(token);

    if (!issues || issues.length == 0) {
      core.info("The issues var is empty: "+issues)
      core.info("The issues JSON: "+issuesJSON)
      return
    }

    issues.forEach(issue => {
      //check if exists
      //create issue

      if (octokit) {
        core.info("Octokit load")
      }
      core.info("This is my issue: "+issue)

    });
    // if (check_exists) {
    //   const regex = /\s/g;
    //   let q = title.replace(regex, '+') + "+in:title+is:issue+is:open+repo:" + github.context.repo.owner + "/" + github.context.repo.repo;
    //   issues = await octokit.rest.search.issuesAndPullRequests({
    //     q,
    //   });

    //   core.info("issues found: " + JSON.stringify(issues.data));
    //   if (issues.data.total_count > 0) {
    //     return
    //   }
    // }

    // const response = await octokit.rest.issues.create({
    //   ...github.context.repo,
    //   title,
    //   body,
    //   assignees: assignees ? assignees.split("\n") : undefined
    // });

    // core.info("issue: " + JSON.stringify(response.data));
  } catch (error) {
    core.error(error.message);
  }
}

run();
