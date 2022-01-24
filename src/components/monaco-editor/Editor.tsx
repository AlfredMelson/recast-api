import MonacoEditor from '@monaco-editor/react'
import { debounce } from 'lodash'
import * as React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentApiQuerySelector, currentEditorTextState } from '../../recoil-state'
import { EditorContainer } from '../mui'

export default function Editor() {
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)
  console.log('currentApiQuery', currentApiQuery)
  console.log('typeof currentApiQuery', typeof currentApiQuery)

  const [currentEditorText, setCurrentEditorText] = useRecoilState(currentEditorTextState)

  //retrieve localStorage value
  const [formattedJson, setFormattedJson] = React.useState<{ [key: string]: any }>([])
  console.log('formattedJson', formattedJson)

  // handle localstorage value
  React.useEffect(() => {
    if (currentApiQuery) {
      setFormattedJson(currentApiQuery)
    } else {
      setFormattedJson(currentEditorText)
    }
    return
  }, [currentApiQuery, currentEditorText, setFormattedJson])
  // React.useEffect(() => {
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
  const onChange = debounce(
    React.useCallback(
      newValue => {
        // save formatedJson to localStorage
        setFormattedJson(newValue)
        setCurrentEditorText(newValue)
        return
      },
      [setCurrentEditorText]
    ),
    750
  )

  return (
    <EditorContainer>
      <MonacoEditor
        height='92vh'
        value={formattedJson.toString()}
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
