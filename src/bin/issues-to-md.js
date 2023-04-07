const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')
const matter = require('gray-matter')
const shelljs = require('shelljs');

const questions = require('../data/questions.json')
const posts = require('../data/posts.json')

function handleMatter(item) {
  const matterData =  {
    ID: item.id,
    title: item.title,
    date: dayjs(item.date).format('YYYY-MM-DD H:mm:ss'),
    slug: `/${item.id}`,
    authors: item.authors,
    tags: item.tags,
    comments: item.comments
  }
  return matter.stringify('\n \n<!--truncate-->\n \n' + item.content, matterData)
}

// create questions
function createQuestions() {
  try {
    questions.forEach(item => {
      const content =  handleMatter(item)

      const fileDir = path.join(__dirname, '../../question/', dayjs(item.date).format('YYYY/MM/DD'))
      if (!fs.existsSync(fileDir)) {
        shelljs.mkdir('-p', fileDir)
      }
      fs.writeFileSync(`${fileDir}/${item.id}.md`, content)
    });
  } catch (err) {
    console.log('createQuestions err: ', err)
  }
}
createQuestions()

// create posts
function createPosts() {
  try {
    posts.forEach(item => {
      const content =  handleMatter(item)

      const fileDir = path.join(__dirname, '../../blog/', dayjs(item.date).format('YYYY/MM/DD'))
      if (!fs.existsSync(fileDir)) {
        shelljs.mkdir('-p', fileDir)
      }
      fs.writeFileSync(`${fileDir}/${item.id}.md`, content)
    });
  } catch (err) {
    console.log('createPosts err: ', err)
  }
}
createPosts()