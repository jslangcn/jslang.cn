import { token } from "./base"
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const issuesConf = {
  owner: 'jslangcn',
  repo: 'jslang.cn',
}
const octokit = new Octokit({ auth: token.value })
console.log(token.value)
export async function issuesList(params: object = {}) {
  return await octokit.rest.issues.list({ ...issuesConf, ...params })
}