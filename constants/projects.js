import TechSVG from 'components/TechSVG'

const {
  JavaScript,
  React,
  Router,
  Next,
  Node,
  Express,
  HTML,
  CSS,
  Sass,
  Git,
  GitHub,
  VSCode,
} = TechSVG

class Project {
  constructor(title, technologies, description, liveUrl, ghUrl, epoch) {
    this.title = title
    this.technologies = technologies
    this.description = description
    this.liveUrl = liveUrl
    this.ghUrl = ghUrl
    this.epoch = epoch
  }
}

const skdev = new Project(
  'Shawn Kelley',
  [Next, React, CSS],
  'A portfolio.',
  'https://www.shawnkelley.dev',
  'https://github.com/shawnkelleydev/skd-next-2',
  Date.parse('may 15 2022')
)

const wkcom = new Project(
  'Whitney Kelley',
  [Next, React, CSS, Node],
  'An artist website for flutist and educator, Dr. Whitney Kelley.',
  'https://www.whitneykelley.com',
  'https://github.com/shawnkelleydev/whitney-next',
  Date.parse('may 10 2022')
)

const fl = new Project(
  'First Light',
  [React, Router, Sass],
  'A devotional website featuring all things cosmic.',
  'https://firstlight-skd.netlify.app/',
  'https://github.com/shawnkelleydev/firstlight-fs/tree/main/client',
  Date.parse('february 1 2022')
)

const tl = new Project(
  'Tomorrow Land',
  [React, Router, Sass],
  'An appealing budget builder managing state from the URL.',
  'https://tomorrow-land-skd.netlify.app/',
  'https://github.com/shawnkelleydev/tomorrow-land-fs/tree/main/client',
  Date.parse('march 1 2022')
)

export const projects = [skdev, wkcom, fl, tl]
