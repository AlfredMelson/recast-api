import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { condensedHeroAtom, currentApiStateAtom } from '../../recoil-state'
import { HeroClosedView, HeroOpenView } from '.'

export default function HeroContainter() {
  const currentApiState = useRecoilValue(currentApiStateAtom)
  const condensedHero = useRecoilValue(condensedHeroAtom)

  console.log('HeroContent: currentApiState', currentApiState)
  console.log('HeroContent: condensedHero', condensedHero)

  return (
    <>
      <AnimatePresence initial={true}>
        {condensedHero && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.5 }}>
              <HeroClosedView />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence initial={true}>
        {!condensedHero && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <motion.div
              variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
              transition={{ duration: 0.5 }}>
              <HeroOpenView />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
