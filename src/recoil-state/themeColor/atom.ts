import { atom, AtomEffect, DefaultValue } from 'recoil'

/**
 * Atom Effects are a new experimental API for managing side-effects and initializing Recoil atoms.
 *
 * They have a variety of useful applications such as state persistence, state synchronization, managing history, logging, &c.
 *
 * They are defined as part of the atom definition, so each atom can specify and compose their own policies.
 *
 * This API is still evolving, and thus marked as _UNSTABLE.
 *
 * Atom effects are attached to atoms via the effects_UNSTABLE option. Each atom can reference an array of these atom effect functions which are called in priority order when the atom is initialized. Atoms are initialized when they are used for the first time within a <RecoilRoot>, but may be re-initialized again if they were unused and cleaned up. The atom effect function may return an optional cleanup handler to manage cleanup side-effects.
 *
 * guide: https://recoiljs.org/docs/guides/atom-effects/
 *
 */
const themePersist: AtomEffect<any> = ({ onSet, setSelf, node }) => {
  // local data retreived from themeColorAtom key, defined as node.key
  const storedJsonData = localStorage.getItem(node.key)
  if (storedJsonData === 'themeColor') {
    // Callbacks to set or reset the value of the atom.
    // This can be called from the atom effect function directly to initialize the
    // initial value of the atom, or asynchronously called later to change it.
    setSelf(storedJsonData)
  }
  // Subscribe to changes in the atom value.
  // The callback is not called due to changes from this effect's own setSelf().
  onSet(newItems => {
    if (newItems instanceof DefaultValue) {
      localStorage.removeItem(node.key)
    } else {
      localStorage.setItem(node.key, newItems)
    }
  })
}

/**
 * Recoil managed state representing the selected color mode value
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const themeColorAtom = atom<string | null>({
  key: 'themeColor',
  default: null,
  effects_UNSTABLE: [themePersist]
})
// const [themeColor, setThemeColor] = useRecoilState(themeColorAtom)
// const setThemeColor  = useSetRecoilState(themeColorAtom)
// const themeColor  = useRecoilValue(themeColorAtom)
// const resetThemeColor = useResetRecoilState(themeColorAtom)
