import { loader } from '@monaco-editor/react'

const monacoThemes = { cobalt: 'AD', katzenmilch: 'Katzenmilch' }

// loader.init().then(monaco => console.log('here is the monaco isntance:', monaco))

const EditorTheme = theme => {
  return new Promise<void>(res => {
    Promise.all([loader.init(), import(`./themes/${monacoThemes[theme]}.json`)]).then(
      ([monaco, themeData]) => {
        monaco.editor.defineTheme(theme, themeData)
        res()
      }
    )
  })
}

export { EditorTheme }
