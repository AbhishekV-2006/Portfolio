import fs from 'node:fs/promises'

export async function readJson(filePath) {
  const contents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(contents)
}

export async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`)
}
