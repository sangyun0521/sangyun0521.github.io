---
title: "SpringBoot + Docker + GithubAction CI/CD "
date: 2024-01-30T09:09:16.976Z
category: Web
---
현재 상황 :

* SpringBoot 서버 개발 중 : 완성된 API는 개발 서버에 배포하여 프론트에서 연결 테스트 가능

  * API가 추가 되면 build 후 dockerfile을 이용해서 이미지를 빌드 하고 Docker Hub에 올린다.
  * 개발 서버에 돌아가던 Docker Container를 내리고 Docker Hub에서 최신 버전의 이미지를 받아 실행한다.
* 위의 작업을 자동화 하기 위해 Github Action을 사용하기로 결정

  * Github Repo의 Master 브랜치에 머지를 하면 자동으로 Github Action 환경에서 빌드, 도커 이미지 빌드 및 Hub 에 Push, 개발 서버에 접속해서 Docker 이미지 다운 및 실행 까지

1. Github repo에서 Action 시작

   * YAML 파일 작성 해주어야 함

```yaml
name: Java CI/CD with Gradle
# 언제 작동 시킬 것인가
on:
  push:
    branches: [ "master" ]
#  pull_request:
#    branches: [ "master" ]

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    # 현재 REPO에서 코드를 워크플로우 환경으로 이동
    - uses: actions/checkout@v3
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'adopt'
    # Github secrets로부터 데이터를 받아서, 워크 플로우에 파일을 생성
    - name: Make application.properties
      run: |
         cd ./src/main/resources
         touch ./application.properties
         echo "${{ secrets.PROPERTIES }}" > ./application.properties
      shell: bash	 
      
    - name: Build with Gradle
      run: |
          chmod +x ./gradlew
          ./gradlew clean build -x test
   # dockerfile을 통해 이미지를 빌드하고, 이를 docker repo로 push.
    - name: Docker build & push to docker repo
      run: |
          docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}
          docker build -f Dockerfile -t ${{ secrets.DOCKER_REPO }}/arichat_backend .
          docker push ${{ secrets.DOCKER_REPO }}/arichat_backend

   # 서버에 ssh로 접속 후 script를 실행
    - name: Deploy to server
      uses: appleboy/ssh-action@master
      id: deploy
      with:
        host: ${{ secrets.HOST }}
        username: ubuntu
        key: ${{ secrets.KEY }}
        envs: GITHUB_SHA
        script : |
          sudo docker rm -f $(docker ps -qa)
          sudo docker pull ${{ secrets.DOCKER_REPO }}/directors-dev
          docker-compose up -d
          docker image prune -f
```

1. Secretes에 필요한 변수들 추가
2. 개발 서버에 접속해서 Docker-compose 설정

   ```yaml
   version: '3'
   services:
     web:
       container_name: web
       image: song229/springboot-github-actions-test
       expose:
       - 8080
       ports:
       - 8080:8080
   ```