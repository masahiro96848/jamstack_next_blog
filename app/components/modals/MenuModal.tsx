/**
 * modals/MenuModal
 * @package Components
 */
import React from 'react'
import Link from 'next/link'
import Modal from 'react-modal'
/** styles */
import styles from '@/styles/objects/components/modals/menuModal.module.scss'

type Props = {
  isModalMenu: boolean
  handleCloseMenuModal: () => void
}

/**
 * MenuModal
 */
export const MenuModal = (props: Props) => {
  const { handleCloseMenuModal } = props

  const { isModalMenu } = props
  return (
    <div>
      <Modal
        isOpen={isModalMenu}
        onRequestClose={handleCloseMenuModal}
        className={{
          base: styles.body__base,
          afterOpen: styles.body__after,
          beforeClose: styles.body__before,
        }}
        overlayClassName={{
          base: styles.overlay__base,
          afterOpen: styles.overlay__after,
          beforeClose: styles.overlay__before,
        }}
        ariaHideApp={false}
      >
        <div className={styles.container}>
          <h1 className={styles.title}>Menu</h1>
          <div className={styles.links}>
            <Link href="/">
              <h2 className={styles.link}>トップ</h2>
            </Link>
            <Link href="/blog/intro">
              <h2 className={styles.link}>このブログについて</h2>
            </Link>
            <Link href="/profile">
              <h2 className={styles.link}>プロフィール</h2>
            </Link>
          </div>
          <button onClick={handleCloseMenuModal}>閉じる</button>
        </div>
      </Modal>
    </div>
  )
}
