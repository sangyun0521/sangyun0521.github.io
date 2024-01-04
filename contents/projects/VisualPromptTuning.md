---
date: '2023-09-01'
title: 'Visual Prompt Tuning'
categories: ['학부연구생']
summary: '이미지 형태의 Prompt를 학습하여 ViT 모델을 Continual Learning setting에서 Fine-tuning'
thumbnail: './vpt.png'
---

# Visual Prompt Tuning

_학부연구생 프로젝트 (2023.09 ~ 2023.12)_

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/d27fc948-7527-4618-9f3b-a40324f08050/Untitled.png?id=db8dfaa7-cf40-443a-adbe-3c20af5f7a13&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704103200000&signature=Fy7MWI4QoPGFiFbjmzn12hWUO2yPLwkVl6i58p2FALc&downloadName=Untitled.png" width="500"/>

### Visual Prompt Tuning

컴퓨터 비전 모델 (ViT)에서 Prompt Tuning은 단순 숫자 형태의 vector를 prompt로 사용한다.

숫자 형태의 prompt를 사용 할 경우 다음과 같은 문제가 있다.

- Explainability 부족 : Prompt Tuning을 통해 성능이 좋은 Prompt를 얻어도 단순 숫자 벡터로 표현되기 때문에 explainability가 부족하다
- 이미지의 형태가 아니기 때문에 ViT 모델의 모든 컴포넌트를 통해 학습 할 수 없다 : Patch Embedding Layer를 포함하지 않고 prompt가 학습된다.

이에 따라 이미지 형태의 prompt를 학습하여 Visualize된 형태의 prompt를 통해 prompt에 대한 explainability를 부여하고 ViT 모델의 모든 layer를 활용하여 학습이 되도록 하여 prompt의 성능을 개선한다.

### Original Model

- Continual learning setting에서 L2P 모델을 base 비교 모델로 선정
- Accuracy : 83.86%, Forgetting : 7.63%

### Image Prompt

단순 가능성 확인을 위해 이미지 형태로 prompt initialize

Patch Embedding Layer를 포함 할 경우

- Accuracy : 74%, Forgetting : 11.91%
- 이미지 크기 이슈
  - CIFAR100 데이터 셋으로 학습 할 경우 32x32 크기를 224x224 크기로 resize해주어야 한다
- Patch Embedding Layer 이슈
  - Patch Embedding Layer를 통과하게 되면 Prompt의 개수가 너무 많아진다.
  - 기존 방식 대비 거의 10배 가까이 Prompt가 생성되어 오히려 학습에 방해가 되는 것으로 예상

Patch Embeeding Layer를 포함하지 않는 경우

- Accuracy : 84.3%, Forgetting : 6.53%
  <img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/723ac118-1e79-49b3-a3ce-de275ff69d09/Untitled.png?id=b563f800-d4fd-4b99-9db6-a647f71a0eb6&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704103200000&signature=CJQdg253Gj_f1SEFqr3ZPKNNTVqBtyPvPyP95l0vD0o&downloadName=Untitled.png" width="500"/>

- Prompt의 개수, Dimension 모두 L2P와 동일하게 맞춰주기 위해 이미지의 dimension 변형을 진행
- 이미지 형태가 더 나은 Initialization 성능이라는 것을 알게됨
- 이 방식은 이미지의 Dimension을 유지하는 방식이 아니기 때문에 이미지 형태의 Prompt를 하기는 불가능

1. 생성형 AI를 통해 이미지 형태의 Prompt를 생성하는 방식을 시도
2. 데이터의 각 class 별 선택되는 이미지 Prompt의 경향성을 분석

### Generator Prompt

생성형 AI 모델을 사용해 Prompt를 생성 할 수 있는 방식으로 시도

1. Image Prompt Generator

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/3a891343-2058-490b-8c5d-a29860e45379/Untitled.png?id=9b79ae45-e247-4234-acf8-435046da596e&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704103200000&signature=nrHqiE5kul99XuIAISPznJL5O4QFgBHLlHB091vEH7g&downloadName=Untitled.png" width="500"/>

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/1f565854-0926-43df-9172-bcf764093b8c/Untitled.png?id=ff2b4f3c-ff8b-4a85-9607-a6435dd97f6e&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704110400000&signature=OLj82PnmdCvaDBaf-LJ2_BRWh06szwKsYCTOFjrgeYc&downloadName=Untitled.png" width="300"/>

- VAE 모델을 사용하여 Training 이미지를 생성하도록 학습
- 모델이 추가 되는 경우 학습이 더 어려움 + Forgetting이 발생
- Training 이미지의 분포와 성능이 좋은 Prompt의 분포가 다를 가능성

2. CLS Token Generator

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/75043a33-6a3f-4dbf-b594-475bed584023/Untitled.png?id=c0d8c7d6-4bb0-4a4a-94d3-c3b46977b67a&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704175200000&signature=Ino0oSaoP6rGpCGqLr0MyMD55zxfp3l_5rC8A_BV8mI&downloadName=Untitled.png" width="500" />

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/7861bd2b-3387-40a3-b881-3802befca477/Untitled.png?id=8996c5e1-d3e5-4b8d-896c-3dcb48c6b8b5&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704175200000&signature=ty6sJDTiC0I57bQG0SQSAUZZzrZuawA2vGAp2G7_bq4&downloadName=Untitled.png" width="300" />

- Training 이미지 보다 더 적은 차원을 사용하는 CLS 토큰을 사용
- 학습이 더 잘되는 모습
- 그러나 기존 방식에 비해 성능은 많이 낮은 모습

따라서, 기존 방식인 Prompt Pool과 함께 VAE 모델을 사용하는 방식으로 변형

