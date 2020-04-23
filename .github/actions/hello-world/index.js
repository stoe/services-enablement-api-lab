const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const token = core.getInput('repo-token', {required: true})
    const client = new github.GitHub(token)

    const {context} = github

    const issueComment = context.payload.issue({body: 'Hello from GitHub Actions!'})
    return client.issues.createComment(issueComment)
  } catch (err) {
    core.setFailed(err.message)
  }
}

run()
