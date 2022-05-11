const getYear = (epoc) => {
  return epoc.getFullYear()
}

export const meta = {
  AUTHOR: 'Shawn Kelley',
  CURRENT_YEAR: getYear(new Date()),
  DESCRIPTION: 'Digital home of Shawn Kelley, full stack JavaScript developer.',
  KEYWORDS:
    'shawn, kelley, javascript, react, next, react router, software, engineer, developer',
  TAG: '// Full Stack JavaScript',
  TITLE: 'Shawn Kelley',
}

export const sections = ['about', 'projects', 'contact']
