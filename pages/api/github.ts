import type { NextApiRequest, NextApiResponse } from 'next'

const { GITHUB_PERSONAL_TOKEN: githubToken } = process.env

const github = async (req: NextApiRequest, res: NextApiResponse) => {
  const repoName = req.query.repo
  const response = await fetch(
    `https://api.github.com/repos/wesngu28/${repoName}/languages`,
    {
      headers: {
        authorization: `token ${githubToken}`,
      },
    }
  )

  const languages = await response.json()
  const langLines: Array<number> = Object.values(languages)
  const lines = langLines.reduce((a, b) => a + b, 0)
  Object.keys(languages).forEach(language => {
    languages[language] = 100 * (languages[language] / lines)
  })
  return res.status(200).json(languages)
}

export default github
