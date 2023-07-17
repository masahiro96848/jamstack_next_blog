# ZEROne IT 技術ブログ

## サイトURL
https://zerone-blog.vercel.app/

## 機能

- ブログ記事一覧
- カテゴリー絞り込みブログ記事一覧
- パンくずリスト
- ブログ記事詳細
- プロフィール
- プライバシーポリシー
- Google Analytics

## 技術構成

- React18
- Next.js13(App Router)
- microCMS(コンテンツ管理)
- TypeScript5.1.5
- ESLint
- Prettier
- CSS Modules
- Storybook7.0.17
- Jest
- Vercel(Hosting)
- Github Actions

## microCMS のスキーマ設定

### Blog

endpoint: blogs  
type: リスト形式

| フィールド ID | 表示名           | 種類                            |
| ------------- | ---------------- | ------------------------------- |
| title         | タイトル         | テキストフィールド              |
| body          | 内容             | リッチエディタ                  |
| image         | 画像             | 画像                            |
| description   | ブログ記事の説明 | テキストフィールド              |
| categories    | カテゴリー       | 複数コンテンツ参照 - カテゴリー |

### Category

endpoint: profile  
type: リスト形式

| フィールド ID | 表示名       | 種類               |
| ------------- | ------------ | ------------------ |
| name          | カテゴリー名 | テキストフィールド |

### Profile

endpoint: profile  
type: リスト形式

| フィールド ID | 表示名             | 種類               |
| ------------- | ------------------ | ------------------ |
| name          | ユーザー名         | テキストフィールド |
| englishName   | 英字ユーザー名     | テキストフィールド |
| position      | 役割               | テキストフィールド |
| introduction  | 自己紹介文         | テキストエリア     |
| userImage     | ユーザー画像       | 画像               |
| articleImage  | 記事画像           | 画像               |
| description   | プロフィール紹介文 | テキストフィールド |
| body          | 本文               | リッチエディタ     |

# 環境変数

プロジェクトルートに.env ファイルを作成して、以下の項目を設定してください。

- X_MICROCMS_API_KEY(microCMS の API キー)
- NEXT_PUBLIC_BASE_URL(microCMS の API ベースの URL)
- NEXT_PUBLIC_GOOGLE_ANALYTICS_ID(Google AnalyticsのID)

例)

```
X_MICROCMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_BASE_URL=https://xxxxxx.microcms.io/api/v1
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=xxxx-xxxxx
```

# 開発方法

```
# パッケージをインストール
$ npm i

# 開発サーバーを起動(localhost:3000)
$ npm run dev

# 静的サイトを生成
$ npm run build

# 静的サイトを起動(localhost:3000)
$ npm run start

# storybookを起動
$ npm run storybook

# 単体テストを実行
$ npm run test
```
