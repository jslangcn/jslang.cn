const { Octokit } = require("@octokit/rest");
const fs = require('fs')
const path = require('path')
const shelljs = require('shelljs');

const sleep = seconds => { return new Promise(resolve => { setTimeout(resolve, seconds) }) }
const octokit = new Octokit({ auth: "" })
const dataDir = path.join(__dirname, '..', './data');

// data
const posts = []
const questions = []
// page
let questionPage = 1;
let postPage = 1;

// handle data
function handleData(data) {
  return data.map(item => {
    return {
      id: item.number,
      title: item.title,
      date: item.created_at,
      tags: item.labels.map(v => v.name),
      authors: {
        name: item.user.login,
        url: item.user.html_url,
        image_url: item.user.avatar_url
      },
      comments: item.comments,
      description: '',
      content: item.body
    }
  })
}

// questions
async function getQuestions() {
  try {
    const { data } = await octokit.rest.issues.listForRepo({
      owner: 'jslangcn',
      repo: '_questions',
      per_page: 100,
      page: questionPage
    });

    if (data && data.length) {
      questionPage++
      questions.push(...handleData(data))

      await sleep(300)
      await getQuestions()
    }
  } catch (err) {
    console.log('getQuestions err: ', err)
  }
}

// posts
async function getPosts() {
  try {
    const { data } = await octokit.rest.issues.listForRepo({
      owner: 'jslangcn',
      repo: '_posts',
      per_page: 100,
      page: postPage
    });

    if (data && data.length) {
      postPage++
      posts.push(...handleData(data))

      await sleep(300)
      await getPosts()
    }
  } catch (err) {
    console.log('getPosts err: ', err)
  }
}

!(async () => {
  if (!fs.existsSync(dataDir)) {
    shelljs.mkdir('-p', dataDir)
  }

  // questions
  await getQuestions()
  fs.writeFileSync(dataDir + '/questions.json', JSON.stringify(questions, null, 2))

  // posts
  await getPosts()
  fs.writeFileSync(dataDir + '/posts.json', JSON.stringify(posts, null, 2))
})()



