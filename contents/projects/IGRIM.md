---
date: '2023-03-01'
title: 'IGRIM'
categories: ['SpringBoot', 'PyTorch', 'OpenCV', 'Flutter']
summary: 'Stable Diffusion 모델을 활용한 동화책 서비스'
thumbnail: '../../static/IGRIM.png'
---

# IGRIM

<a href="https://github.com/I-GRIM">
IGRIM Github Link
</a>

📖 아이들이 즐겁게 글쓰기를 할 수 있도록 아이들이 작성한 이야기를 바탕으로 동화책을 제작해주는 서비스입니다. 아이들이 작성한 이야기에서 캐릭터에 대한 키워드를 추출하여 캐릭터의 다양한 표정과 행동을 생성해 일러스트를 제작해줍니다.

### 🛠️사용 기술 및 라이브러리

- Pytorch
- SpringBoot
- Flutter
- EC2, RDS
- Google Cloud - Compute Engine
- Stable Diffusion
- DreamBooth

### 🎮 담당한 기능

- AI 모델 구현 및 학습 (PyTorch, StableDiffusion, DreamBooth)
- Stable Diffusion 모델에 DreamBooth를 통한 새로운 character 추가
- Prompt Engineering을 통한 user-written prompt에서 character variation feature 추출 (ChatGPT API 활용)
- AI 모델 배포 (Google Cloud, SpringBoot)
- 프론트엔드 개발 (Flutter)
