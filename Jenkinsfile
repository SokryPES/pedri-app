pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'sokrypes/pedri-app'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials-id'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE:${BUILD_NUMBER} .'
                    sh 'docker tag $DOCKER_IMAGE:${BUILD_NUMBER} $DOCKER_IMAGE:latest'
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USER')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push $DOCKER_IMAGE:${BUILD_NUMBER}'
                        sh 'docker push $DOCKER_IMAGE:latest'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker logout || true'
                sh 'docker image prune -f || true'
            }
        }
    }
}