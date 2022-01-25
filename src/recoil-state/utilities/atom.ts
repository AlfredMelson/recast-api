import { atom } from 'recoil'

/**
 * Recoil managed state representing the current width of the users screen
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const screenWidthAtom = atom<number | null>({
  key: 'screenWidth',
  default: null
})

// const [screenWidth, setScreenWidth] = useRecoilState(screenWidthAtom)
// const setScreenWidth = useSetRecoilState(screenWidthAtom)
// const screenWidth = useRecoilValue(screenWidthAtom)
// const resetScreenWidth = useResetRecoilState(screenWidthAtom)
