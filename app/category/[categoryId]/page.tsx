'use client'
/**
 * category/[categoryName]/page.tsx
 */
import React from 'react'
import { useParams } from 'next/navigation'
/* compoents */
import { CategoryTemplate } from '@/components/templates/CategoryTemplate'

const CategoryPage = () => {
  const params = useParams()
  const categoryId = params.categoryId

  return <CategoryTemplate categoryId={categoryId} />
}

export default CategoryPage
