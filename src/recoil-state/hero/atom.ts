import { atom } from 'recoil'

/**
 * Recoil managed state representing the visabile size of the hero selection section
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const condensedHeroAtom = atom<boolean>({
  key: 'condensedHero',
  default: false
})

// const [condensedHero, setCondensedHero] = useRecoilState(condensedHeroAtom)
// const setCondensedHero = useSetRecoilState(condensedHeroAtom)
// const condensedHero = useRecoilValue(condensedHeroAtom)
// const resetCondensedHero = useResetRecoilState(condensedHeroAtom)
