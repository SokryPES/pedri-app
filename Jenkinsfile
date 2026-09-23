pipeline {
    agent any

    environment {
        DOCKER_USER = 'sokrypes'
        APP_NAME    = 'pedri-app'
    }

    stages {

        stage('1. Build Image') {
            steps {
                sh "docker build -t ${DOCKER_USER}/${APP_NAME}:${BUILD_NUMBER} ."
            }
        }

        stage('2. Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials-id', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh """
                        echo $PASS | docker login -u $USER --password-stdin
                        docker push ${DOCKER_USER}/${APP_NAME}:${BUILD_NUMBER}
                    """
                }
            }
        }

        stage('3. Update Manifest Repo') {
            steps {
                withCredentials([string(credentialsId: 'github-pat', variable: 'TOKEN')]) {
                    sh """
                        git clone https://${TOKEN}@github.com/SokryPES/pedri-manifests.git
                        cd pedri-manifests/charts/khmer-frontend
                        sed -i "s|tag: .*|tag: \\"${BUILD_NUMBER}\\"|g" values.yaml
                        git commit -am "update image tag to ${BUILD_NUMBER}"
                        git push origin main
                    """
                }
            }
        }

    }
}