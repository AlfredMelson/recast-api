import MonacoEditor from '@monaco-editor/react'
import { debounce } from 'lodash'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { currentApiQuerySelector, monacoThemeAtom } from '../../recoil'
import { EditorContainer } from '../mui'

export function Editor() {
  //retrieve editor theme value
  const monacoTheme = useRecoilValue(monacoThemeAtom)

  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  //retrieve localStorage value
  const [formattedJson, setFormattedJson] = React.useState('')
  console.log('Editor formattedJson', formattedJson)

  // load from local storage
  React.useEffect(() => {
    const localStorageJson = localStorage.getItem('userGeneratedJson')
    if (localStorageJson) {
      const strData = JSON.stringify(localStorageJson, null, 2)
      setFormattedJson(strData)
      //   setUserGeneratedJson(localStorageJson)
    }
    const strData = JSON.stringify(currentApiQuery, null, 2)
    setFormattedJson(strData)
  }, [currentApiQuery, setFormattedJson])

  //lodash debounced() delays updating local text file for 750ms after user edit
  const onChange = debounce(
    React.useCallback(
      newValue => {
        setFormattedJson(newValue)
      },
      [setFormattedJson]
    ),
    750
  )

  return (
    <EditorContainer>
      <MonacoEditor
        height='92vh'
        value={formattedJson}
        language='json'
        theme={monacoTheme}
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
