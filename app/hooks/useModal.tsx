'use client'
/**
 * useModal
 * @package hooks
 */
import React, { useState, useCallback } from 'react'

export const useModal = () => {
  const [isMenuModal, setIsMenuModal] = useState(false)

  /* MenuModalを開く処理 */
  const handleOpenMenuModal = useCallback(() => {
    setIsMenuModal(true)
  }, [])

  /* MenuModalを閉じる処理 */
  const handleCloseMenuModal = useCallback(() => {
    setIsMenuModal(false)
  }, [])

  const states = { isMenuModal }

  const actions = {
    handleOpenMenuModal,
    handleCloseMenuModal,
  }

  return [states, actions] as const
}
