import MonacoEditor from '@monaco-editor/react'
import { debounce } from 'lodash'
import { useCallback, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentApiQuerySelector } from '../../recoil-state'
import { localEditorTextAtom } from '../../recoil-state/editor/atom'
import { EditorContainer } from '../mui'

export default function Editor() {
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  //retrieve localStorage value
  const [localEditorText, setLocalEditorText] = useRecoilState(localEditorTextAtom)
  // load from local storage
  useEffect(() => {
    const localStorageJson = localStorage.getItem('localJsonText')
    if (localStorageJson) {
      setLocalEditorText(localStorageJson)
    } else {
      const jsonFromApi = JSON.stringify(currentApiQuery.data, null, 2)
      setLocalEditorText(jsonFromApi)
    }
  }, [currentApiQuery.data, setLocalEditorText])
  //lodash debounced() delays updating local text file for 750ms after user edit
  const onChange = debounce(
    useCallback(
      newValue => {
        setLocalEditorText(newValue)
      },
      [setLocalEditorText]
    ),
    750
  )

  return (
    <EditorContainer>
      <MonacoEditor
        height='92vh'
        value={localEditorText}
        language='json'
        theme='vs-dark'
        onChange={onChange}
        options={{
          acceptSuggestionOnCommitCharacter: true,
          acceptSuggestionOnEnter: 'on',
          accessibilitySupport: 'off',
          autoClosingOvertype: 'always',
          autoIndent: 'advanced',
          automaticLayout: true,
          codeLens: true,
          colorDecorators: false,
          contextmenu: false,
          lineNumbers: 'on',
          cursorBlinking: 'blink',
          cursorSmoothCaretAnimation: false,
          cursorStyle: 'line',
          disableLayerHinting: false,
          disableMonospaceOptimizations: false,
          dragAndDrop: false,
          fixedOverflowWidgets: false,
          folding: true,
          foldingStrategy: 'auto',
          fontLigatures: true,
          formatOnPaste: true,
          formatOnType: true,
          hideCursorInOverviewRuler: false,
          links: true,
          minimap: {
            enabled: false,
            renderCharacters: false
          },
          mouseWheelZoom: true,
          multiCursorMergeOverlapping: true,
          multiCursorModifier: 'alt',
          overviewRulerBorder: false,
          overviewRulerLanes: 1,
          quickSuggestions: true,
          quickSuggestionsDelay: 100,
          readOnly: false,
          renderControlCharacters: false,
          renderFinalNewline: true,
          renderLineHighlight: 'all',
          renderWhitespace: 'none',
          revealHorizontalRightPadding: 30,
          roundedSelection: true,
          scrollBeyondLastLine: false,
          scrollBeyondLastColumn: 1,
          selectOnLineNumbers: true,
          selectionClipboard: false,
          selectionHighlight: true,
          showFoldingControls: 'mouseover',
          smoothScrolling: true,
          suggestOnTriggerCharacters: true,
          wordBasedSuggestions: true,
          wordSeparators: '~!@#$%^&*()-=+[{]}|;:\'",.<>/?',
          wordWrap: 'on',
          wordWrapBreakAfterCharacters: '\t})]?|&,;',
          wordWrapBreakBeforeCharacters: '{([+',
          wordWrapColumn: 100
        }}
      />
    </EditorContainer>
  )
}

// const [formattedJson, setFormattedJson] = useState('')

// const [currentEditorText, setCurrentEditorText] = useRecoilState(currentEditorTextState)

// handle localstorage value
// useEffect(() => {
//   if (currentApiQuery) {
//     const convertToString: string = JSON.stringify(currentApiQuery.data)
//     setFormattedJson(convertToString)
//   }
// else {
//   setFormattedJson(currentEditorText)
// }
//   return
// }, [currentApiQuery, setFormattedJson])
// useEffect(() => {
//   const localStorageJson = localStorage.getItem('formattedJson')

//   if (!localStorageJson) {
//     // save formatedJson to localStorage
//     function saveToLocalStorage(formattedJson: string) {
//       localStorage.setItem('formattedJson', formattedJson)
//     }
//     return saveToLocalStorage(formattedJson)
//   }
//   if (localStorageJson) {
//     // get localStorage value and setFormattedJson
//     const localStorageJson = localStorage.getItem('formattedJson')
//     return setFormattedJson(localStorageJson)
//   } else {
//     return setFormattedJson('')
//   }
// }, [formattedJson, setFormattedJson])

// lodash debounced() delays updating local text file for 750ms after user edit
// const onChange = debounce(
//   useCallback(newValue => {
//     // save formatedJson to localStorage
//     setFormattedJson(newValue)
//     // setCurrentEditorText(newValue)
//     return
//   }, []),
//   750
// )
