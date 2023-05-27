import React from 'react'

import Footer from '@/components//layouts/Footer'
import Header from '@/components/layouts/Header'
import styles from '@/styles/modules/baseLayout.module.scss'

/**
 * Props
 */
// export type Props = {
//   children: React.ReactNode
// }

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  // props

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default BaseLayout
