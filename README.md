# GitHub New Issue Action

This action opens a new GitHub issue.

## Inputs

### `token`

**Required** GitHub token

### `title`

**Required** Issue title

### `check_exists`

**Optional** Check if Issue title already exists

### `body`

Issue body

### `assignees`

Issue assignees - Passed as a formatted multi-line string using the | character.

## Outputs

### `issue`

The issue object as a JSON string

```yaml
uses: bramiller1989/issue-action@v1
with:
  token: ${{ secrets.GITHUB_TOKEN }}
  title: Some Issue Title
  body: Some Issue Body
  assignees: |
    bramiller
    bramiller1989
```