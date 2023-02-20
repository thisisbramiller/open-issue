# GitHub New Issue Action

This action creates issues on targeted repo in case they not exists already.

## Inputs

### `token`

**Required** GitHub token with permissions for targeted repo

### `issues`

**Required** List of JSON issues that need to contain "title", "message" and "owner"

### `org`

Repository organization. If not passed used the one from workflow.

### `repo`

Repository name. If not passed used the one from workflow.

## Outputs

There is not output but creation of GitHub Issues in targeted repository.

```yaml
uses: giant/issue-action@v1
with:
  token: ${{ secrets.ISSUE_AUTOMATION }} # access to target repo
  org: giantswarm
  repo: giantswarm
  issues: |
    [{
      "title":"Issue title",
      "owner":"Issue labels",
      "message":"Issue message",
    }]
```