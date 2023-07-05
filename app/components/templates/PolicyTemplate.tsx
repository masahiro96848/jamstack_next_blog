/**
 * templates/PolicyTemplate
 * @package Component
 */
import React from 'react'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
/* styles */
import styles from '@/styles/templates/policyTemplate.module.scss'

export const PolicyTemplate: React.FC = async () => {
  return (
    <BaseBlogPostLayout breadName="免責事項・プライバシーポリシー">
      {/* ページタイトル */}
      <PageTitle title="免責事項・プライバシーポリシー" />
      <section className={styles.container}>
        <main className={styles.main}>
          <div className={styles.contents}>
            <p>
              ZEROne（以下、「当サイト」と言います。）では、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。
            </p>
            <h1>個人情報の定義</h1>
            <p>
              本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別することができるものをいいます。
            </p>
            <h1>個人情報の管理</h1>
            <p>
              お客様からお預かりした個人情報は、不正アクセス、紛失、漏えい等が起こらないよう、慎重かつ適切に管理します。
            </p>
            <h1>免責事項</h1>
            <p>
              当ブログは、掲載内容によって生じた損害に対する一切の責任を負いません。
              各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。
              また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
            </p>
            <h1>著作権</h1>
            <p>
              当ブログに掲載されている文章・画像の著作権は、運営者に帰属しています。
              法的に認められている引用の範囲を超えて、無断で転載することを禁止します。
            </p>
            <h1>プライバシーポリシーの変更</h1>
            <p>
              当ブログは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。
              修正された最新のプライバシーポリシーは常に本ページにて開示されます。
            </p>
          </div>
        </main>
      </section>
    </BaseBlogPostLayout>
  )
}
