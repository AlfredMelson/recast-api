import { atom, AtomEffect, DefaultValue } from 'recoil'

export const localPersist: AtomEffect<any> = ({ onSet, setSelf, node }) => {
  const storedJsonData = localStorage.getItem(node.key)
  if (storedJsonData === 'localJsonText') {
    setSelf(storedJsonData)
  }

  onSet(newItems => {
    if (newItems instanceof DefaultValue) {
      localStorage.removeItem(node.key)
    } else {
      localStorage.setItem(node.key, newItems)
    }
  })
}

export const localEditorTextAtom = atom<string>({
  key: 'localJsonText',
  default: '',
  effects_UNSTABLE: [localPersist]
})
// const [localEditorText, setLocalEditorText] = useRecoilState(localEditorTextAtom)
// const setLocalEditorText = useSetRecoilState(localEditorTextAtom)
// const localEditorText  = useRecoilValue(localEditorTextAtom)
