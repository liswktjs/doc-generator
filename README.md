# Docs generator

chat gpt 를 활용한, 3초안에 코드 문서화 하기 🖊️

더 효율적으로 문서화를 하고 싶은 사람들을 위한 라이브러리

명령어를 입력하여 코드를 읽어 chat gpt api를 활용하여 md 문서를 생성해줍니다.

- github repo url : https://github.com/liswktjs/doc-generator
- npm url : https://www.npmjs.com/package/sun-doc-generator

## 사용법

1. root의 env에 CHAT_GPT_API_KEY를 추가하세요

```
CHAT_GPT_API_KEY=your-chat-gpt-api-key
```

2. package.json의 script에 명령어를 추가해주세요

```
"scripts" : {
  "docs": "gen docs"
}
```

3. vscode 터미널에 npm run docs "[문서화 하고자 하는 코드 경로]" "[코드에 대한 간단한 설명]" 을 실행하세요

```
npm run docs "./src/test/sample.tsx" "sample description"
```

4. 잠시 기다리면, 입력한 파일 경로 하위에 코드에 대한 설명이 적힌 md 파일이 생성됩니다! 🧞

## 알림

- 이 라이브러리는 chat gpt api key를 제공하지 않습니다. 개인의 chat gpt api key를 발급받아 사용해주세요
- prompt 혹은 문서의 format을 수정하고 싶으시다면, ai 폴더하위의 prompt.ts에서 수정을 해주세요. 수정 후에는 다시 빌드 하여 사용하여야 합니다
- chat gpt 의 `gpt-4o-mini` 모델을 활용합니다.


## 시연 영상 

- script 명령어 입력


https://github.com/user-attachments/assets/2fa40cc5-a414-4184-9bbd-0cd3cc509c8a


- 문서 생성

  

https://github.com/user-attachments/assets/f433ebfb-0fac-4756-96f2-6f0239daee7a