3. Generator with Prompt Pool
   <img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/5e0aa9e6-4942-40e7-883a-2b96c386a703/Untitled.png?id=31f484a7-4058-4a66-9924-dcb78bf1b3da&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704175200000&signature=dXcu0pU6dfOsfH9aGCTIJu5kaPFcs1dq2cIjoeQrAzA&downloadName=Untitled.png" width="500">

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/c346d9fa-403d-4747-9fbb-23b1973124d7/Untitled.png?id=2bf3b658-f3c2-4c60-8bf1-d604a2695334&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704175200000&signature=oB8HYkEFojG9t1geXWpbncJS0j5tNmeRBAMqG_iF6lM&downloadName=Untitled.png" width="300">

- Generator를 사용한 방식 중 가장 성능이 좋음
- Generator를 더 최적화하면 성능 향상이 기대됨
- Generator에 대한 Forgetting을 줄여주기 위해 LwF 적용

4. Generator with Prompt Pool (LwF)

**Generator with Prompt Pool**
<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/d13d5a88-0e88-4c01-a446-f3fbd49acd90/Untitled.png?id=ba3a75ff-a4d7-45de-8c4b-baefe11440d7&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704182400000&signature=TG7l4GTquhyRwq8nIM_Nrxi4a7Iz9y5lPszSBpI3PKw&downloadName=Untitled.png" width="500">

**Generator with Prompt Pool (LwF)**
<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/0be9de2b-090e-48f6-87d8-73319555be82/Untitled.png?id=b15d7a3f-a498-4500-bfe4-8d521261cb64&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704182400000&signature=nFSAgbi8tfb7GXvYP_J8jV78PrABDGIaV6Vumyym4Hc&downloadName=Untitled.png" width="500">

- 각 Task 별 성능을 나타낸 표
- 가로 축은 각 task를 의미
- 세로 축은 해당 task 까지 학습 되었음을 의미
- Ex) 위에서 3번째 줄은 2번 task까지 학습 되었음을 의미하며 각 인덱스는 해당 Task에 해당하는 성능을 나타냄
- LwF 사용시 새로운 Task에 대한 성능이 떨어짐 (LwF의 Regularization 때문)
- 기존 Task의 Forgetting은 감소
- 성능의 감소와 Forgetting의 감소가 Trade Off 되어 적절한 LwF의 Weigth를 적용해주어야 함

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/5b807d32-1199-4f36-ad1d-69ad3b06f689/Untitled.png?id=877a2f7e-3100-4fff-97f4-1fe729a72d7b&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704182400000&signature=VtIG9dOylXzOirnX5Uh-mbjGvj_wSOjHXxRfhXJ9sR4&downloadName=Untitled.png" width="300">

### 경향성 분석

Generator 모델이 생성한 이미지 형태의 Prompt가 특정 Class에서 선택된 빈도를 분석

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/f3c87af7-dc5d-4d4a-9226-26b36e527831/Untitled.png?id=2bd680ae-0ba5-4a86-a374-3d42d9fac740&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704175200000&signature=tVf7EQsiC9NZis42f-B3xTrz19-oe9p_L_ZcW8t_y5I&downloadName=Untitled.png" width="500">

- Prompt는 Training Image로 부터 initialized
- 왼쪽 부터 순서대로 0~9번 Prompt
- Apple, Boy, Maple, Mountain, Bee, Chair, Lion, Poppy, Crab, Bus

**Apple**
<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/011a0ca8-91a2-4755-8da0-154f1541cb99/Untitled.png?id=6bafb7de-81bc-4d68-b5b2-ea735d9cf248&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704182400000&signature=KU3sd1XC8Zvxrf6JZTuwMcIlUzGxgWWIj5nDi0Ffsyg&downloadName=Untitled.png" width="500"/>

**Baby**
<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/38d6078c-4477-42b7-a027-caa8f9190006/Untitled.png?id=e273684f-6a2e-43dd-bf70-81cf10867228&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704182400000&signature=OR0sKExZ-eXzeiFBKYiQkMXIbqxCe2sAQoTb0DTpFiA&downloadName=Untitled.png" width="500"/>

- Apple의 경우 Boy, Mountain, Chair, Poppy 가 가장 많이 선택 되었음
- 0번 Apple이 가장 많이 선택 되는 것을 기대했지만 결과는 그렇지 않음
- 각 class가 크게 다르지 않은 CIFAR100의 문제?

### Results

<img src="https://file.notion.so/f/f/b8ce6778-d5c0-404f-842c-bec1c153f393/4dcab716-983d-45e1-8b13-4ecf0929af17/Untitled.png?id=72475e11-d4fb-4836-9db5-b322217ad88d&table=block&spaceId=b8ce6778-d5c0-404f-842c-bec1c153f393&expirationTimestamp=1704182400000&signature=Yen1oQmBQQHHVgK4bZJ64Qvco7mj8FQxvsQ4W_itDXw&downloadName=Untitled.png" width="500">

- 이미지 형태로 Prompt를 학습하여 ViT 모델의 모든 Layer를 사용하여 성능 향상을 목표로 하였지만 Patch Embedding Layer를 사용시 이미지 Dimension과 Prompt Length가 맞지 않는 문제가 발생
- 이미지 형태로 Prompt를 학습하여 Causal Inference 진행을 목표로 했지만 Class 별 Prompt 선택되는 Frequency에서 유의미한 관계성을 찾지 못하였음
- 차선책으로 Prompt Generator와 Prompt Pool을 함께 사용하여 성능 향상을 목표로 학습하였으나 성능이 잘 나오지 않았음
- Generator 모델에 대한 최적화가 필요
