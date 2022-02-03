import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { condensedHeroAtom, currentApiStateAtom } from '../../recoil-state'
import { HeaderLogo, HeaderTitle } from '../header'

interface NavLogo {
  hover: boolean
}

export default function NavLogo({ hover }: NavLogo) {
  const currentApiState = useRecoilValue(currentApiStateAtom)
  const condensedHero = useRecoilValue(condensedHeroAtom)

  console.log('HeroContent: currentApiState', currentApiState)
  console.log('HeroContent: condensedHero', condensedHero)

  return (
    <>
      <AnimatePresence initial={false}>
        {!hover && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.5 }}>
            <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.5 }}>
              <HeaderLogo />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {hover && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.5 }}>
            <motion.div
              variants={{ collapsed: { scale: 0.95 }, open: { scale: 1 } }}
              transition={{ duration: 0.5 }}>
              <HeaderTitle />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
